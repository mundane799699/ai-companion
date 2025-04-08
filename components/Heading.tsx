"use client";

import { ArrowRight } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Heading = () => {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Personal AI Companions. <br />
        <span className="underline mt-2 inline-block">Always Here For You</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Connect with intelligent AI companions for <br />
        conversation, support, and personalized assistance.
      </h3>
      {isSignedIn && isLoaded && (
        <Button asChild>
          <Link href="/dashboard">Enter AI Companion</Link>
        </Button>
      )}
      {!isSignedIn && isLoaded && (
        <SignInButton mode="modal">
          <Button>
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
