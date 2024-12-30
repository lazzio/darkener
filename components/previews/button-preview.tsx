"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PreviewProps } from "@/lib/types";

export function ButtonPreview({ color, isDark }: PreviewProps) {
  return (
    <Button
      style={{ backgroundColor: color }}
      className={cn(
        "text-white hover:opacity-90 transition-opacity",
        isDark ? "hover:bg-opacity-90" : ""
      )}
    >
      Action button
    </Button>
  );
}