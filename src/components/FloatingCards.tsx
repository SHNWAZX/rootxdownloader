import { Download, Play, Heart, BarChart3, TrendingUp, Eye } from "lucide-react";

const FloatingCards = () => {
  return (
    <>
      {/* Left side - Profile card */}
      <div
        className="float-card rounded-2xl p-4 left-[2%] top-[18%] hidden lg:flex flex-col gap-3 w-52 animate-float-slow"
        style={{ animationDelay: "0s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
            <Eye className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Live Preview</div>
            <div className="text-[10px] text-muted-foreground">HD Quality Ready</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          {[40, 65, 50, 80, 55, 70].map((h, i) => (
            <div
              key={i}
              className="w-4 rounded-sm bg-primary/15"
              style={{ height: `${h * 0.3}px` }}
            />
          ))}
        </div>
      </div>

      {/* Right side - Reel card */}
      <div
        className="float-card rounded-2xl p-4 right-[2%] top-[14%] hidden lg:flex flex-col gap-2 w-44 animate-float-medium"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-full h-20 rounded-lg bg-muted/60 flex items-center justify-center">
          <Play className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <Heart className="h-3 w-3" /> 24.3K
          </div>
          <span className="text-[10px] font-medium text-primary">Video</span>
        </div>
      </div>

      {/* Left bottom - Growth card */}
      <div
        className="float-card rounded-2xl p-4 left-[3%] bottom-[22%] hidden lg:flex flex-col gap-2 w-48 animate-float-medium"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Fast & Free</span>
        </div>
        <div className="flex items-end gap-1">
          {[3, 5, 4, 7, 6, 8, 7].map((h, i) => (
            <div
              key={i}
              className="w-3.5 rounded-full bg-primary/20"
              style={{ height: `${h * 3}px` }}
            />
          ))}
        </div>
      </div>

      {/* Right bottom - Downloads card */}
      <div
        className="float-card rounded-2xl p-4 right-[3%] bottom-[18%] hidden lg:flex flex-col gap-1 w-44 animate-float-slow"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Download className="h-3.5 w-3.5" /> Downloads
        </div>
        <div className="text-xl font-bold text-primary font-display">1.2M+</div>
        <div className="text-[10px] text-muted-foreground">HD quality saved</div>
      </div>
    </>
  );
};

export default FloatingCards;
