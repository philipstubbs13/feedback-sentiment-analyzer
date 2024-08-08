import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Home", () => {
  test("should render home page", () => {
    render(<Page />);

    expect(screen.getByText(/share your feedback/i)).toBeInTheDocument();
  });

  it.skip("renders homepage unchanged", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
