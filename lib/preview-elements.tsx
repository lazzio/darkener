import { ButtonPreview } from "@/components/previews/button-preview";
import { CardPreview } from "@/components/previews/card-preview";
import { AlertPreview } from "@/components/previews/alert-preview";
import { PreviewElement } from "./types";

export const previewElements: PreviewElement[] = [
  {
    id: "button",
    label: "Bouton",
    preview: (color, isDark) => <ButtonPreview color={color} isDark={isDark} />,
  },
  {
    id: "card",
    label: "Carte",
    preview: (color, isDark) => <CardPreview color={color} isDark={isDark} />,
  },
  {
    id: "alert",
    label: "Alerte",
    preview: (color, isDark) => <AlertPreview color={color} isDark={isDark} />,
  },
];