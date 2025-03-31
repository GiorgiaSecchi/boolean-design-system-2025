/*
  <Input kind="text" placeholder="Placeholder" label="Label" name="name" />

  <Input kind="select" label="Label" name="name" options={[
			{ label: "Option 1", value: "option1" },
			{ label: "Option 2", value: "option2" },
		]}
	/>

   <Input kind="radio" label="Label" name="name" options={[
			{ label: "Option 1", value: "option1" },
			{ label: "Option 2", value: "option2" },
		]}
	/>

*/

import React from "react";
import root from "react-shadow";
import css from "./Input.css?raw";
import * as Icon from "react-feather";
import { GlobalStyles } from "../GlobalStyles";

type InputProps = {
  kind: "text" | "email" | "password";
  icon?: keyof typeof Icon;
  iconPosition?: "left" | "right";
} & React.InputHTMLAttributes<HTMLInputElement>;

type SelectProps = {
  kind: "select";
  options: { label: string; value: string }[];
  placeholder?: string;
  icon?: never;
  iconPosition?: never;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

type RadioProps = {
  kind: "radio";
  options: { label: string; value: string }[];
  placeholder?: never;
  name: string;
  icon?: never;
  iconPosition?: never;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InternalInput: React.FC<InputProps | SelectProps | RadioProps> = (
  props
) => {
  switch (props.kind) {
    case "select":
      return (
        <select {...props}>
          {props.placeholder && (
            <option value="" disabled selected>
              {props.placeholder}
            </option>
          )}
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case "radio":
      return (
        <>
          {props.options.map((option) => (
            <label key={option.value}>
              <input type="radio" {...props} value={option.value} />
              {option.label}
            </label>
          ))}
        </>
      );
    default:
      return <input type={props.kind} {...props} />;
  }
};

type GeneralInputProps = (InputProps | SelectProps | RadioProps) & {
  label: React.ReactNode;
  icon?: keyof typeof Icon;
  errorText?: React.ReactNode; // Error message to display
  isInvalid?: boolean; // Flag to indicate if the input is invalid
};

export const Input: React.FC<GeneralInputProps> = ({
  label,
  id,
  className,
  icon,
  iconPosition,
  errorText,
  isInvalid,
  ...props
}) => {
  const defaultId = React.useId() || id;
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <>
      <root.div>
        <GlobalStyles />
        <style>{css}</style>
        <div
          className={`
          ${className ?? ""} container ${props.kind} 
          ${isInvalid ? "is-invalid" : ""}
          `}
        >
          {props.kind === "radio" ? (
            <span className="label">{label}</span>
          ) : (
            <label htmlFor={defaultId}>{label}</label>
          )}
          <div className="input-container">
            <InternalInput {...props} id={defaultId} />
            {IconComponent && (
              <div className={`icon ${iconPosition || ""}`}>
                <IconComponent />
              </div>
            )}
          </div>
          {errorText && <span className="error-text">{errorText}</span>}
        </div>
      </root.div>
    </>
  );
};
