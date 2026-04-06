import { Download, Zap, Shield, Globe, ArrowDown, Play, Heart, TrendingUp, Eye, Layers } from "lucide-react";
import DownloaderInput from "@/components/DownloaderInput";

const features = [
  { icon: <Zap className="h-5 w-5" />, title: "Lightning Fast", desc: "Download links generated in seconds via our optimized global API." },
  { icon: <Shield className="h-5 w-5" />, title: "Private & Secure", desc: "No sign-up, no tracking, no data stored. Your privacy first." },
  { icon: <Globe className="h-5 w-5" />, title: "All Platforms", desc: "YouTube, Instagram, Facebook, Pinterest, Snapchat — one tool." },
  { icon: <Download className="h-5 w-5" />, title: "HD Quality", desc: "Multiple resolutions and formats. Pick the quality you want." },
];

const stats = [
  { value: "1M+", label: "Downloads" },
  { value: "5+", label: "Platforms" },
  { value: "99%", label: "Uptime" },
  { value: "0s", label: "Sign-up" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* ── Background blobs ── */}
      <div className="blob w-[500px] h-[500px] bg-primary/20 -top-40 -left-40 animate-pulse-soft" />
      <div className="blob w-[400px] h-[400px] bg-accent/15 top-1/3 -right-32 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="blob w-[350px] h-[350px] bg-primary/10 bottom-20 left-1/4 animate-pulse-soft" style={{ animationDelay: "4s" }} />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Navbar ── */}
        <header className="glass-strong sticky top-0 z-50 border-b border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl glass-btn flex items-center justify-center">
                <Download className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">RootX</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hidden sm:block">Features</a>
              <button
                onClick={() => document.getElementById("downloader")?.scrollIntoView({ behavior: "smooth" })}
                className="glass-btn text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </header>

        {/* ── Hero Section ── */}
        <section className="flex-1 flex flex-col items-center px-4 pt-12 sm:pt-20 pb-8 relative">

          {/* Floating decoration cards */}
          <div className="float-card rounded-2xl p-3.5 left-[3%] top-[15%] hidden lg:flex flex-col gap-2 w-48 animate-float-slow" style={{ animationDelay: "0s" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Live Preview</div>
                <div className="text-[10px] text-muted-foreground">HD Ready</div>
              </div>
            </div>
            <div className="flex gap-1">
              {[35, 55, 45, 70, 50, 65].map((h, i) => (
                <div key={i} className="w-3.5 rounded-sm bg-primary/15" style={{ height: `${h * 0.28}px` }} />
              ))}
            </div>
          </div>

          <div className="float-card rounded-2xl p-3.5 right-[3%] top-[12%] hidden lg:flex flex-col gap-2 w-40 animate-float-medium" style={{ animationDelay: "1.5s" }}>
            <div className="w-full h-16 rounded-lg bg-muted/50 flex items-center justify-center">
              <Play className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Heart className="h-3 w-3" /> 24.3K
              </div>
              <span className="text-[10px] font-medium text-primary">Video</span>
            </div>
          </div>

          <div className="float-card rounded-2xl p-3.5 left-[4%] bottom-[25%] hidden lg:flex flex-col gap-2 w-44 animate-float-medium" style={{ animationDelay: "3s" }}>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-foreground">Fast & Free</span>
            </div>
            <div className="flex items-end gap-1">
              {[3, 5, 4, 7, 6, 8, 7].map((h, i) => (
                <div key={i} className="w-3 rounded-full bg-primary/15" style={{ height: `${h * 3}px` }} />
              ))}
            </div>
          </div>

          <div className="float-card rounded-2xl p-3.5 right-[4%] bottom-[22%] hidden lg:flex flex-col gap-1.5 w-40 animate-float-slow" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Layers className="h-3.5 w-3.5" /> Total
            </div>
            <div className="text-xl font-bold text-primary font-display">1.2M+</div>
            <div className="text-[10px] text-muted-foreground">Files downloaded</div>
          </div>

          {/* Hero content */}
          <div className="w-full max-w-3xl mx-auto text-center space-y-6 relative z-10">
            {/* Badge */}
            <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
              <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-xs font-medium text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-primary" />
                All-in-One Video Downloader
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.08] animate-fade-up" style={{ animationDelay: "0.12s" }}>
              Download Any Video
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">In Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Paste any video URL from YouTube, Instagram, Facebook, Pinterest or Snapchat.
              Get instant download links in HD. No sign-up needed.
            </p>

            {/* Scroll hint */}
            <div className="animate-fade-up pt-2" style={{ animationDelay: "0.28s" }}>
              <button
                onClick={() => document.getElementById("downloader")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
                Start downloading
              </button>
            </div>
          </div>

          {/* ── Downloader Section ── */}
          <div id="downloader" className="w-full max-w-2xl mx-auto mt-14 sm:mt-20">
            <div className="glass-strong rounded-3xl p-4 sm:p-6 animate-slide-up" style={{ animationDelay: "0.35s" }}>
              <DownloaderInput
                placeholder="Paste any video URL here..."
                platformClass="glass-btn text-primary-foreground"
              />
            </div>
          </div>

          {/* ── Stats row ── */}
          <div className="w-full max-w-2xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center animate-fade-up"
                style={{ animationDelay: `${0.5 + i * 0.08}s` }}
              >
                <div className="font-display font-bold text-xl text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Features Section ── */}
          <section id="features" className="w-full max-w-4xl mx-auto mt-20 sm:mt-28 px-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground text-center mb-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              Why choose RootX?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="glass rounded-2xl p-5 space-y-3 animate-slide-up hover:-translate-y-1 transition-transform duration-300 cursor-default"
                  style={{ animationDelay: `${0.65 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{f.icon}</div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How it works ── */}
          <section className="w-full max-w-3xl mx-auto mt-20 sm:mt-28 px-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground text-center mb-10 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              How it works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: "01", title: "Paste URL", desc: "Copy any video link and paste it in the input field." },
                { step: "02", title: "Click Download", desc: "Hit the download button and we'll fetch all available formats." },
                { step: "03", title: "Save File", desc: "Pick your preferred quality and save directly to your device." },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="glass rounded-2xl p-6 text-center space-y-3 animate-slide-up hover:-translate-y-1 transition-transform duration-300"
                  style={{ animationDelay: `${0.85 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full glass-btn flex items-center justify-center mx-auto text-primary-foreground font-display font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Spacer */}
          <div className="h-20" />
        </section>

        {/* ── Footer ── */}
        <footer className="glass-strong border-t border-border/30 mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
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
