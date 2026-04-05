import { useState } from "react";
import {
  Download, Play, Camera, Facebook, MapPin, Ghost,
  Home, ArrowRight, Sparkles,
} from "lucide-react";
import PlatformTab from "@/components/PlatformTab";
import DownloaderInput from "@/components/DownloaderInput";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingCards from "@/components/FloatingCards";

type Platform = "home" | "youtube" | "instagram" | "facebook" | "pinterest" | "snapchat";

const platforms = [
  {
    key: "home" as Platform, label: "Home", tabKey: "",
    icon: <Home className="h-4 w-4" />,
    placeholder: "Paste any video URL here...",
    btnClass: "bg-primary text-primary-foreground hover:opacity-90",
    description: "",
  },
  {
    key: "youtube" as Platform, label: "YouTube", tabKey: "yt",
    icon: <Play className="h-4 w-4" />,
    placeholder: "Paste YouTube video URL...",
    btnClass: "bg-youtube text-primary-foreground hover:opacity-90",
    description: "Download YouTube videos, shorts, and music in multiple qualities.",
  },
  {
    key: "instagram" as Platform, label: "Instagram", tabKey: "insta",
    icon: <Camera className="h-4 w-4" />,
    placeholder: "Paste Instagram reel or post URL...",
    btnClass: "bg-instagram text-primary-foreground hover:opacity-90",
    description: "Save Instagram reels, stories, and posts instantly.",
  },
  {
    key: "facebook" as Platform, label: "Facebook", tabKey: "fb",
    icon: <Facebook className="h-4 w-4" />,
    placeholder: "Paste Facebook video URL...",
    btnClass: "bg-facebook text-primary-foreground hover:opacity-90",
    description: "Download Facebook videos and reels with ease.",
  },
  {
    key: "pinterest" as Platform, label: "Pinterest", tabKey: "pin",
    icon: <MapPin className="h-4 w-4" />,
    placeholder: "Paste Pinterest pin URL...",
    btnClass: "bg-pinterest text-primary-foreground hover:opacity-90",
    description: "Save Pinterest images and videos to your device.",
  },
  {
    key: "snapchat" as Platform, label: "Snapchat", tabKey: "snap",
    icon: <Ghost className="h-4 w-4" />,
    placeholder: "Paste Snapchat spotlight URL...",
    btnClass: "bg-snapchat text-foreground hover:opacity-90",
    description: "Download Snapchat spotlight videos.",
  },
];

const Index = () => {
  const [active, setActive] = useState<Platform>("home");
  const current = platforms.find((p) => p.key === active)!;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="glass-card border-b border-border/40 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Download className="h-5 w-5 text-primary" />
              <span className="font-display font-bold text-base text-foreground tracking-tight">RootX</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {platforms.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={`nav-link ${active === p.key ? "active" : ""}`}
                >
                  {p.label}
                </button>
              ))}
            </nav>
            {/* Mobile tabs dropdown */}
            <div className="md:hidden flex items-center gap-1">
              {platforms.slice(0, 3).map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={`nav-link !px-2.5 !py-1.5 !text-xs ${active === p.key ? "active" : ""}`}
                >
                  {p.icon}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center px-4 relative">
          {/* Floating cards - only on home */}
          {active === "home" && <FloatingCards />}

          <section className="w-full max-w-3xl mx-auto pt-16 sm:pt-20 pb-8 text-center relative z-10">
            {active === "home" ? (
              <div className="space-y-5">
                {/* Badge */}
                <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
                  <span className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    All-in-One Video Downloader
                  </span>
                </div>

                {/* Big heading */}
                <h1
                  className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1] animate-fade-up"
                  style={{ animationDelay: "0.12s" }}
                >
                  <span className="text-primary">Download</span> Videos
                  <br />
                  Like Never <span className="text-accent">Before</span>
                </h1>

                {/* Subtitle */}
                <p
                  className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed animate-fade-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  View profiles, download content in HD, save from any platform —
                  all with a beautiful, modern interface. No login required.
                </p>

                {/* CTA buttons */}
                <div
                  className="flex flex-wrap items-center justify-center gap-3 pt-2 animate-fade-up"
                  style={{ animationDelay: "0.28s" }}
                >
                  <button
                    onClick={() => {
                      const el = document.getElementById("downloader");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 hover:opacity-90"
                  >
                    Start Downloading <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setActive("youtube")}
                    className="inline-flex items-center gap-2 glass-card-solid px-6 py-3 rounded-xl font-semibold text-sm text-foreground transition-all duration-300 active:scale-95 hover:bg-muted"
                  >
                    Download Content
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-fade-up" key={active}>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary mb-4">
                  {current.icon}
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                  {current.label} Downloader
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">{current.description}</p>
              </div>
            )}
          </section>

          {/* Tabs row */}
          <nav
            id="downloader"
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
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

          {/* Downloader input */}
          <DownloaderInput
            key={active}
            placeholder={current.placeholder}
            platformClass={current.btnClass}
          />

          {/* Features - home only */}
          {active === "home" && (
            <div className="py-16 w-full">
              <h2
                className="font-display font-bold text-xl text-foreground text-center mb-8 animate-fade-up"
                style={{ animationDelay: "0.45s" }}
              >
                Why RootX?
              </h2>
              <FeaturesSection />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="glass-card border-t border-border/40 mt-auto">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <Download className="h-3.5 w-3.5" /> RootX Downloader — Fast, free, no sign-up.
            </span>
            <span>Paste. Click. Download.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
