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
      className={`platform-tab flex items-center gap-2 animate-fade-in ${active ? `active ${platformKey}` : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default PlatformTab;
