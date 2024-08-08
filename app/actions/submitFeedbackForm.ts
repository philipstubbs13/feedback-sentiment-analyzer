"use server";

import { IKeyword, SentimentScore } from "@/types/keyword";

interface FeedbackFormData {
  name: string;
  email: string;
  feedback: string;
  sentimentScore: SentimentScore;
}

interface FeedbackFormResult {
  data?: FeedbackFormData;
  error?: string;
}

async function submitFeedbackForm(
  formData: FormData
): Promise<FeedbackFormResult> {
  const nameValue = formData.get("name");
  const emailValue = formData.get("email");
  const feedbackValue = formData.get("feedback");

  if (!nameValue) {
    return { error: "Name is required." };
  }

  if (!emailValue) {
    return { error: "Email is required." };
  }

  if (!feedbackValue) {
    return { error: "Feedback is required." };
  }

  const name: string = nameValue.toString();
  const email: string = emailValue.toString();
  const feedback: string = feedbackValue.toString();

  try {
    const keywordsResponse = await fetch(
      "https://8bk8vzds9b.execute-api.us-east-1.amazonaws.com/prod/keywords"
    );
    const keywordsData = (await keywordsResponse.json()) as
      | IKeyword[]
      | undefined;
    const sentimentScore = analyzeSentiment(feedback, keywordsData);

    return {
      data: {
        name,
        email,
        feedback,
        sentimentScore,
      },
    };
  } catch (error) {
    return { error: "Error submitting feedback form. Please try again." };
  }
}

export const analyzeSentiment = (
  feedback: string = "",
  keywordsData: IKeyword[] = []
): SentimentScore => {
  const tokens = feedback.toLowerCase().match(/\b\w+\b/g);

  let positiveScore = 0;
  let negativeScore = 0;
  let neutralScore = 0;

  tokens?.forEach((token) => {
    keywordsData.forEach((entry) => {
      if (entry.keyword === token) {
        if (entry.is_positive) {
          positiveScore += entry.emphasis;
        } else if (entry.is_negative) {
          negativeScore += entry.emphasis;
        } else if (entry.is_neutral) {
          neutralScore += entry.emphasis;
        }
      }
    });
  });

  if (positiveScore > negativeScore && positiveScore > neutralScore) {
    return "Positive";
  } else if (negativeScore > positiveScore && negativeScore > neutralScore) {
    return "Negative";
  } else {
    return "Neutral";
  }
};

export default submitFeedbackForm;
