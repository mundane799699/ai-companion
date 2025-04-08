"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar: FC = () => {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 border-b shadow-sm">
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2">
        {!isSignedIn && isLoaded && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Log in
              </Button>
            </SignInButton>
          </>
        )}
        {isSignedIn && isLoaded && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href="/dashboard">Enter AI Companion</Link>
            </Button>
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
export default Navbar;
