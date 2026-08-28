import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'stacked' | 'horizontal' | 'compact';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showText = true,
  size = 'md',
  layout = 'horizontal',
}) => {
  // Dimensions based on size
  const iconDimensions = {
    sm: { width: 32, height: 32, textTitle: 'text-sm', textSub: 'text-[9px]' },
    md: { width: 38, height: 38, textTitle: 'text-sm sm:text-base', textSub: 'text-[9px] sm:text-[10px]' },
    lg: { width: 56, height: 56, textTitle: 'text-xl sm:text-2xl', textSub: 'text-xs sm:text-sm' },
    xl: { width: 72, height: 72, textTitle: 'text-2xl sm:text-3xl', textSub: 'text-sm sm:text-base' },
  }[size];

  const primaryTextColor =
    variant === 'white'
      ? 'text-white'
      : variant === 'light'
      ? 'text-slate-900'
      : 'text-[#0B3C5D]';

  const secondaryTextColor =
    variant === 'white'
      ? 'text-slate-300'
      : variant === 'light'
      ? 'text-slate-700'
      : 'text-[#328CC1]';

  const subTextColor =
    variant === 'white'
      ? 'text-teal-200'
      : 'text-slate-600';

  const gradStart = variant === 'white' ? '#67B8E3' : '#0B3C5D';
  const gradEnd = variant === 'white' ? '#FFFFFF' : '#328CC1';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="clinic-brand-logo">
      {/* SVG Icon accurately reproducing the Face + Tooth + Implant geometry */}
      <svg
        width={iconDimensions.width}
        height={iconDimensions.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Advance Maxillofacial Implant & Dental Clinic Logo"
      >
        <defs>
          <linearGradient id={`logoGrad-${variant}-${size}`} x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor={gradStart} />
            <stop offset="100%" stopColor={gradEnd} />
          </linearGradient>
          <linearGradient id={`implantGrad-${variant}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradStart} />
            <stop offset="100%" stopColor={gradEnd} />
          </linearGradient>
        </defs>

        {/* Human Face Profile & Tooth Crest Outline */}
        <path
          d="M32 18 C26 18, 20 22, 17 28 C15 32, 17 38, 14 43 C12 46, 7 49, 7 53 C7 56, 12 57, 14 60 C15 62, 12 66, 15 70 C18 74, 23 76, 28 76 C33 76, 38 74, 43 71 C45 68, 47 62, 47 55 C47 45, 43 38, 43 32 C43 25, 38 18, 32 18 Z"
          stroke={`url(#logoGrad-${variant}-${size})`}
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Anatomical Molar Crown Contour */}
        <path
          d="M24 35 C23 26, 30 22, 36 24 C40 25, 42 30, 43 36 C44 42, 43 50, 40 58 C37 66, 30 70, 26 66 C23 63, 22 55, 23 48 C24 41, 25 38, 24 35 Z"
          stroke={`url(#logoGrad-${variant}-${size})`}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Facial Maxillofacial Dynamic Wing / Jaw Contour */}
        <path
          d="M37 56 C45 52, 57 48, 64 42 C67 39, 68 35, 65 33 C62 31, 55 35, 47 41 C41 46, 38 52, 38 56"
          stroke={`url(#logoGrad-${variant}-${size})`}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dental Implant Base & Precision Titanium Thread Rings */}
        <path
          d="M27 68 L43 68"
          stroke={`url(#implantGrad-${variant}-${size})`}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M29 73 L41 73"
          stroke={`url(#implantGrad-${variant}-${size})`}
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M31 78 L39 78"
          stroke={`url(#implantGrad-${variant}-${size})`}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        
        {/* Implant Apex Conical Tip */}
        <path
          d="M33 82 L37 82 L35 88 Z"
          fill={`url(#implantGrad-${variant}-${size})`}
        />
      </svg>

      {/* Typography accurately matching the logo text branding */}
      {showText && (
        layout === 'horizontal' ? (
          <div className="flex flex-col justify-center whitespace-nowrap leading-none">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className={`font-extrabold tracking-tight font-sans ${primaryTextColor} text-xs sm:text-sm uppercase`}>
                ADVANCE DENTAL
              </span>
              <span className="text-gray-300 text-xs font-normal">|</span>
              <span className={`font-semibold tracking-tight font-sans ${secondaryTextColor} text-xs sm:text-sm`}>
                Dr. Ali Akhtar Khan
              </span>
            </div>
            <span className={`font-medium tracking-wider font-sans ${subTextColor} text-[8px] sm:text-[9px] uppercase mt-0.5`}>
              Oral & Maxillofacial Implant Clinic
            </span>
          </div>
        ) : layout === 'compact' ? (
          <div className="flex items-center gap-1.5 whitespace-nowrap leading-none">
            <span className={`font-extrabold tracking-tight font-sans ${primaryTextColor} text-xs sm:text-sm uppercase`}>
              ADVANCE DENTAL
            </span>
            <span className="text-gray-300 text-xs font-normal">|</span>
            <span className={`font-semibold tracking-tight font-sans ${secondaryTextColor} text-xs sm:text-sm`}>
              Dr. Ali Akhtar Khan
            </span>
          </div>
        ) : (
          <div className="flex flex-col leading-none">
            <span className={`font-black tracking-tight font-sans ${primaryTextColor} ${iconDimensions.textTitle} uppercase`}>
              ADVANCE
            </span>
            <span className={`font-extrabold tracking-tight font-sans ${secondaryTextColor} ${iconDimensions.textTitle} uppercase -mt-0.5`}>
              MAXILLOFACIAL
            </span>
            <span className={`font-semibold tracking-wider font-sans ${subTextColor} ${iconDimensions.textSub} uppercase mt-0.5`}>
              IMPLANT & DENTAL CLINIC
            </span>
          </div>
        )
      )}
    </div>
  );
};
