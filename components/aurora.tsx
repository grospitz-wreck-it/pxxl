"use client";

import { useEffect, useState } from "react";

export default function Aurora() {
  const [colors, setColors] = useState(
    "from-fuchsia-500/30 via-violet-500/20 to-cyan-400/20"
  );

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setColors(
        "from-cyan-400/30 via-blue-500/20 to-violet-500/25"
      );
    } else if (hour >= 12 && hour < 18) {
      setColors(
        "from-fuchsia-500/30 via-pink-500/25 to-violet-500/25"
      );
    } else if (hour >= 18 && hour < 22) {
      setColors(
        "from-orange-400/25 via-fuchsia-500/30 to-violet-600/25"
      );
    } else {
      setColors(
        "from-indigo-600/30 via-violet-700/25 to-cyan-500/20"
      );
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* band 1 */}

      <div
        className={`aurora-band absolute left-[-15%] top-[-20%] h-[140vh] w-[28vw] bg-gradient-to-b ${colors}`}
      />

      {/* band 2 */}

      <div
        className={`aurora-band-reverse absolute left-[20%] top-[-15%] h-[130vh] w-[24vw] bg-gradient-to-b ${colors}`}
      />

      {/* band 3 */}

      <div
        className={`aurora-band absolute left-[45%] top-[-25%] h-[150vh] w-[22vw] bg-gradient-to-b ${colors}`}
      />

      {/* band 4 */}

      <div
        className={`aurora-band-reverse absolute left-[65%] top-[-20%] h-[130vh] w-[24vw] bg-gradient-to-b ${colors}`}
      />

      {/* band 5 */}

      <div
        className={`aurora-band absolute right-[-10%] top-[-10%] h-[140vh] w-[28vw] bg-gradient-to-b ${colors}`}
      />

      {/* logo core */}

      <div className="absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[120px]" />
    </div>
  );
}