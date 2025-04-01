"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SubscriptionButtonProps {
  isPro: boolean;
}

const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      //   window.open(response.data.url, "_blank")?.focus();
      window.location.href = response.data.url;
    } catch (error) {
      console.log("[SUBSCRIPTION_BUTTON_ERROR]", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={loading}
      size="sm"
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Sparkles className="w-4 h-4 ml-2 fill-white text-white" />}
    </Button>
  );
};

export default SubscriptionButton;
