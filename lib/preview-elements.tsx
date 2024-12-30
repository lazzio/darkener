import { ButtonPreview } from "@/components/previews/button-preview";
import { CardPreview } from "@/components/previews/card-preview";
import { AlertPreview } from "@/components/previews/alert-preview";
import { InputPreview } from "@/components/previews/input-preview";
import { CalendarPreview } from "@/components/previews/calendar-preview";
import { MenubarPreview } from "@/components/previews/menubar-preview";
import { PreviewElement } from "./types";

export const previewElements: PreviewElement[] = [
  {
    id: "button",
    label: "Button",
    preview: (color, isDark) => <ButtonPreview color={color} isDark={isDark} />,
  },
  {
    id: "card",
    label: "Card",
    preview: (color, isDark) => <CardPreview color={color} isDark={isDark} />,
  },
  {
    id: "alert",
    label: "Alert",
    preview: (color, isDark) => <AlertPreview color={color} isDark={isDark} />,
  },
  {
    id: "input",
    label: "Input",
    preview: (color, isDark) => <InputPreview color={color} isDark={isDark} />,
  },
  {
    id: "calendar",
    label: "Calendar",
    preview: (color, isDark) => <CalendarPreview color={color} isDark={isDark} />,
  },
  {
    id: "menubar",
    label: "Menubar",
    preview: (color, isDark) => <MenubarPreview color={color} isDark={isDark} />,
  },
];