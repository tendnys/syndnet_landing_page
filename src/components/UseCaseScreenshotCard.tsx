interface UseCaseScreenshotCardProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function UseCaseScreenshotCard({ variant = 1 }: UseCaseScreenshotCardProps) {
  const getAccentElements = () => {
    switch (variant) {
      case 1:
        return (
          <>
            <div className="absolute top-6 left-6 right-6 h-8 bg-gradient-to-r from-[#1877F2]/10 to-transparent rounded border border-[#1877F2]/20" />
            <div className="absolute bottom-1/3 left-8 w-2 h-2 bg-[#1877F2]/60 rounded-full" />
            <div className="absolute bottom-1/4 left-16 w-2 h-2 bg-[#1877F2]/40 rounded-full" />
          </>
        );
      case 2:
        return (
          <>
            <div className="absolute top-1/4 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#1877F2]/40 to-transparent" />
            <div className="absolute top-1/3 right-12 w-20 h-20 border border-[#1877F2]/20 rounded-lg" />
            <div className="absolute bottom-1/3 left-12 w-3 h-3 bg-[#1877F2]/50 rounded-full" />
          </>
        );
      case 3:
        return (
          <>
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <path d="M 50 100 Q 200 80 350 120 T 650 100" stroke="#1877F2" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#1877F2]/30 rounded-full" />
          </>
        );
      case 4:
        return (
          <>
            <div className="absolute inset-6 border border-[#1877F2]/15 rounded-lg" />
            <div className="absolute top-8 left-8 right-8 h-6 bg-[#1877F2]/10 rounded" />
            <div className="absolute bottom-12 left-8 w-3 h-3 bg-[#1877F2]/60 rounded-full" />
            <div className="absolute bottom-12 left-14 w-2 h-2 bg-[#1877F2]/40 rounded-full" />
          </>
        );
      case 5:
        return (
          <>
            <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-red-500/20 rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-orange-500/15 rounded-full" />
            <div className="absolute top-1/2 right-1/3 w-0.5 h-20 bg-[#1877F2]/30" />
          </>
        );
      case 6:
        return (
          <>
            <div className="absolute top-10 left-10 w-4 h-4 bg-[#1877F2]/50 rounded-full" />
            <div className="absolute top-20 left-20 w-3 h-3 bg-[#1877F2]/40 rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#1877F2]/45 rounded-full" />
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#1877F2]/50 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#1877F2]/30 to-transparent rotate-45" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Outer card with perspective and tilt - more pronounced for hero */}
      <div
        className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 overflow-hidden"
        style={{
          transform: 'perspective(1500px) rotateY(-4deg) rotateX(3deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -15px rgba(24, 119, 242, 0.1)',
        }}
      >
        {/* Inner UI frame - lighter background suggesting app content */}
        <div className="absolute inset-6 bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-xl border border-gray-700/40 overflow-hidden">
          {/* Accent elements and markers */}
          {getAccentElements()}

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: 'linear-gradient(#1877F2 1px, transparent 1px), linear-gradient(90deg, #1877F2 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-gray-900/50" />

          {/* Additional glow from edges */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2]/5 via-transparent to-purple-500/5" />
        </div>

        {/* Enhanced glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#1877F2]/10 via-transparent to-purple-500/10 rounded-2xl blur-xl" />
      </div>
    </div>
  );
}
