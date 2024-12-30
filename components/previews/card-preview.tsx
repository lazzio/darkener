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
        Titre de la carte
      </h3>
      <p className={cn(
        "text-sm",
        isDark ? "text-gray-300" : "text-gray-700"
      )}>
        Contenu de la carte avec du texte descriptif
      </p>
    </Card>
  );
}