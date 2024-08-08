import { SentimentScore as SentimentScoreType } from "@/types/keyword";

interface IProps {
  score: SentimentScoreType;
}

export const SentimentScore = (props: IProps) => {
  return (
    <>
      <div className="flex items-center gap-2 text-lg font-medium">
        <span className="bold" data-testid="sentiment-score">
          {props.score} Sentiment
        </span>
      </div>
      <p className="text-muted-foreground">
        Your feedback has been analyzed and determined to have a{" "}
        <b>{props.score}</b> sentiment. Thank you for your valuable input!
      </p>
    </>
  );
};
