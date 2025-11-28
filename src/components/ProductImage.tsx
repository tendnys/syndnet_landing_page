interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-1">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

// Placeholder for screenshots until user provides real images
export function ScreenshotPlaceholder({ title, className = '' }: { title: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-gray-600 text-xs mt-2">Replace with /images/{title.toLowerCase().replace(/\s+/g, '-')}.png</p>
        </div>
      </div>
    </div>
  );
}
