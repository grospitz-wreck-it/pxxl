"use client";

import { useEffect, useState } from "react";

export default function Aurora() {
  const [auroraClass, setAuroraClass] = useState(
    "from-fuchsia-500/20 via-violet-500/15 to-cyan-400/10"
  );

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setAuroraClass(
        "from-cyan-400/20 via-violet-500/15 to-fuchsia-500/15"
      );
    } else if (hour >= 12 && hour < 18) {
      setAuroraClass(
        "from-violet-400/20 via-fuchsia-500/20 to-cyan-300/10"
      );
    } else if (hour >= 18 && hour < 22) {
      setAuroraClass(
        "from-fuchsia-500/25 via-violet-600/20 to-indigo-500/15"
      );
    } else {
      setAuroraClass(
        "from-indigo-500/20 via-violet-600/20 to-cyan-500/10"
      );
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* main aurora */}

      <div
        className={`aurora absolute left-1/2 top-[5%] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r ${auroraClass} blur-[180px] opacity-90 md:h-[900px] md:w-[1400px]`}
      />

      {/* left stream */}

      <div
        className={`aurora absolute left-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-gradient-to-r ${auroraClass} blur-[160px] opacity-60 md:h-[600px] md:w-[600px]`}
        style={{
          animationDelay: "-6s",
        }}
      />

      {/* right stream */}

      <div
        className={`aurora absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-r ${auroraClass} blur-[180px] opacity-50 md:h-[700px] md:w-[700px]`}
        style={{
          animationDelay: "-12s",
        }}
      />

      {/* logo glow */}

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-[100px] md:h-[380px] md:w-[380px]" />
    </div>
  );
}