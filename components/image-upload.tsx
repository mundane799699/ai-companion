"use client";

import { useState, useEffect } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        onSuccess={(result: any) => {
          onChange(result.info.secure_url);
        }}
        options={{
          maxFiles: 1,
        }}
        uploadPreset="ml_default"
      >
        <div
          className="
            p-4
            border-4
            border-dashed
            border-primary/10
            rounded-lg
            hover:opacity-75
            transition
            flex
            flex-col
            space-y-2
            items-center
            justify-center
        "
        >
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="Upload"
              src={value || "/placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};
