import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Atoms/Spacing", // Title of the component
  parameters: {
    layout: "centered", // Center the component
  },
  tags: ["autodocs"], // Add tags to the component
};

export default meta;

type Story = StoryObj<typeof meta>;

const SpaceCalc = ({ value }: { value: string }) => {
  const spacing = React.useMemo(() => {
    const bodystyle = window.getComputedStyle(document.body);
    return bodystyle.getPropertyValue(value);
  }, [value]);
  return <span>{spacing}</span>;
};

const Style: React.FC = () => {
  return (
    <style>{`
    dl {
        font-size: 1rem;
        border: 1px solid #ccc; 
        display: grid;
        max-width: calc(550rem / 16);
        grid-template-columns:min-content max-content min-content; 
        border-bottom: none;
        border-radius: 0.5rem;
    }
        
    dt {
        font-weight: 600;
        padding: var(--spacing-sm) var(--spacing-md);
        border-bottom: 1px solid #ccc;
    }

    dd {
        padding: var(--spacing-sm) var(--spacing-md);
        border-bottom: 1px solid #ccc;
        font-family: monospace;
        display: grid;
        gap: 1ch;
        grid-template-columns: subgrid;
        grid-column: 2 / 4;
        align-items: center;
    }

    .info {
    background: magenta;
      height: var(--story-spacing);
        width: var(--story-spacing);
    display: block;
    }
    `}</style>
  );
};

export const Default: Story = {
  render: () => (
    <>
      <Style />
      <h1>Spacing</h1>
      <p>
        Our spacing variables use a clamping mechanism to ensure that the
        spacing is scalable across different screen sizes. * This is done by
        using the clamp() function. * The minimum viewport width is 400px and
        the maximum is 1200px.
      </p>
      <dl>
        {["zero", "xs", "sm", "md", "lg", "xl"].map((key) => (
          <React.Fragment key={key}>
            <dt>{key}</dt>
            <dd style={{ ["--story-spacing" as any]: `var(--spacing-${key})` }}>
              <span>
                <SpaceCalc value={`--spacing-${key}`} />
              </span>
              <span className="info"></span>
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  ),
};
