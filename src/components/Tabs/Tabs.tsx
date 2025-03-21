import type { ReactElement } from "react";
import React from "react";
import { Item, type ItemProps } from "./Tabs.Item";
import { List } from "./Tabs.List";
import { TabsContext } from "./Tabs.Context";
import { Tab } from "./Tabs.Tab";

// Controlla se il figlio è un elemento valido
const isTabValidChildren = (
  child: React.ReactNode
): child is ReactElement<typeof Item> => {
  return React.isValidElement(child) && child.type === Item;
};

// Definisce le proprietà di Tabs
type TabsProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Tabs: React.FC<TabsProps> & { Item: typeof Item } = ({
  children,
}) => {
  // Genera un id univoco
  const id = React.useId();
  // Inizializza lo stato del tab attivo
  const [activeTab, setActiveTab] = React.useState(id + 0);

  // Converte i children in un array, filtra solo quelli validi e aggiunge un tabId univoco a ciascuno
  const validChildren = React.Children.toArray(children)
    .filter(isTabValidChildren)
    .map((child, i) => ({ ...child, id: id + i }));

  // Estrae le etichette dei tab
  const tabsLabels = validChildren.map((child) => ({
    label: (child.props as unknown as ItemProps).label,
    tabId: child.id,
  }));

  // Controlla se il numero di figli validi è diverso dal numero di figli totali
  if (validChildren.length !== React.Children.count(children)) {
    console.warn("Invalid children provided to Tabs component");
  }

  // Restituisce il componente Tabs
  return (
    <div role="tablist">
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        <List tabsLabels={tabsLabels} />
        {validChildren.map(({ id, ...child }) => {
          // Restituisce il figlio solo se il tab è attivo
          return (
            <Tab id={id} key={id}>
              {child}
            </Tab>
          );
        })}
        {React.Children.map(children, (child) => {
          if (!isTabValidChildren(child)) {
            return child;
          }
          return null;
        })}
      </TabsContext.Provider>
    </div>
  );
};

// Assegna la proprietà Item alla funzione Tabs
Tabs.Item = Item;
