import { useState } from "react";
import { Download, Play, Camera, Facebook, MapPin, Ghost, Home } from "lucide-react";
import PlatformTab from "@/components/PlatformTab";
import DownloaderInput from "@/components/DownloaderInput";

type Platform = "home" | "youtube" | "instagram" | "facebook" | "pinterest" | "snapchat";

const platforms: {
  key: Platform;
  label: string;
  tabKey: string;
  icon: React.ReactNode;
  placeholder: string;
  btnClass: string;
  description: string;
}[] = [
  {
    key: "home",
    label: "Home",
    tabKey: "",
    icon: <Home className="h-4 w-4" />,
    placeholder: "Paste any video URL here...",
    btnClass: "bg-primary text-primary-foreground hover:opacity-90",
    description: "",
  },
  {
    key: "youtube",
    label: "YouTube",
    tabKey: "yt",
    icon: <Play className="h-4 w-4" />,
    placeholder: "Paste YouTube video URL...",
    btnClass: "bg-youtube text-primary-foreground hover:opacity-90",
    description: "Download YouTube videos, shorts, and music in multiple qualities.",
  },
  {
    key: "instagram",
    label: "Instagram",
    tabKey: "insta",
    icon: <Camera className="h-4 w-4" />,
    placeholder: "Paste Instagram reel or post URL...",
    btnClass: "bg-instagram text-primary-foreground hover:opacity-90",
    description: "Save Instagram reels, stories, and posts instantly.",
  },
  {
    key: "facebook",
    label: "Facebook",
    tabKey: "fb",
    icon: <Facebook className="h-4 w-4" />,
    placeholder: "Paste Facebook video URL...",
    btnClass: "bg-facebook text-primary-foreground hover:opacity-90",
    description: "Download Facebook videos and reels with ease.",
  },
  {
    key: "pinterest",
    label: "Pinterest",
    tabKey: "pin",
    icon: <MapPin className="h-4 w-4" />,
    placeholder: "Paste Pinterest pin URL...",
    btnClass: "bg-pinterest text-primary-foreground hover:opacity-90",
    description: "Save Pinterest images and videos to your device.",
  },
  {
    key: "snapchat",
    label: "Snapchat",
    tabKey: "snap",
    icon: <Ghost className="h-4 w-4" />,
    placeholder: "Paste Snapchat spotlight URL...",
    btnClass: "bg-snapchat text-background hover:opacity-90",
    description: "Download Snapchat spotlight videos.",
  },
];

const Index = () => {
  const [active, setActive] = useState<Platform>("home");
  const current = platforms.find((p) => p.key === active)!;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="glass-panel border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <Download className="h-6 w-6 text-primary" />
          <h1 className="font-display font-bold text-lg text-foreground tracking-tight">
            RootX Downloader
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Hero - only on home */}
        {active === "home" && (
          <div className="text-center mb-10 space-y-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Download from anywhere
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Paste a link from YouTube, Instagram, Facebook, Pinterest or Snapchat and download instantly.
            </p>
          </div>
        )}

        {/* Platform description */}
        {active !== "home" && current.description && (
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-display font-bold text-2xl text-foreground tracking-tight flex items-center justify-center gap-3">
              {current.icon}
              {current.label} Downloader
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              {current.description}
            </p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {platforms.map((p) => (
            <PlatformTab
              key={p.key}
              label={p.label}
              icon={p.icon}
              active={active === p.key}
              platformKey={p.tabKey}
              onClick={() => setActive(p.key)}
            />
          ))}
        </div>

        {/* Downloader */}
        <DownloaderInput
          key={active}
          placeholder={current.placeholder}
          platformClass={current.btnClass}
        />

        {/* Platform cards on home */}
        {active === "home" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-14 max-w-3xl w-full">
            {platforms
              .filter((p) => p.key !== "home")
              .map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className="glass-panel rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-all duration-200 group cursor-pointer"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {p.icon}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {p.label}
                  </span>
                </button>
              ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-muted-foreground text-xs">
        <p>RootX Downloader &mdash; Fast, free, no sign-up needed.</p>
      </footer>
    </div>
  );
};

export default Index;
