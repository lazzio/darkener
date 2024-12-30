"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

interface ColorInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export function ColorInput({ label, value, onChange, readonly }: ColorInputProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="space-y-4">
      <Label>{label}</Label>
      <div className="flex gap-4">
        {!readonly && (
          <Input
            type="color"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-20 h-20 p-1 cursor-pointer"
          />
        )}
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono">{value}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div
            className="w-full h-20 rounded-lg border"
            style={{ backgroundColor: value }}
          />
        </div>
      </div>
    </div>
  );
}