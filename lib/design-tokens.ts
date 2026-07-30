export const colors = {
  accent: "#a8d946",
  accentRgb: "168, 217, 70",
  secondary: "#d946ef",
  secondaryRgb: "217, 70, 239",
  bg: {
    app: "#050505",
    elevated: "#0e0e10",
    card: "#141416",
    surface: "#1c1c1e",
  },
  text: {
    primary: "#ffffff",
    secondary: "#a1a1aa",
    muted: "#71717a",
    disabled: "#52525b",
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.05)",
    default: "rgba(255, 255, 255, 0.10)",
    strong: "rgba(255, 255, 255, 0.20)",
  },
  semantic: {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#06b6d4",
  },
} as const;

export const gradients = {
  success: "from-lime-400 to-lime-500",
  info: "from-cyan-400 to-cyan-500",
  warning: "from-orange-400 to-orange-500",
  error: "from-red-500 to-rose-500",
  premium: "from-fuchsia-500 to-pink-500",
  brand: "from-lime to-lime-500",
} as const;

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  full: "9999px",
} as const;

export const tw = {
  card: "bg-[#141416] rounded-xl border border-white/10 overflow-hidden",
  cardInteractive:
    "bg-[#141416] rounded-xl border border-white/10 overflow-hidden hover:border-white/20 hover:bg-[#1c1c1e] transition-all cursor-pointer",
  buttonPrimary:
    "bg-lime hover:bg-lime/90 text-black rounded-xl h-11 px-6",
  buttonSecondary:
    "bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl h-11 px-6",
  textDisplay: "text-2xl font-bold text-white font-display",
  textTitle: "text-lg font-semibold text-white",
  textBody: "text-sm text-zinc-400",
  textMicro: "text-xs font-bold uppercase tracking-wider",
} as const;

export type ColorKey = keyof typeof colors;
export type GradientKey = keyof typeof gradients;
