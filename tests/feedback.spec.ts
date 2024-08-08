import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Share Your Feedback/);
});

test("has form", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("textbox", { name: "Name" }).fill("Chase");
  await page.getByRole("textbox", { name: "Email" }).fill("chase@example.com");
  await page
    .getByRole("textbox", { name: "Feedback" })
    .fill(
      "The service was perfect and the food was amazing but the place was disgusting"
    );

  await expect(page.getByRole("textbox", { name: "Name" })).toHaveValue(
    "Chase"
  );
  await expect(page.getByRole("textbox", { name: "Email" })).toHaveValue(
    "chase@example.com"
  );
  await expect(page.getByRole("textbox", { name: "Feedback" })).toHaveValue(
    "The service was perfect and the food was amazing but the place was disgusting"
  );
  await expect(
    page.getByRole("button", { name: "Submit Feedback" })
  ).toBeVisible();
});
