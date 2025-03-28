import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/Badge/Badge";

import { within, expect, userEvent, waitFor } from "@storybook/test";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge", // Title of the component
  component: Badge, // Component to display in the Docs
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Badge",
  },
  parameters: {
    layout: "centered", // Center the component
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ children, variant }) => (
    <Badge variant={variant}>{children}</Badge>
  ),

  //# TEST
  // Test interattivo per controllare se il badge viene renderizzato correttamente
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Trova il root del badge
    const badgeRoot = await canvas.findByTestId("badge-root");

    // Accedi allo Shadow DOM
    const shadowRoot = badgeRoot.shadowRoot;
    if (!shadowRoot) throw new Error("Shadow DOM non trovato");

    // Trova l'elemento che contiene il testo dentro lo Shadow DOM
    const shadowContainer = await waitFor(
      () => shadowRoot.querySelector(".badge") as HTMLElement
    );

    // Cerca il testo "Badge" dentro il badge
    const badge = await within(shadowContainer).findByText("Badge");

    // Verifica se il badge è visibile
    expect(badge).toBeVisible();

    // Simula un'azione utente (se applicabile, es: hover)
    await userEvent.hover(badge);
    expect(badge).toBeVisible(); // Il badge rimane visibile
  },
};

export const AllBadges: Story = {
  render: ({ children }) => (
    <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
      <Badge variant="neutral">{children}</Badge>
      <Badge variant="positive">{children}</Badge>
      <Badge variant="negative">{children}</Badge>
    </div>
  ),
};
