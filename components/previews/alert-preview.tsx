"use client";

import { cn } from "@/lib/utils";
import { PreviewProps } from "@/lib/types";

export function AlertPreview({ color, isDark }: PreviewProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border",
        isDark ? "border-opacity-20" : "border-opacity-40"
      )}
      style={{ 
        backgroundColor: color,
        borderColor: color
      }}
    >
      <div className={cn(
        "font-medium mb-1",
        isDark ? "text-gray-100" : "text-gray-900"
      )}>
        Important message
      </div>
      <p className={cn(
        "text-sm",
        isDark ? "text-gray-300" : "text-gray-700"
      )}>
        This alert contains essential informations.
      </p>
    </div>
  );
}