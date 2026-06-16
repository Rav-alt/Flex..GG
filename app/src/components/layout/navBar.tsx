import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300/50 sticky top-0 z-50 px-4 lg:px-8">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="4"
                width="5"
                height="6"
                rx="1"
                fill="currentColor"
                className="text-accent-content"
              />
              <rect
                x="8"
                y="2"
                width="5"
                height="10"
                rx="1"
                fill="currentColor"
                className="text-accent-content"
              />
            </svg>
          </div>
          <span className="font-bold text-base tracking-tight text-base-content group-hover:text-accent transition-colors">
            Flex<span className="text-accent">.GG</span>
          </span>
        </Link>
      </div>

      {/* Desktop links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 text-sm">
          <li>
            <Link
              href="#features"
              className="text-base-content/60 hover:text-base-content rounded-lg"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#profiles"
              className="text-base-content/60 hover:text-base-content rounded-lg"
            >
              Profiles
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-base-content/60 hover:text-base-content rounded-lg"
            >
              How it works
            </Link>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="navbar-end flex items-center gap-2">
        <Link
          href="/src/auth/signIn"
          className="btn btn-ghost btn-sm hidden sm:inline-flex"
        >
          Log in
        </Link>
        <Link href="/src/auth/signUp" className="btn btn-accent btn-sm">
          Claim your tag
        </Link>
        {/* Mobile menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-square btn-sm"
            aria-label="Open menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="2" y1="5" x2="16" y2="5" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="13" x2="16" y2="13" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box shadow-lg w-44 mt-2 p-2 text-sm border border-base-300/50"
          >
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#profiles">Profiles</Link>
            </li>
            <li>
              <Link href="#how-it-works">How it works</Link>
            </li>
            <li>
              <Link href="/auth/signIn">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
