"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { previewElements } from "@/lib/preview-elements";

interface ElementSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ElementSelector({ value, onChange }: ElementSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Choisir un élément" />
      </SelectTrigger>
      <SelectContent>
        {previewElements.map((element) => (
          <SelectItem key={element.id} value={element.id}>
            {element.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}