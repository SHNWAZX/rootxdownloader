import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

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
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="glass-panel rounded-xl p-1.5 flex gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleDownload()}
          placeholder={placeholder}
          className="flex-1 glass-input rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-display text-sm"
        />
        <button
          onClick={handleDownload}
          disabled={loading || !url.trim()}
          className={`px-5 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed ${platformClass}`}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {loading ? "Fetching..." : "Download"}
        </button>
      </div>

      {error && (
        <div className="glass-panel rounded-xl p-4 border-destructive/30 text-destructive text-sm text-center">
          {error}
        </div>
      )}

      {result && (
        <div className="glass-panel rounded-xl p-5 space-y-4">
          {result.thumbnail && (
            <img
              src={result.thumbnail}
              alt={result.title || "Thumbnail"}
              className="w-full max-h-64 object-cover rounded-lg"
            />
          )}
          {result.title && (
            <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
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
                  className="flex items-center justify-between glass-input rounded-lg px-4 py-3 hover:border-primary/40 transition-colors group"
                >
                  <span className="text-sm text-secondary-foreground">
                    {media.quality || media.extension || media.type || `Option ${i + 1}`}
                  </span>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          )}

          {result.url && (!result.medias || result.medias.length === 0) && (
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all ${platformClass}`}
            >
              <Download className="h-4 w-4" />
              Download Now
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default DownloaderInput;
