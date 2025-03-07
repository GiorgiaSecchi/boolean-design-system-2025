import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "Badge", // Title of the component
  component: Badge, // Component to display in the Docs
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Badge />,
};
