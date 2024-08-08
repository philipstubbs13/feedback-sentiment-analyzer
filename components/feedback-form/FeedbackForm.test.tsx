import { render, screen } from "@testing-library/react";
import { FeedbackForm } from "@/components/feedback-form/FeedbackForm";
import userEvent from "@testing-library/user-event";

describe("FeedbackForm", () => {
  test("should render feedback form", async () => {
    render(<FeedbackForm />);

    expect(screen.getByText(/share your feedback/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Submit Feedback" })
    ).toBeInTheDocument();

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const feedbackInput = screen.getByLabelText(/feedback/i);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(feedbackInput).toHaveValue("");

    await userEvent.type(nameInput, "chase");
    await userEvent.type(emailInput, "chase@example.com");
    await userEvent.type(feedbackInput, "Food was amazing");

    expect(nameInput).toHaveValue("chase");
    expect(emailInput).toHaveValue("chase@example.com");
    expect(feedbackInput).toHaveValue("Food was amazing");
  });
});
