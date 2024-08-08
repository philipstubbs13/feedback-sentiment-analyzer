import { render, screen } from "@testing-library/react";
import { SentimentScore } from "./SentimentScore";

describe("SentimentScore", () => {
  describe("when score is positive", () => {
    test("should render positive", async () => {
      render(<SentimentScore score="Positive" />);

      expect(screen.getAllByText(/positive/i)).toHaveLength(2);
    });
  });

  describe("when score is negative", () => {
    test("should render negative", async () => {
      render(<SentimentScore score="Negative" />);

      expect(screen.getAllByText(/negative/i)).toHaveLength(2);
    });
  });

  describe("when score is neutral", () => {
    test("should render neutral", async () => {
      render(<SentimentScore score="Neutral" />);

      expect(screen.getAllByText(/neutral/i)).toHaveLength(2);
    });
  });
});
