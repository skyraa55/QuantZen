export default function Card({ icon, iconStyle, title, children, className = "" }) {
  return (
    <div
      className={`group rounded-[14px] border border-line bg-gradient-to-b from-panel to-ink2 p-6.5 transition-all duration-200 hover:-translate-y-[3px] hover:border-line2 [&_p]:text-[14.5px] [&_p]:text-muted ${className}`.trim()}
    >
      {icon !== undefined && (
        <div
          className="mb-4 grid h-[38px] w-[38px] place-items-center rounded-[9px] border border-line2 bg-blue/[0.07] font-mono text-[15px] text-blue"
          style={iconStyle}
        >
          {icon}
        </div>
      )}
      {title && <h3 className="mb-2 text-lg">{title}</h3>}
      {children}
    </div>
  );
}
