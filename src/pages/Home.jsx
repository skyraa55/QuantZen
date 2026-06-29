import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import ArchDiagram from "../components/ArchDiagram";
import CtaBand from "../components/CtaBand";
import Wrap from "../components/Wrap";
import Section from "../components/Section";
import AnimatedHero from "../components/AnimatedHero";

const threatCards = [
  {
    icon: "HNDL",
    title: "Harvest now, decrypt later",
    body:
      "Adversaries are recording encrypted API traffic today, archiving it until quantum capability matures. Data with a long confidentiality life is already exposed in transit.",
  },
  {
    icon: "API",
    title: "The API is the trust boundary",
    body:
      "Open Banking, payments, provisioning, and microservices all move through API calls across many parties at machine speed. That boundary is where confidentiality and authenticity must hold.",
  },
  {
    icon: "⏱",
    title: "Migration can't wait for a flag day",
    body:
      "Rip-and-replace migration to new cryptography means new TLS stacks, HSMs, PKI, and rewritten applications — years of cost and risk most institutions cannot absorb.",
  },
];

const homeArchNodes = [
  { title: "Application", detail: "client / service" },
  { title: "QuantZen™ Layer", detail: "intercept · protect · verify", highlight: true },
  { title: "API Gateway", detail: "Kong · NGINX · Envoy" },
  { title: "Backend Systems", detail: "unchanged core" },
];

const valueProps = [
  {
    icon: "01",
    title: "No infrastructure replacement",
    body: "Deploy alongside existing systems. No new PKI, HSM swap, or TLS-stack migration required.",
  },
  {
    icon: "02",
    title: "Zero application modifications",
    body: "Protection happens at the boundary. Application code, schemas, and UI logic are untouched.",
  },
  {
    icon: "03",
    title: "API interception & protection",
    body: "Requests are intercepted, signed, and encrypted at the payload level — beyond transport security alone.",
  },
  {
    icon: "04",
    title: "Cryptographic agility",
    body: "Rotate or upgrade algorithms by policy as standards evolve — no re-architecture, no rewrites.",
  },
  {
    icon: "05",
    title: "Immutable audit logging",
    body: "Every protected request produces a tamper-evident, cryptographically chained audit record for compliance.",
  },
  {
    icon: "06",
    title: "Future-ready by design",
    body: "Standardized post-quantum algorithms today, with a clear migration path for whatever NIST standardizes next.",
  },
];

export default function Home() {
  return (
    <>
      <PageMeta title="Home" />

      <AnimatedHero />

      <Section>
        <Wrap>
          <Eyebrow>The quantum clock is already running</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Encrypted today. Exposed tomorrow.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            The cryptography protecting your APIs — RSA and elliptic-curve —
            was never designed to withstand a quantum computer. A
            sufficiently capable machine running Shor&rsquo;s algorithm breaks
            the public-key foundations of TLS. The threat does not wait for
            that machine to arrive.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4.5 max-[860px]:grid-cols-1">
            {threatCards.map((c) => (
              <Card key={c.title} icon={c.icon} title={c.title}>
                <p>{c.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>What QuantZen does</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            A security layer that wraps what you already run.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            QuantZen™ sits at your API boundary and protects requests and
            responses with post-quantum cryptography in flight. Your
            applications, API gateways, and backend systems stay exactly as
            they are.
          </p>
          <ArchDiagram nodes={homeArchNodes} />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>Why teams choose QuantZen</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Post-quantum security, without the rebuild.
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-4.5 max-[860px]:grid-cols-1">
            {valueProps.map((v) => (
              <Card key={v.title} icon={v.icon} title={v.title}>
                <p>{v.body}</p>
              </Card>
            ))}
          </div>
          <CtaBand
            className="mt-10"
            heading="See QuantZen protect a live API call."
            body="Walk through interception, post-quantum signing, verification, and audit against your own request formats."
            ctaLabel="Request a demo →"
          />
        </Wrap>
      </Section>
    </>
  );
}