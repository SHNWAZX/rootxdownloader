import { useState } from "react";
import { Download, Loader2, AlertCircle } from "lucide-react";

interface DownloaderInputProps {
  placeholder: string;
  platformClass: string;
}

interface DownloadResult {
  title?: string;
  thumbnail?: string;
  url?: string;
  medias?: Array<{
    url: string;
    quality?: string;
    extension?: string;
    type?: string;
  }>;
}

const DownloaderInput = ({ placeholder, platformClass }: DownloaderInputProps) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://rootx-downloader-api.awsvps844.workers.dev/?url=${encodeURIComponent(url.trim())}`
      );
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch {
      setError("Failed to fetch. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      {/* Input bar */}
      <div className="glass-panel-solid rounded-2xl p-2 flex gap-2 transition-all duration-300 hover:shadow-lg">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleDownload()}
          placeholder={placeholder}
          className="flex-1 bg-transparent rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none font-body text-sm"
        />
        <button
          onClick={handleDownload}
          disabled={loading || !url.trim()}
          className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 ${platformClass}`}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">{loading ? "Fetching..." : "Download"}</span>
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 text-destructive text-sm animate-fade-in border-destructive/20">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="glass-panel-solid rounded-2xl overflow-hidden animate-slide-up">
          {result.thumbnail && (
            <div className="relative overflow-hidden">
              <img
                src={result.thumbnail}
                alt={result.title || "Thumbnail"}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          )}
          <div className="p-5 space-y-4">
            {result.title && (
              <h3 className="font-display font-semibold text-foreground text-base leading-snug">
                {result.title}
              </h3>
            )}

            {result.medias && result.medias.length > 0 && (
              <div className="space-y-2">
                {result.medias.map((media, i) => (
                  <a
                    key={i}
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between glass-input rounded-xl px-4 py-3 hover:bg-accent/50 transition-all duration-200 group animate-fade-in"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <span className="text-sm text-secondary-foreground font-medium">
                      {media.quality || media.extension || media.type || `Option ${i + 1}`}
                    </span>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                ))}
              </div>
            )}

            {result.url && (!result.medias || result.medias.length === 0) && (
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 ${platformClass}`}
              >
                <Download className="h-4 w-4" />
                Download Now
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloaderInput;
