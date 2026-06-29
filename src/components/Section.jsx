/**
 * Page-section wrapper — replaces the original `section.block` /
 * `.block.tight` CSS classes (border-bottom rule + vertical padding).
 */
export default function Section({ children, tight = false, className = "" }) {
  return (
    <section
      className={`border-b border-line ${tight ? "py-14" : "py-[78px]"} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
