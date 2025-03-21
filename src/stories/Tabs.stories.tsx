import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../components/Tabs/Tabs";

// Definisce il titolo e il componente per la storia
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

// Definisce il tipo di storia
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tabs.Item label="Tab 1">Tab 1 content</Tabs.Item>
      <Tabs.Item label="Tab 2">Tab 2 content</Tabs.Item>
      <Tabs.Item label="Tab 3">Tab 3 content</Tabs.Item>
    </Tabs>
  ),
};
