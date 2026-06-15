import Link from "next/link";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-300/50 bg-base-100 px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <span className="font-bold text-sm text-base-content/40">
          Flex<span className="text-accent">.GG</span>
        </span>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-xs text-base-content/40 hover:text-base-content transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copy */}
        <p className="text-xs text-base-content/30">
          &copy; {new Date().getFullYear()} Flex.GG
        </p>
      </div>
    </footer>
  );
}
