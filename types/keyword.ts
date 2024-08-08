export interface IKeyword {
  keyword: string;
  is_positive: boolean;
  is_negative: boolean;
  is_neutral: boolean;
  emphasis: number;
}

export type SentimentScore = "Positive" | "Negative" | "Neutral";
