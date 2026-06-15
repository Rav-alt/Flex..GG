import Link from "next/link";

import StepCard from "./src/components/reusable/cards/stepCard";
import Navbar from "./src/components/layout/navBar";
import Footer from "./src/components/layout/footer";
import UserCard from "./src/components/reusable/cards/userCard";
import StatBadge from "./src/components/reusable/badge/statBadge";
import FeatureCard from "./src/components/reusable/cards/featuredCard";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROFILES = [
  {
    tag: "ShadowXV",
    profileUrl: "flex.gg/shadowxv",
    initials: "SX",
    games: [
      {
        name: "Valorant",
        rank: "Diamond III",
        badgeClass: "badge-info",
        dotClass: "text-info",
      },
      {
        name: "League of Legends",
        rank: "Plat I",
        badgeClass: "badge-success",
        dotClass: "text-success",
      },
      {
        name: "Apex Legends",
        rank: "Gold II",
        badgeClass: "badge-warning",
        dotClass: "text-warning",
      },
    ],
  },
  {
    tag: "NovaPulse",
    profileUrl: "flex.gg/novapulse",
    initials: "NP",
    games: [
      {
        name: "Overwatch 2",
        rank: "Top 500",
        badgeClass: "badge-info",
        dotClass: "text-info",
      },
      {
        name: "Fortnite",
        rank: "Champion",
        badgeClass: "badge-success",
        dotClass: "text-success",
      },
      {
        name: "Rocket League",
        rank: "Diamond II",
        badgeClass: "badge-primary",
        dotClass: "text-primary",
      },
    ],
  },
  {
    tag: "IronVeil",
    profileUrl: "flex.gg/ironveil",
    initials: "IV",
    games: [
      {
        name: "CS2",
        rank: "Global Elite",
        badgeClass: "badge-warning",
        dotClass: "text-warning",
      },
      {
        name: "Dota 2",
        rank: "Legend",
        badgeClass: "badge-error",
        dotClass: "text-error",
      },
      {
        name: "Elden Ring",
        rank: "NG+7",
        badgeClass: "badge-ghost",
        dotClass: "text-base-content/40",
      },
    ],
  },
];

const STATS = [
  { value: "48K", label: "Profiles created" },
  { value: "120+", label: "Games supported" },
  { value: "1.2M", label: "Profile views" },
  { value: "Free", label: "Always & forever" },
];

const STEPS = [
  {
    step: 1,
    title: "Claim your tag",
    description:
      "Pick your unique handle — flex.gg/you. Free forever, yours to keep.",
  },
  {
    step: 2,
    title: "Add your games",
    description:
      "Add every game you play with your rank, role, and win rate. Connect Riot or Steam for auto-sync.",
  },
  {
    step: 3,
    title: "Share your link",
    description:
      "Drop it in your Discord bio, Twitch panel, or Twitter. One tap — your whole profile.",
  },
];

// Inline SVGs for feature icons — swap for your icon library if preferred
const icons = {
  trophy: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21h8M12 17v4M17 3H7l1 8a4 4 0 0 0 8 0l1-8z" />
      <path d="M5 5H3a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4h.5M19 5h2a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4h-.5" />
    </svg>
  ),
  sync: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  ),
  play: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  medal: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="14" r="6" />
      <path d="M12 8V2M8 2h8" />
    </svg>
  ),
  link: (
    <svg
      width="20"
      height="20"
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
  eye: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

const FEATURES = [
  {
    icon: icons.trophy,
    title: "Ranks & stats",
    description:
      "Your rank, win rate, hours played, and main role — for every game in your library, all in one place.",
  },
  {
    icon: icons.sync,
    title: "Auto-sync via API",
    description:
      "Link your Riot, Steam, or Blizzard account once. Your stats update automatically every time you play.",
  },
  {
    icon: icons.play,
    title: "Clip showcase",
    description:
      "Upload your best plays and highlight reels directly to your profile. No third-party hosting required.",
  },
  {
    icon: icons.medal,
    title: "Achievements",
    description:
      "Earn badges as you hit milestones — win streaks, top ranks, tournament wins, and more.",
  },
  {
    icon: icons.link,
    title: "All your socials",
    description:
      "Twitch, YouTube, Discord, TikTok — one tidy list. Everything a potential teammate needs to find you.",
  },
  {
    icon: icons.eye,
    title: "Profile analytics",
    description:
      "See how many people visited, where they came from, and which links they clicked — updated daily.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden">
          {/* Subtle grid pattern — the one visual flourish we allow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-2xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 badge badge-outline badge-accent mb-6 px-4 py-3 text-xs tracking-widest uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                aria-hidden="true"
              />
              Your gamer identity, one link
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight text-base-content mb-6">
              One profile for <span className="text-accent">every game</span>{" "}
              you play
            </h1>

            <p className="text-base sm:text-lg text-base-content/60 leading-relaxed max-w-lg mx-auto mb-10">
              Flex your ranks, stats, clips, and achievements — all in one
              shareable link. Works for every gamer, every game, every platform.
            </p>

            {/* Claim input */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
              <div className="join w-full sm:w-auto">
                <span className="join-item flex items-center px-4 bg-base-200 border border-base-300 text-base-content/40 text-sm select-none whitespace-nowrap">
                  flex.gg/
                </span>
                <input
                  type="text"
                  className="input join-item w-44"
                  placeholder="yourtag"
                  aria-label="Choose your Flex.GG tag"
                />
                <Link
                  href={"/src/auth/signUp"}
                  className="btn join-item btn-accent"
                >
                  Claim it free
                </Link>
              </div>
            </div>

            <p className="text-xs text-base-content/30">
              Free forever — no credit card needed.
            </p>
          </div>
        </section>

        {/* ━━━ STAT STRIP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="border-y border-base-300/50 bg-base-200/50 py-10 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <StatBadge key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </section>

        {/* ━━━ LIVE PROFILES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="profiles" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
                Live profiles
              </p>
              <h2 className="text-4xl font-bold text-base-content mb-3">
                See it in action
              </h2>
              <p className="text-base-content/50 text-sm max-w-sm mx-auto">
                Real profiles from the Flex community — click any card to view
                the full page.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {PROFILES.map((p) => (
                <Link
                  key={p.tag}
                  href={`/${p.tag.toLowerCase()}`}
                  className="hover:scale-[1.02] transition-transform duration-200"
                >
                  <UserCard
                    tag={p.tag}
                    profileUrl={p.profileUrl}
                    initials={p.initials}
                    games={p.games}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ HOW IT WORKS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section
          id="how-it-works"
          className="py-20 px-4 bg-base-200/40 border-y border-base-300/50"
        >
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — steps */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
                How it works
              </p>
              <h2 className="text-4xl font-bold text-base-content mb-10">
                Up and running in minutes
              </h2>
              <div className="flex flex-col gap-8">
                {STEPS.map((s) => (
                  <StepCard key={s.step} {...s} />
                ))}
              </div>
            </div>

            {/* Right — live preview card */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Faint halo behind the card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 scale-110 rounded-3xl bg-accent/5 blur-2xl"
                />
                <UserCard
                  tag="YourTag"
                  profileUrl="flex.gg/yourtag"
                  initials="YT"
                  games={[
                    {
                      name: "Your favourite game",
                      rank: "Your rank",
                      badgeClass: "badge-accent",
                      dotClass: "text-accent",
                    },
                    {
                      name: "Another game",
                      rank: "Your rank",
                      badgeClass: "badge-ghost",
                      dotClass: "text-base-content/40",
                    },
                  ]}
                  className="relative"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ FEATURES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
                Features
              </p>
              <h2 className="text-4xl font-bold text-base-content mb-3">
                Everything your profile needs
              </h2>
              <p className="text-base-content/50 text-sm max-w-sm mx-auto">
                All the tools to show the world what you're made of — out of the
                box, no setup needed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f) => (
                <FeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 px-4 bg-base-200/40 border-t border-base-300/50">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Ready to claim your tag?
            </h2>
            <p className="text-base-content/50 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              Join thousands of gamers who already have their profile live.
              Takes less than two minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={"/src/auth/signUp"} className="btn btn-accent btn-lg">
                Get started free
              </Link>
              <Link href="#profiles" className="btn btn-ghost btn-lg">
                See examples
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
