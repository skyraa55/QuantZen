import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import FeatureRow from "../components/FeatureRow";
import AttackScenarioStep from "../components/AttackScenarioStep";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const amberIcon = {
  color: "var(--color-amber)",
  borderColor: "rgba(242,166,59,.3)",
  background: "rgba(242,166,59,.06)",
};
const tealIcon = {
  color: "var(--color-teal)",
  borderColor: "rgba(47,214,182,.3)",
  background: "rgba(47,214,182,.06)",
};

const modelCards = [
  {
    icon: "!",
    style: amberIcon,
    title: "Harvest now, decrypt later",
    body: "Encrypted traffic captured today is stored for the day a quantum computer can break it. Because financial and identity data stays sensitive for decades, this is a present risk — not a future one.",
  },
  {
    icon: "∿",
    style: amberIcon,
    title: "Public-key cryptography is the weak point",
    body: "Shor's algorithm breaks RSA and elliptic-curve cryptography, the asymmetric primitives underpinning TLS key exchange and certificates. Grover's algorithm weakens symmetric strength, motivating larger keys.",
  },
  {
    icon: "✓",
    style: tealIcon,
    title: "Post-quantum cryptography mitigates it",
    body: "Lattice-based ML-KEM and ML-DSA — NIST FIPS 203 and 204 — are designed to resist both classical and quantum attack. QuantZen applies them to live API traffic without a stack rebuild.",
  },
  {
    icon: "↻",
    style: tealIcon,
    title: "Cryptographic agility",
    body: "Algorithms evolve. QuantZen rotates parameter sets and primitives by policy, and prevents downgrade by binding negotiated parameters into the signed, authenticated request.",
  },
];

export default function Security() {
  return (
    <>
      <PageMeta title="Security" />

      <Section>
        <Wrap>
          <Eyebrow>The model</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Why post-quantum, and why at the payload.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            Transport encryption protects a single hop and terminates at
            intermediaries. QuantZen protects the request itself —
            confidentiality, authenticity, and integrity travel with the
            payload, end to end, using cryptography designed to survive
            quantum attack.
          </p>
        </Wrap>
      </Section>

      <Section tight>
        <Wrap className="grid grid-cols-2 gap-4.5 max-[860px]:grid-cols-1">
          {modelCards.map((c) => (
            <Card key={c.title} icon={c.icon} iconStyle={c.style} title={c.title}>
              <p>{c.body}</p>
            </Card>
          ))}
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>Protections</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            What every protected request carries.
          </h2>
          <div className="mt-7">
            <FeatureRow icon="S" title="Payload signing & verification">
              Each request is signed with a post-quantum digital signature
              over a canonical representation, and verified server-side
              before any backend processing occurs.
            </FeatureRow>
            <FeatureRow icon="I" title="Message integrity">
              Authenticated encryption binds integrity to the payload, so any
              byte-level modification is detected and the request is
              rejected.
            </FeatureRow>
            <FeatureRow icon="R" title="Replay protection">
              Nonces, counters, and timestamps are bound into the signed
              request; previously seen or expired requests are refused.
            </FeatureRow>
            <FeatureRow icon="M" title="Man-in-the-middle protection">
              Because authenticity is bound to the payload — not just the
              transport — an intermediary cannot silently alter, substitute,
              or impersonate a request.
            </FeatureRow>
            <FeatureRow icon="A" title="Tamper-evident audit trail">
              Every request, verification result, and threat decision is
              written to a cryptographically chained, immutable audit record
              suitable for regulatory review.
            </FeatureRow>
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>Attack scenario</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            An intercepted, tampered API request — stopped.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            A funds-transfer request leaves a banking app. An attacker on the
            path attempts to alter the destination account. Here is what
            QuantZen does.
          </p>
          <div className="mt-7 rounded-2xl border border-line bg-ink2 p-7.5">
            <AttackScenarioStep number="1" title="Request is protected at the boundary">
              QuantZen intercepts{" "}
              <span className="font-mono">POST /transfers</span>, signs the
              canonical request with ML-DSA, and encrypts the payload with an
              ML-KEM-established session key.
            </AttackScenarioStep>
            <AttackScenarioStep
              number="2"
              kind="threat"
              title="Attacker intercepts and tampers"
              verdict="⚠ payload altered in transit"
            >
              A man-in-the-middle modifies the beneficiary account number
              inside the request body, then forwards it on.
            </AttackScenarioStep>
            <AttackScenarioStep
              number="3"
              kind="threat"
              title="Replay is also attempted"
              verdict="⚠ stale nonce detected"
            >
              The attacker re-sends a previously captured valid request,
              hoping to trigger a duplicate transfer.
            </AttackScenarioStep>
            <AttackScenarioStep
              number="4"
              kind="block"
              title="Verification engine rejects both"
              verdict="✓ blocked before backend"
            >
              The signature no longer matches the modified payload, and the
              replayed nonce has already been seen. Neither request reaches
              the core banking system.
            </AttackScenarioStep>
            <AttackScenarioStep
              number="5"
              kind="block"
              title="Audit record is written"
              verdict="✓ logged & alertable"
            >
              Each rejection is logged immutably with timestamp, source,
              algorithm, and reason — producing tamper-evident evidence for
              investigation and compliance.
            </AttackScenarioStep>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
