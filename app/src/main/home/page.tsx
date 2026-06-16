import React from "react";
import UserCard from "../../components/reusable/cards/userCard";
import Link from "next/link";
import Navbar from "../../components/layout/navBar";
import Footer from "../../components/layout/footer";

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

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
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
            <div className="flex items-center justify-center py-4">
              <Link href={"/src/main/home"} className="btn btn-active">
                See more
              </Link>
            </div>
          </section>
          <div className="flex items-center justify-center">
            <Link
              href={"/src/main/profile/createProfile"}
              className="btn btn-accent"
            >
              Create Profile
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
