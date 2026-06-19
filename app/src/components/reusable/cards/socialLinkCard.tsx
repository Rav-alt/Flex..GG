"use client";

import { Social } from "@/app/src/type/social";

type Props = {
  social: Social;
  index: number;
  onChange: (index: number, value: string) => void;
  onRemove: (index: number) => void;
  icon: string;
  placeholder: string;
};

export default function SocialCard({
  social,
  index,
  onChange,
  onRemove,
  icon,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Platform icon */}
      <div className="w-9 h-9 rounded-lg bg-base-100 border border-base-300/60 flex items-center justify-center text-base flex-shrink-0">
        {icon}
      </div>

      {/* Platform label + input, stacked for clarity */}
      <div className="flex-1 min-w-0">
        <input
          type="text"
          className="input input-sm input-bordered w-full text-sm"
          placeholder={placeholder}
          value={social.url}
          onChange={(e) => onChange(index, e.target.value)}
          aria-label={`${social.platform} URL`}
        />
      </div>

      <button
        type="button"
        className="btn btn-ghost btn-square btn-sm text-base-content/30 hover:text-error hover:bg-error/10 transition-colors flex-shrink-0"
        onClick={() => onRemove(index)}
        aria-label={`Remove ${social.platform} link`}
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
