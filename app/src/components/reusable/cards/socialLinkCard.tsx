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
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-base-300 flex items-center justify-center text-lg">
        {icon}
      </div>

      <input
        type="text"
        className="input input-bordered flex-1"
        placeholder={placeholder}
        value={social.url}
        onChange={(e) => onChange(index, e.target.value)}
      />

      <button
        className="btn btn-square btn-outline"
        onClick={() => onRemove(index)}
      >
        ✕
      </button>
    </div>
  );
}
