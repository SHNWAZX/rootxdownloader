import type { ReactNode } from "react";

interface PlatformTabProps {
  label: string;
  icon: ReactNode;
  active: boolean;
  platformKey: string;
  onClick: () => void;
  index: number;
}

const PlatformTab = ({ label, icon, active, platformKey, onClick, index }: PlatformTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`platform-tab flex items-center gap-2 animate-fade-up ${active ? `active ${platformKey}` : ""}`}
      style={{ animationDelay: `${0.4 + index * 0.06}s` }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default PlatformTab;
