import type { ReactNode } from "react";

interface PlatformTabProps {
  label: string;
  icon: ReactNode;
  active: boolean;
  platformKey: string;
  onClick: () => void;
}

const PlatformTab = ({ label, icon, active, platformKey, onClick }: PlatformTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`platform-tab flex items-center gap-2 ${active ? `active ${platformKey}` : ""}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default PlatformTab;
