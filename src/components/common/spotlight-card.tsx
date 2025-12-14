import React from "react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* decorative spotlight background */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-2xl pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(closest-side, rgba(82,39,255,0.16), rgba(82,39,255,0.06) 35%, rgba(255,255,255,0.0) 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
