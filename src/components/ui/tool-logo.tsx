interface ToolLogoProps {
  logo: string;
  color: string;
  size?: number;
}

export default function ToolLogo({ logo, color, size = 28 }: ToolLogoProps) {
  const s = size;

  switch (logo) {
    case "sap":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <text x="4" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" fill="white">SAP</text>
        </svg>
      );

    case "ariba":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.15)" />
          <text x="9" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="14" fill="white">ARB</text>
        </svg>
      );

    case "excel":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <rect x="6" y="4" width="26" height="40" rx="3" fill="rgba(255,255,255,0.15)" />
          <rect x="18" y="4" width="24" height="40" rx="3" fill="rgba(255,255,255,0.2)" />
          <text x="10" y="32" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="white">X</text>
        </svg>
      );

    case "powerbi":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <rect x="8" y="30" width="8" height="12" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="20" y="20" width="8" height="22" rx="2" fill="rgba(255,255,255,0.7)" />
          <rect x="32" y="10" width="8" height="32" rx="2" fill="white" />
        </svg>
      );

    case "teams":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <circle cx="30" cy="14" r="8" fill="rgba(255,255,255,0.3)" />
          <circle cx="30" cy="14" r="5" fill="white" />
          <rect x="18" y="24" width="24" height="16" rx="4" fill="rgba(255,255,255,0.25)" />
          <circle cx="14" cy="20" r="6" fill="rgba(255,255,255,0.6)" />
          <rect x="6" y="28" width="16" height="12" rx="3" fill="rgba(255,255,255,0.4)" />
        </svg>
      );

    case "outlook":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <rect x="4" y="12" width="28" height="24" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="16" y="8" width="28" height="24" rx="3" fill="rgba(255,255,255,0.3)" />
          <circle cx="16" cy="24" r="8" fill="rgba(255,255,255,0.15)" />
          <circle cx="16" cy="24" r="5" fill="white" />
        </svg>
      );

    case "gsheets":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <rect x="8" y="4" width="32" height="40" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="8" y="14" width="32" height="1.5" fill="rgba(255,255,255,0.4)" />
          <rect x="8" y="22" width="32" height="1.5" fill="rgba(255,255,255,0.4)" />
          <rect x="8" y="30" width="32" height="1.5" fill="rgba(255,255,255,0.4)" />
          <rect x="22" y="4" width="1.5" height="40" fill="rgba(255,255,255,0.4)" />
        </svg>
      );

    case "gdrive":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <path d="M24 8L40 36H8L24 8Z" fill="rgba(255,255,255,0.15)" />
          <path d="M8 36L16 22L32 36H8Z" fill="rgba(255,255,255,0.25)" />
          <path d="M24 8L40 36L32 36L16 8L24 8Z" fill="rgba(255,255,255,0.2)" />
          <circle cx="24" cy="24" r="5" fill="white" opacity="0.6" />
        </svg>
      );

    case "openai":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <path d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8Z" fill="rgba(255,255,255,0.15)" />
          <path d="M24 14C24 14 30 18 30 24C30 30 24 34 24 34C24 34 18 30 18 24C18 18 24 14 24 14Z" fill="rgba(255,255,255,0.5)" />
          <circle cx="24" cy="24" r="4" fill="white" />
        </svg>
      );

    case "office":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <path d="M8 12L20 8V40L8 36V12Z" fill="rgba(255,255,255,0.5)" />
          <rect x="20" y="12" width="20" height="24" rx="2" fill="rgba(255,255,255,0.25)" />
          <text x="23" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="white">M</text>
        </svg>
      );

    case "zoom":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <rect x="4" y="14" width="28" height="20" rx="4" fill="rgba(255,255,255,0.25)" />
          <path d="M32 20L44 14V34L32 28V20Z" fill="rgba(255,255,255,0.5)" />
        </svg>
      );

    case "tableau":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none">
          <rect x="22" y="4" width="4" height="16" rx="2" fill="white" />
          <rect x="22" y="28" width="4" height="16" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="4" y="22" width="16" height="4" rx="2" fill="white" />
          <rect x="28" y="22" width="16" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="14" y="10" width="4" height="12" rx="2" fill="rgba(255,255,255,0.7)" transform="rotate(45 16 16)" />
          <circle cx="24" cy="24" r="4" fill="white" />
        </svg>
      );

    default:
      return (
        <span className="text-white font-bold text-lg">{logo.charAt(0).toUpperCase()}</span>
      );
  }
}
