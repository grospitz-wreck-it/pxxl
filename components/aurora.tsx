"use client";

import { useEffect, useState } from "react";

export default function Aurora() {
  const [palette, setPalette] = useState({
    primary: "from-fuchsia-500/25",
    secondary: "via-violet-500/20",
    tertiary: "to-cyan-400/15",
  });

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setPalette({
        primary: "from-cyan-400/25",
        secondary: "via-blue-500/20",
        tertiary: "to-violet-500/15",
      });
    } else if (hour >= 12 && hour < 18) {
      setPalette({
        primary: "from-fuchsia-500/25",
        secondary: "via-pink-500/20",
        tertiary: "to-violet-500/15",
      });
    } else if (hour >= 18 && hour < 22) {
      setPalette({
        primary: "from-orange-400/20",
        secondary: "via-fuchsia-500/25",
        tertiary: "to-violet-600/20",
      });
    } else {
      setPalette({
        primary: "from-indigo-600/25",
        secondary: "via-violet-700/20",
        tertiary: "to-cyan-500/15",
      });
    }
  }, []);

  const gradient = `${palette.primary} ${palette.secondary} ${palette.tertiary}`;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* links */}

      <div
        className={`aurora-beam absolute left-[5%] top-[-20%] h-[140vh] w-[180px] rotate-[-20deg] bg-gradient-to-b ${gradient}`}
      />

      <div
        className={`aurora-beam-slow absolute left-[18%] top-[-10%] h-[130vh] w-[260px] rotate-[-12deg] bg-gradient-to-b ${gradient}`}
      />

      {/* mitte */}

      <div
        className={`aurora-beam absolute left-[42%] top-[-15%] h-[150vh] w-[220px] rotate-[8deg] bg-gradient-to-b ${gradient}`}
      />

      <div
        className={`aurora-beam-slow absolute left-[55%] top-[-20%] h-[140vh] w-[180px] rotate-[16deg] bg-gradient-to-b ${gradient}`}
      />

      {/* rechts */}

      <div
        className={`aurora-beam absolute right-[10%] top-[-15%] h-[140vh] w-[240px] rotate-[22deg] bg-gradient-to-b ${gradient}`}
      />

      {/* glow hinter Logo */}

      <div className="absolute left-1/2 top-[35%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-[120px]" />
    </div>
  );
}