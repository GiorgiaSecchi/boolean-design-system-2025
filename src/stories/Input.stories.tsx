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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ label }) => (
    <div>
      <Input
        label={label}
        placeholder="Scrivi qui..."
        iconPosition="left"
        kind="email"
        icon="Edit3"
      />
      <Input
        label={label}
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        kind="select"
      />
      <Input
        label={label}
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        kind="radio"
        name="Nome"
      />
    </div>
  ),
};

export const InputStory: Story = {
  render: ({ label }) => <Input icon="Edit3" label={label} kind="text" />,
};

export const Select: Story = {
  render: ({ label }) => (
    <Input
      label={label}
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      kind="select"
    />
  ),
};

export const Radio: Story = {
  render: ({ label }) => (
    <Input
      label={label}
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      kind="radio"
      name="Nome"
    />
  ),
};
