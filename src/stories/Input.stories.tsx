import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";
// import React from "react";

const meta: Meta = {
  title: "Components/Input", // Title of the component
  parameters: {
    layout: "centered", // Center the component
  },
  args: {
    label: "Label",
    isInvalid: false, // Default value for isInvalid prop
    disabled: false, // Default value for disabled prop
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ label, isInvalid, disabled }) => (
    <div>
      <Input
        label={label}
        placeholder="Scrivi qui..."
        iconPosition="left"
        kind="email"
        icon="Edit3"
        errorText="Invalid email" // Error message
        isInvalid={isInvalid} // Flag to indicate if the input is invalid
        disabled={disabled}
      />
      <Input
        label={label}
        isInvalid={isInvalid}
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        kind="select"
        disabled={disabled}
      />
      <Input
        label={label}
        isInvalid={isInvalid}
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        kind="radio"
        name="Nome"
        errorText="Invalid selection"
        disabled={disabled}
      />
    </div>
  ),
};

export const InputStory: Story = {
  render: ({ label }) => <Input icon="Edit3" label={label} kind="text" />,
};

export const Select: Story = {
  render: ({ label, isInvalid, disabled }) => (
    <Input
      label={label}
      isInvalid={isInvalid}
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      kind="select"
      disabled={disabled}
    />
  ),
};

export const Radio: Story = {
  render: ({ label, isInvalid, disabled }) => (
    <Input
      label={label}
      isInvalid={isInvalid}
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      kind="radio"
      name="Nome"
      errorText="Invalid selection"
      disabled={disabled}
    />
  ),
};
