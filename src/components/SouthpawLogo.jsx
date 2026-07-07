// Crisp vector version of the Southpaw Financial Services wordmark.
// Colors tuned to read clearly on the site's dark navy background.
export default function SouthpawLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Southpaw Financial Services"
    >
      {/* double-chevron mark */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M98 26 L56 75 L98 124" stroke="#2f62b0" strokeWidth="12" />
        <path d="M74 26 L32 75 L74 124" stroke="#4b86dd" strokeWidth="12" />
      </g>

      {/* wordmark */}
      <text
        x="120" y="86"
        fontFamily="'Fraunces', Georgia, 'Times New Roman', serif"
        fontSize="72" fontWeight="500" letterSpacing="1.5" fill="#4b86dd"
      >
        SOUTHPAW
      </text>
      <text
        x="122" y="126"
        fontFamily="'Manrope', system-ui, sans-serif"
        fontSize="23" fontWeight="600" letterSpacing="8.5" fill="#8fb2e0"
      >
        FINANCIAL SERVICES
      </text>
    </svg>
  )
}
