import Button from "./Button";

export default function CtaBand({ heading, body, ctaLabel, className = "" }) {
  return (
    <div
      className={`rounded-[18px] border border-line2 bg-[linear-gradient(120deg,rgba(92,157,255,.1),rgba(47,214,182,.06))] p-11 text-center ${className}`.trim()}
    >
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-[30px]">{heading}</h2>
      <p className="mx-auto mb-6.5 max-w-[560px] text-muted">{body}</p>
      <Button to="/contact">{ctaLabel}</Button>
    </div>
  );
}
