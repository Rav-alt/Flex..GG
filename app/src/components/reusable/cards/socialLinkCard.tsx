export type SocialPlatform =
  | "twitch"
  | "youtube"
  | "discord"
  | "tiktok"
  | "instagram"
  | "twitter"
  | "custom";

type SocialLinkRowProps = {
  platform: SocialPlatform;
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
};

const PLATFORM_META: Record<
  SocialPlatform,
  { label: string; placeholder: string; color: string; icon: React.ReactNode }
> = {
  twitch: {
    label: "Twitch",
    placeholder: "twitch.tv/yourname",
    color: "text-purple-400",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 0L.5 3.5V15.5H5V18h3l2.5-2.5H14L18 11.5V0H2zm14.5 11L14 13.5H10l-2.5 2.5V13.5H4V1.5h12.5V11zM13 4.5h-1.5v4.5H13V4.5zM9.5 4.5H8v4.5h1.5V4.5z" />
      </svg>
    ),
  },
  youtube: {
    label: "YouTube",
    placeholder: "youtube.com/@yourname",
    color: "text-red-400",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8A3 3 0 0 0 2.6 20c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.2A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  discord: {
    label: "Discord",
    placeholder: "discord.gg/yourserver",
    color: "text-indigo-400",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M15.25 2.25A14.87 14.87 0 0 0 11.575 1a.056.056 0 0 0-.06.028 10.358 10.358 0 0 0-.456.937 13.726 13.726 0 0 0-4.117 0A9.446 9.446 0 0 0 6.48 1.028a.058.058 0 0 0-.06-.028A14.832 14.832 0 0 0 2.745 2.25a.052.052 0 0 0-.024.021C.4 6.023-.238 9.695.074 13.32c.001.02.013.038.028.05a14.943 14.943 0 0 0 4.495 2.272.058.058 0 0 0 .063-.021c.346-.473.654-.972.919-1.497a.057.057 0 0 0-.031-.08 9.837 9.837 0 0 1-1.406-.67.058.058 0 0 1-.006-.096c.095-.071.19-.145.28-.22a.056.056 0 0 1 .058-.008c2.95 1.346 6.145 1.346 9.06 0a.056.056 0 0 1 .059.007c.09.076.185.15.281.221a.058.058 0 0 1-.005.096 9.23 9.23 0 0 1-1.407.67.057.057 0 0 0-.03.08c.27.525.578 1.024.918 1.496a.057.057 0 0 0 .063.022 14.9 14.9 0 0 0 4.503-2.272.058.058 0 0 0 .028-.049c.375-3.883-.628-7.526-2.659-10.049a.046.046 0 0 0-.023-.021z" />
      </svg>
    ),
  },
  tiktok: {
    label: "TikTok",
    placeholder: "@yourname",
    color: "text-teal-400",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.6 3a3.6 3.6 0 0 1-3.6-3h-3.2v13.7a2.2 2.2 0 1 1-2.2-2.2 2.3 2.3 0 0 1 .7.1V8.2a5.5 5.5 0 1 0 5.1 5.5V7.6A8 8 0 0 0 21 8.7V5.5A3.6 3.6 0 0 1 19.6 3z" />
      </svg>
    ),
  },
  instagram: {
    label: "Instagram",
    placeholder: "@yourname",
    color: "text-pink-400",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  twitter: {
    label: "Twitter / X",
    placeholder: "@yourname",
    color: "text-sky-400",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  custom: {
    label: "Custom link",
    placeholder: "https://yoursite.com",
    color: "text-base-content/40",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
};

export default function SocialLinkRow({
  platform,
  value,
  onChange,
  onRemove,
}: SocialLinkRowProps) {
  const meta = PLATFORM_META[platform];

  return (
    <div className="flex items-center gap-2">
      {/* Platform icon */}
      <div
        className={`w-8 h-8 rounded-lg bg-base-100 border border-base-300/60 flex items-center justify-center flex-shrink-0 ${meta.color}`}
      >
        {meta.icon}
      </div>

      {/* URL input */}
      <input
        type="url"
        className="input input-sm flex-1 text-sm"
        placeholder={meta.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`${meta.label} URL`}
      />

      {/* Remove */}
      <button
        type="button"
        onClick={onRemove}
        className="btn btn-ghost btn-square btn-sm text-base-content/30 hover:text-error hover:bg-error/10 transition-colors flex-shrink-0"
        aria-label={`Remove ${meta.label} link`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="2" y1="2" x2="12" y2="12" />
          <line x1="12" y1="2" x2="2" y2="12" />
        </svg>
      </button>
    </div>
  );
}
