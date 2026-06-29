import { Fragment } from "react";

/**
 * Reusable "Application → QuantZen Layer → API Gateway → Backend Systems"
 * flow diagram, used on the Home and Product pages with slightly different
 * node copy. `nodes` is an array of { title, detail, highlight }.
 */
export default function ArchDiagram({ nodes, chips, spaced = false }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-ink2 px-6.5 py-8 ${spaced ? "mt-10" : ""}`}
    >
      <div className="flex flex-wrap items-stretch justify-center gap-0">
        {nodes.map((node, i) => (
          <Fragment key={node.title}>
            {i > 0 && (
              <div className="grid min-w-9 place-items-center px-1.5 text-xl text-faint max-[860px]:rotate-90">
                →
              </div>
            )}
            <div
              className={
                node.highlight
                  ? "relative min-w-[150px] flex-1 rounded-xl border border-blue bg-[linear-gradient(160deg,rgba(92,157,255,.12),var(--color-panel))] px-4 py-4.5 text-center shadow-[0_0_0_1px_rgba(92,157,255,.15),0_10px_40px_-20px_var(--color-blue)]"
                  : "relative min-w-[150px] flex-1 rounded-xl border border-line2 bg-panel px-4 py-4.5 text-center"
              }
            >
              <div
                className={`font-disp text-[15px] font-semibold ${node.highlight ? "text-blue" : ""}`}
              >
                {node.title}
              </div>
              <div className="mt-[5px] font-mono text-xs text-faint">
                {node.detail}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      {chips && (
        <div className="mt-[22px] flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-line bg-panel px-[13px] py-[5px] font-mono text-xs text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
