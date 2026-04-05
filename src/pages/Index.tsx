import { useState } from "react";
import { Download, Play, Camera, Facebook, MapPin, Ghost, Home, ArrowDown } from "lucide-react";
import PlatformTab from "@/components/PlatformTab";
import DownloaderInput from "@/components/DownloaderInput";
import FeaturesSection from "@/components/FeaturesSection";

type Platform = "home" | "youtube" | "instagram" | "facebook" | "pinterest" | "snapchat";

const platforms = [
  {
    key: "home" as Platform,
    label: "Home",
    tabKey: "",
    icon: <Home className="h-4 w-4" />,
    placeholder: "Paste any video URL here...",
    btnClass: "bg-primary text-primary-foreground hover:opacity-90",
    description: "",
    emoji: "🏠",
  },
  {
    key: "youtube" as Platform,
    label: "YouTube",
    tabKey: "yt",
    icon: <Play className="h-4 w-4" />,
    placeholder: "Paste YouTube video URL...",
    btnClass: "bg-youtube text-primary-foreground hover:opacity-90",
    description: "Download YouTube videos, shorts, and music in multiple qualities.",
    emoji: "🎬",
  },
  {
    key: "instagram" as Platform,
    label: "Instagram",
    tabKey: "insta",
    icon: <Camera className="h-4 w-4" />,
    placeholder: "Paste Instagram reel or post URL...",
    btnClass: "bg-instagram text-primary-foreground hover:opacity-90",
    description: "Save Instagram reels, stories, and posts instantly.",
    emoji: "📸",
  },
  {
    key: "facebook" as Platform,
    label: "Facebook",
    tabKey: "fb",
    icon: <Facebook className="h-4 w-4" />,
    placeholder: "Paste Facebook video URL...",
    btnClass: "bg-facebook text-primary-foreground hover:opacity-90",
    description: "Download Facebook videos and reels with ease.",
    emoji: "📘",
  },
  {
    key: "pinterest" as Platform,
    label: "Pinterest",
    tabKey: "pin",
    icon: <MapPin className="h-4 w-4" />,
    placeholder: "Paste Pinterest pin URL...",
    btnClass: "bg-pinterest text-primary-foreground hover:opacity-90",
    description: "Save Pinterest images and videos to your device.",
    emoji: "📌",
  },
  {
    key: "snapchat" as Platform,
    label: "Snapchat",
    tabKey: "snap",
    icon: <Ghost className="h-4 w-4" />,
    placeholder: "Paste Snapchat spotlight URL...",
    btnClass: "bg-snapchat text-foreground hover:opacity-90",
    description: "Download Snapchat spotlight videos.",
    emoji: "👻",
  },
];

const Index = () => {
  const [active, setActive] = useState<Platform>("home");
  const current = platforms.find((p) => p.key === active)!;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="glass-panel border-b border-border/30 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Download className="h-4 w-4 text-primary" />
              </div>
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                RootX
              </span>
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              Free Video Downloader
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-col items-center px-4">
          {/* Hero section */}
          <section className="w-full max-w-3xl mx-auto pt-16 pb-8 text-center">
            {active === "home" ? (
              <div className="space-y-4 animate-fade-in">
                <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  5 Platforms Supported
                </div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground tracking-tight leading-tight">
                  Download videos from
                  <br />
                  <span className="text-primary">anywhere</span>
                </h1>
                <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
                  Paste a link from YouTube, Instagram, Facebook, Pinterest or
                  Snapchat and download instantly. No sign-up needed.
                </p>
                <ArrowDown className="h-4 w-4 text-muted-foreground mx-auto mt-4 animate-float" />
              </div>
            ) : (
              <div className="space-y-3 animate-fade-in" key={active}>
                <div className="text-4xl mb-2">{current.emoji}</div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                  {current.label} Downloader
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  {current.description}
                </p>
              </div>
            )}
          </section>

          {/* Tabs */}
          <nav className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {platforms.map((p, i) => (
              <PlatformTab
                key={p.key}
                label={p.label}
                icon={p.icon}
                active={active === p.key}
                platformKey={p.tabKey}
                onClick={() => setActive(p.key)}
                index={i}
              />
            ))}
          </nav>

          {/* Downloader */}
          <DownloaderInput
            key={active}
            placeholder={current.placeholder}
            platformClass={current.btnClass}
          />

          {/* Platform cards on home */}
          {active === "home" && (
            <section className="w-full max-w-2xl mx-auto mt-12 mb-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {platforms
                  .filter((p) => p.key !== "home")
                  .map((p, i) => (
                    <button
                      key={p.key}
                      onClick={() => setActive(p.key)}
                      className="glass-panel rounded-2xl p-5 flex flex-col items-center gap-3 hover:translate-y-[-3px] transition-all duration-300 group cursor-pointer animate-slide-up"
                      style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                    >
                      <span className="text-2xl">{p.emoji}</span>
                      <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        {p.label}
                      </span>
                    </button>
                  ))}
              </div>
            </section>
          )}

          {/* Features section - only on home */}
          {active === "home" && (
            <div className="py-12 w-full">
              <h2 className="font-display font-bold text-xl text-foreground text-center mb-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                Why RootX?
              </h2>
              <FeaturesSection />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="glass-panel border-t border-border/30 mt-auto">
          <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>© 2026 RootX Downloader — Fast, free, no sign-up.</span>
            <span>Paste. Click. Download.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
