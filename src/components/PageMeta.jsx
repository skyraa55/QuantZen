import { useEffect } from "react";

/**
 * Sets document.title for the current page. Usage: <PageMeta title="Product" />
 * Renders nothing — it's a side-effect-only helper component.
 */
export default function PageMeta({ title }) {
  useEffect(() => {
    document.title = title
      ? `${title} — QuantZen™`
      : "QuantZen™ — Post-Quantum Protection for API-Driven Infrastructure";
  }, [title]);

  return null;
}
