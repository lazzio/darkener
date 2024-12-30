"use client";

import { Card } from "@/components/ui/card";
import { previewElements } from "@/lib/preview-elements";

interface ColorPreviewProps {
  color: string;
  isDark?: boolean;
  title: string;
  elementType: string;
}

export function ColorPreview({ color, isDark, title, elementType }: ColorPreviewProps) {
  const selectedElement = previewElements.find(el => el.id === elementType);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="rounded-lg p-6 space-y-4 bg-card">
        {selectedElement?.preview(color, isDark)}
      </div>
    </Card>
  );
}