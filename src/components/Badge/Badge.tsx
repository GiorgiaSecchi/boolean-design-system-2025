import type React from "react";
import "./Badge.css";

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
    <div className={`badge ${variant}`} {...attrs}>
      {children}
    </div>
  );
};
