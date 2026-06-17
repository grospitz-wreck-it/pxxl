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
        "from-fuchsia-500/20 via-violet-600/20 to-indigo-500/15"
      );
    } else {
      setAuroraClass(
        "from-indigo-500/15 via-violet-600/15 to-cyan-500/10"
      );
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className={`aurora absolute left-1/2 top-[-150px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r ${auroraClass} blur-[120px] sm:h-[650px] sm:w-[900px] md:h-[800px] md:w-[1100px]`}
      />

      <div
        className={`aurora absolute left-[35%] top-[120px] h-[250px] w-[250px] rounded-full bg-gradient-to-r ${auroraClass} blur-[100px] opacity-60 sm:h-[350px] sm:w-[350px]`}
        style={{
          animationDelay: "-6s",
        }}
      />

      <div
        className={`aurora absolute right-[35%] top-[80px] h-[250px] w-[250px] rounded-full bg-gradient-to-r ${auroraClass} blur-[100px] opacity-50 sm:h-[350px] sm:w-[350px]`}
        style={{
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}