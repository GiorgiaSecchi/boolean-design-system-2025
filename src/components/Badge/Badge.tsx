import type React from "react";
import root from "react-shadow"; // metodo per css incapsulato
import css from "./Badge.css?raw";
import { GlobalStyles } from "../GlobalStyles";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "neutral" | "positive" | "negative";
} & React.HTMLAttributes<HTMLSpanElement>;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  ...attrs
}) => {
  return (
    <root.span data-testid="badge-root">
      <GlobalStyles />
      <style>{css}</style>
      <span className={`badge ${variant}`} {...attrs}>
        {children}
      </span>
    </root.span>
  );
};
