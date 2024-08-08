import { FeedbackForm } from "@/components/feedback-form/FeedbackForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <FeedbackForm />
    </main>
  );
}
