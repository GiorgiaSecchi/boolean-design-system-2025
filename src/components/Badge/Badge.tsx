import type React from "react";
import root from "react-shadow"; // metodo per css incapsulato
import css from "./Badge.css?raw";
// import "./Badge.css";

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
    <root.div>
      <style>{css}</style>
      <div className={`badge ${variant}`} {...attrs}>
        {children}
      </div>
    </root.div>
  );
};
