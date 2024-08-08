import { IKeyword } from "@/types/keyword";
import { analyzeSentiment } from "@/app/actions/submitFeedbackForm";

const keywordsMock: IKeyword[] = [
  {
    keyword: "ok",
    is_positive: false,
    is_negative: false,
    is_neutral: true,
    emphasis: 0,
  },
  {
    keyword: "perfect",
    is_positive: true,
    is_negative: false,
    is_neutral: false,
    emphasis: 3,
  },
  {
    keyword: "amazing",
    is_positive: true,
    is_negative: false,
    is_neutral: false,
    emphasis: 3,
  },
  {
    keyword: "disgusting",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 3,
  },
  {
    keyword: "busy",
    is_positive: false,
    is_negative: false,
    is_neutral: true,
    emphasis: 0,
  },
  {
    keyword: "soggy",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 1,
  },
  {
    keyword: "best",
    is_positive: true,
    is_negative: false,
    is_neutral: false,
    emphasis: 3,
  },
  {
    keyword: "neat",
    is_positive: true,
    is_negative: false,
    is_neutral: false,
    emphasis: 1,
  },
  {
    keyword: "fantastic",
    is_positive: true,
    is_negative: false,
    is_neutral: false,
    emphasis: 3,
  },
  {
    keyword: "expensive",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 2,
  },
  {
    keyword: "small",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 1,
  },
  {
    keyword: "bad",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 2,
  },
  {
    keyword: "worst",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 3,
  },
  {
    keyword: "rude",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 2,
  },
  {
    keyword: "horrible",
    is_positive: false,
    is_negative: true,
    is_neutral: false,
    emphasis: 3,
  },
];

describe(".analyzeSentiment()", () => {
  describe("when feedback is positive", () => {
    test("should return positive sentiment score", () => {
      const feedbackMock =
        "The service was perfect and the food was amazing but the place was disgusting";
      const result = analyzeSentiment(feedbackMock, keywordsMock);

      expect(result).toEqual("Positive");
    });
  });

  describe("when feedback is negative", () => {
    test("should return negative sentiment score", () => {
      const feedbackMock =
        "The food was cold, the service was horrible, and the place was dirty.";
      const result = analyzeSentiment(feedbackMock, keywordsMock);

      expect(result).toEqual("Negative");
    });
  });

  describe("when feedback is neutral", () => {
    test("should return neutral sentiment score", () => {
      const feedbackMock = "The experience was ok, nothing special";
      const result = analyzeSentiment(feedbackMock, keywordsMock);

      expect(result).toEqual("Neutral");
    });
  });
});
