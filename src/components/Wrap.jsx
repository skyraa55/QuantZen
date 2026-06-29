/**
 * Centered max-width container — replaces the original `.wrap` CSS class
 * (`max-width: 1180px; margin: 0 auto; padding: 0 28px`).
 */
export default function Wrap({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-(--container-wrap) px-7 ${className}`.trim()}>
      {children}
    </div>
  );
}
