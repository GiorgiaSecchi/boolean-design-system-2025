import type { Meta, StoryObj } from "@storybook/react";
import React, { ButtonHTMLAttributes } from "react";

const meta: Meta = {
  title: "Atoms/Colors",
};

export default meta;

type Story = StoryObj<typeof meta>;

const ClickToCopy: React.FC<
  { value: string } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ value, ...attrs }) => {
  return (
    <button
      className="click-to-copy"
      {...attrs}
      style={{ border: "none", cursor: "pointer", ...attrs.style }}
      onClick={() => navigator.clipboard.writeText(value)}
      aria-label={`Copy ${value}`}
    ></button>
  );
};

export const Primary: Story = {
  render: () => (
    <div>
      <style>
        {`
    .container {
        display: flex;
        gap: 0.5rem;
        height: 3rem;
        margin-bottom: var(--spacing-lg);
        }

    .info {
        padding: var(--spacing-md);
        background-color: var(--color-neutral-background);
        color: var(--color-neutral-text);
        margin-bottom: var(--spacing-lg);
        border: 1px solid var(--color-neutral-accent);
        border-radius: var(--border-radius-sm, 0.25rem);
    }
       
    `}
      </style>
      <h1>Colors</h1>
      <h2>Primitives</h2>
      <h3>Gray</h3>
      <div className="container">
        {Array.from({ length: 16 }).map((_, index) => (
          <ClickToCopy
            className="info"
            style={{ backgroundColor: `var(--color-gray-${index})` }}
            key={index}
            value={`var(--color-gray-${index})`}
          ></ClickToCopy>
        ))}
      </div>

      <h3>Green</h3>
      <div className="container">
        {Array.from({ length: 16 }).map((_, index) => (
          <ClickToCopy
            className="info"
            style={{ backgroundColor: `var(--color-green-${index})` }}
            key={index}
            value={`var(--color-green-${index})`}
          ></ClickToCopy>
        ))}
      </div>

      <h3>Red</h3>
      <div className="container">
        {Array.from({ length: 16 }).map((_, index) => (
          <ClickToCopy
            className="info"
            style={{ backgroundColor: `var(--color-red-${index})` }}
            key={index}
            value={`var(--color-red-${index})`}
          ></ClickToCopy>
        ))}
      </div>

      <h2>Semantic</h2>
      <h3>Neutral</h3>
      <div className="info">
        Per questo box abbiamo usato: <br />
        <ClickToCopy value={`var(--color-neutral-background)`}>
          --color-neutral-background
        </ClickToCopy>
        ,
        <ClickToCopy value={`var(--color-neutral-text)`}>
          --color-neutral-text
        </ClickToCopy>
        ,
        <ClickToCopy value={`var(--color-neutral-accent)`}>
          --color-neutral-accent
        </ClickToCopy>
      </div>

      <h3>Positive</h3>
      <div
        className="info"
        style={{
          backgroundColor: `var(--color-positive-background)`,
          color: `var(--color-positive-text)`,
          borderColor: `var(--color-positive-accent)`,
        }}
      >
        Per questo box abbiamo usato: <br />
        <ClickToCopy value={`var(--color-positive-background)`}>
          --color-positive-background
        </ClickToCopy>
        ,
        <ClickToCopy value={`var(--color-positive-text)`}>
          --color-positive-text
        </ClickToCopy>
        ,
        <ClickToCopy value={`var(--color-positive-accent)`}>
          --color-positive-accent
        </ClickToCopy>
      </div>

      <h3>Negative</h3>
      <div
        className="info"
        style={{
          backgroundColor: `var(--color-negative-background)`,
          color: `var(--color-negative-text)`,
          borderColor: `var(--color-negative-accent)`,
        }}
      >
        Per questo box abbiamo usato: <br />
        <ClickToCopy value={`var(--color-negative-background)`}>
          --color-negative-background
        </ClickToCopy>
        ,
        <ClickToCopy value={`var(--color-negative-text)`}>
          --color-negative-text
        </ClickToCopy>
        ,
        <ClickToCopy value={`var(--color-negative-accent)`}>
          --color-negative-accent
        </ClickToCopy>
      </div>
    </div>
  ),
};
