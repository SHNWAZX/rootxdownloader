import { Download, Zap, Shield, Globe } from "lucide-react";

const features = [
  { icon: <Zap className="h-5 w-5" />, title: "Lightning Fast", desc: "Get download links in seconds with our optimized API." },
  { icon: <Shield className="h-5 w-5" />, title: "Safe & Secure", desc: "No sign-up, no tracking. Your privacy matters." },
  { icon: <Globe className="h-5 w-5" />, title: "Multi-Platform", desc: "YouTube, Instagram, Facebook, Pinterest & Snapchat." },
  { icon: <Download className="h-5 w-5" />, title: "HD Quality", desc: "Choose from multiple resolutions and formats." },
];

const FeaturesSection = () => (
  <section className="w-full max-w-4xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((f, i) => (
        <div
          key={f.title}
          className="glass-card rounded-2xl p-5 space-y-3 animate-slide-up hover:translate-y-[-2px] transition-transform duration-300"
          style={{ animationDelay: `${0.5 + i * 0.1}s` }}
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{f.icon}</div>
          <h3 className="font-display font-semibold text-foreground text-sm">{f.title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
