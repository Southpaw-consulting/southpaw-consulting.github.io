export default function Logo({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* rounded tile background */}
      <rect width="64" height="64" rx="14" fill="#0b1b2b" stroke="rgba(255,255,255,0.08)" />
      {/* double chevron — Southpaw mark */}
      <path
        d="M18 18 L34 32 L18 46"
        fill="none"
        stroke="#3f7bd6"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 18 L48 32 L32 46"
        fill="none"
        stroke="#1f4e96"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
