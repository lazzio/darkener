"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Palette, Moon, Sun } from "lucide-react";
import { transformers } from "@/lib/color-transformers";
import { ColorInput } from "@/components/color-input";
import { ColorPreview } from "@/components/color-preview";
import { ElementSelector } from "@/components/element-selector";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const [lightColor, setLightColor] = useState("#4F46E5");
  const [elementType, setElementType] = useState("button");
  const [method, setMethod] = useState("hsl");
  const darkColor = transformers[method](lightColor);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <main className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <Palette className="w-8 h-8" />
            Dark mode generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Generate automatically the dark version of a light mode color
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <ColorInput
              label="Your light color"
              value={lightColor}
              onChange={setLightColor}
            />
            <div className="space-y-2">
              <p className="text-sm font-medium">Component</p>
              <ElementSelector
                value={elementType}
                onChange={setElementType}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">Generation method</p>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a conversion method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hsl">HSL adjustment</SelectItem>
                  <SelectItem value="darken">Darkener</SelectItem>
                  <SelectItem value="invert">Inversion</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <Sun className="w-6 h-6 text-yellow-500" />
            <div className="h-px w-20 bg-border" />
            <Moon className="w-6 h-6 text-blue-500" />
          </div>

          <ColorInput
            label="Generated dark version"
            value={darkColor}
            readonly
          />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorPreview
            color={lightColor}
            title="Light preview"
            elementType={elementType}
          />
          <ColorPreview
            color={darkColor}
            title="Dark preview"
            isDark
            elementType={elementType}
          />
        </div>
      </main>
    </div>
  );
}