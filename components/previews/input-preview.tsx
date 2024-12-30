"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PreviewProps } from "@/lib/types";

export function InputPreview({ color, isDark }: PreviewProps) {
  return (
    <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
      <Input
        style={{ backgroundColor: color }}
      />
      Type a text
    </div>
  );
}