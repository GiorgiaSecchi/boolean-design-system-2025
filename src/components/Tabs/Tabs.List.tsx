import { Button } from "./Tabs.Button";

type TablistProp = {
  tabsLabels: {
    label: React.ReactNode;
    tabId: string;
  }[];
};

export const List: React.FC<TablistProp> = ({ tabsLabels }) => {
  return (
    <div role="tablist" className="tablist">
      {tabsLabels.map(({ label, tabId }) => (
        <Button key={tabId} tabId={tabId}>
          {label}
        </Button>
      ))}
    </div>
  );
};
