export interface PreviewProps {
  color: string;
  isDark?: boolean;
}

export interface PreviewElement {
  id: string;
  label: string;
  preview: (color: string, isDark?: boolean) => JSX.Element;
}