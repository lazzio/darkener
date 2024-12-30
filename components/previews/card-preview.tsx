"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PreviewProps } from "@/lib/types";

export function CardPreview({ color, isDark }: PreviewProps) {
  return (
    <Card 
      className="p-4 w-full"
      style={{ backgroundColor: color }}
    >
      <h3 className={cn(
        "font-medium mb-2",
        isDark ? "text-gray-100" : "text-gray-900"
      )}>
        Card title
      </h3>
      <p className={cn(
        "text-sm",
        isDark ? "text-gray-300" : "text-gray-700"
      )}>
        Card content with a descriptive text
      </p>
    </Card>
  );
}