"use client";

import {Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { PreviewProps } from "@/lib/types";

export function CalendarPreview({ color, isDark }: PreviewProps) {
  return (
      <Calendar
        className={cn(isDark ? "text-gray-300" : "text-gray-700")}
        style={{ backgroundColor: color }}
      />
  );
}