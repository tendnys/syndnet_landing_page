interface MapPlaceholderProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function MapPlaceholder({ variant = 1 }: MapPlaceholderProps) {
  const getBackgroundGradient = () => {
    switch (variant) {
      case 1:
        return 'bg-gradient-to-br from-gray-800 to-gray-900';
      case 2:
        return 'bg-gradient-to-br from-emerald-950 to-gray-900';
      case 3:
        return 'bg-gradient-to-br from-slate-800 to-gray-900';
      case 4:
        return 'bg-gradient-to-br from-gray-900 to-emerald-950';
      case 5:
        return 'bg-gradient-to-br from-slate-900 to-gray-800';
      case 6:
        return 'bg-gradient-to-br from-gray-800 to-slate-900';
      default:
        return 'bg-gradient-to-br from-gray-800 to-gray-900';
    }
  };

  const getMapPattern = () => {
    switch (variant) {
      case 1:
        return (
          <>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm" />
            <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-blue-500/20 rounded-full blur-sm" />
          </>
        );
      case 2:
        return (
          <>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            <div className="absolute top-1/4 right-1/4 w-32 h-1 bg-emerald-500/20 rotate-45" />
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-emerald-400/30 rounded-full" />
          </>
        );
      case 3:
        return (
          <>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-blue-500/20 rounded-lg transform -rotate-12" />
            <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-blue-400/25 rounded-full blur-sm" />
          </>
        );
      case 4:
        return (
          <>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#4B5563 1px, transparent 1px), linear-gradient(90deg, #4B5563 1px, transparent 1px)', backgroundSize: '45px 45px' }} />
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <path d="M 100 150 Q 250 100 400 200 T 700 150" stroke="#1877F2" strokeWidth="2" fill="none" />
            </svg>
            <div className="absolute top-2/3 left-1/2 w-6 h-6 bg-blue-500/30 rounded-full" />
          </>
        );
      case 5:
        return (
          <>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '55px 55px' }} />
            <div className="absolute top-1/3 left-1/2 w-16 h-16 border-2 border-red-500/20 rounded-full" />
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-orange-500/15 rounded-full" />
          </>
        );
      case 6:
        return (
          <>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500/40 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400/30 rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500/35 rounded-full" />
            <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-blue-300/40 rounded-full" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full aspect-[16/9] rounded-xl border border-gray-800 shadow-2xl overflow-hidden ${getBackgroundGradient()}`}>
      {getMapPattern()}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
    </div>
  );
}
