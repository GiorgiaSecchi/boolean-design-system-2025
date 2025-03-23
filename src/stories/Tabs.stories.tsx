import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../components/Tabs/Tabs";
import React from "react";
import root from "react-shadow";
import { Badge } from "../components/Badge/Badge";

// Definisce il titolo e il componente per la storia
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

// Definisce il tipo di storia
type Story = StoryObj<typeof Tabs>;

// Crea uno scheletro per i contenuti dei tab
const Skeleton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <root.div>
      <style>{`
				div {
					text-align: center;
					background-color: light-dark(var(--color-gray-2), var(--color-gray-15));
					border-radius: var(--border-radius-md, 0.5rem);
					width: 30rem;
					max-width: 100%;
					min-height: 4rem;
					margin-bottom: 1rem;
					align-content: center;
				}
			`}</style>
      <div>{children}</div>
      <div></div>
      <div></div>
      <div></div>
    </root.div>
  );
};

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tabs.Item label="Tab  1">
        <Skeleton> Tab content 1</Skeleton>
      </Tabs.Item>
      <Tabs.Item label="Tab  2">
        <Skeleton> Tab content 2</Skeleton>
      </Tabs.Item>
      <Tabs.Item
        label={
          <span>
            Label 3 <Badge>New</Badge>
          </span>
        }
      >
        <Skeleton>Tab content 3</Skeleton>
      </Tabs.Item>
      <Tabs.Item
        label={
          <span>
            Label 4 <Badge variant="positive">Positive</Badge>
          </span>
        }
      >
        <Skeleton>Tab content 4</Skeleton>
      </Tabs.Item>
      <Tabs.Item
        label={
          <span>
            Label 5 <Badge variant="negative">Negative</Badge>
          </span>
        }
      >
        <Skeleton>Tab content 5</Skeleton>
      </Tabs.Item>
    </Tabs>
  ),
};
