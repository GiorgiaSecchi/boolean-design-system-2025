import { Button } from "./Tabs.Button";

// Definisce le proprietà di List
type TablistProp = {
  tabsLabels: {
    label: React.ReactNode;
    tabId: string;
  }[];
};

export const List: React.FC<TablistProp> = ({ tabsLabels }) => {
  // Gestisce la navigazione tra i tab con le frecce direzionali
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Estrae i bottoni dal tablist
    const buttons = Array.from(
      event.currentTarget.querySelectorAll("button[role='tab']")
    );
    // Trova l'indice del bottone attivo
    const currentIndex = buttons.findIndex((button) => button === event.target);
    // Calcola l'indice del bottone successivo
    let newIndex = currentIndex;
    // Gestisce la pressione dei tasti freccia
    switch (event.key) {
      case "Home":
        newIndex = 0;
        break;
      case "ArrowRight":
      case "ArrowUp":
        newIndex = (currentIndex + 1) % buttons.length; // Calcola l'indice del bottone successivo
        break;
      case "ArrowLeft":
      case "ArrowDown":
        newIndex = (currentIndex - 1 + buttons.length) % buttons.length; // Calcola l'indice del bottone precedente
        break;
      case "End":
        newIndex = buttons.length - 1;
        break;
      default:
        return;
    }
    // Impedisce di andare oltre il primo e l'ultimo bottone
    const next = buttons[newIndex] as HTMLButtonElement;
    next?.focus();
    event.preventDefault();
  };

  // Restituisce il componente Tablist
  return (
    <div role="tablist" className="tablist" onKeyDownCapture={handleKeyDown}>
      {tabsLabels.map(({ label, tabId }) => (
        <Button key={tabId} tabId={tabId}>
          {label}
        </Button>
      ))}
    </div>
  );
};
