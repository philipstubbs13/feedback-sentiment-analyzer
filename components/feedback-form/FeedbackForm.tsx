"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import submitFeedbackForm from "@/app/actions/submitFeedbackForm";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SentimentScore as SentimentScoreType } from "@/types/keyword";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SentimentScore } from "@/components/sentiment-score/SentimentScore";

export const FeedbackForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [sentimentScore, setSentimentScore] =
    useState<SentimentScoreType | null>(null);

  const submitAction = async (formData: FormData) => {
    const { error, data } = await submitFeedbackForm(formData);

    if (error) {
      console.error(error);
      toast({
        title: error,
        variant: "destructive",
      });

      return;
    }

    if (data) {
      setSentimentScore(data.sentimentScore);
      toast({
        title: "Thank you for your feedback",
        description: "Your feedback has been sent.",
      });
      formRef.current?.reset();
    }
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Share Your Feedback</CardTitle>
        <CardDescription>
          We value your input and use it to improve our products and services.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={submitAction} className="grid gap-4" ref={formRef}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts and experiences"
              className="min-h-[150px]"
              name="feedback"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="outline">
              Submit Feedback
            </Button>
          </div>
        </form>
      </CardContent>
      {sentimentScore && (
        <CardFooter className="flex flex-col items-center gap-4">
          <SentimentScore score={sentimentScore} />
        </CardFooter>
      )}
    </Card>
  );
};
