import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const valueMissionCards = [
  {
    title: "Vision",
    body: "A digital economy whose critical communications remain confidential and verifiable for their entire lifetime — regardless of advances in computing.",
  },
  {
    title: "Mission",
    body: "To make post-quantum protection deployable on the infrastructure organizations already run, removing cost, disruption, and risk as barriers to migration.",
  },
  {
    title: "Technology focus",
    body: "Standardized post-quantum cryptography applied at the API layer: interception, authentication, key establishment, verification, agility, and immutable audit.",
  },
  {
    title: "Long-term objective",
    body: "To become the trust layer for quantum-resilient digital communications — the dependable boundary through which critical API traffic is protected.",
  },
];

const disciplines = [
  {
    title: "Post-quantum cryptography",
    body: "Applying NIST-standardized lattice-based algorithms to real production traffic, with the agility to adopt what comes next.",
  },
  {
    title: "API security",
    body: "Protecting the interface layer where modern systems actually exchange value, identity, and instruction.",
  },
  {
    title: "Critical infrastructure protection",
    body: "Hardening the financial, telecom, and government systems whose continuity the economy depends on.",
  },
  {
    title: "Enterprise cybersecurity",
    body: "Meeting the deployment, governance, auditability, and compliance demands of regulated organizations.",
  },
];

export default function About() {
  return (
    <>
      <PageMeta title="About" />

      <Section>
        <Wrap>
          <Eyebrow>About QuantZen</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            A trust layer for quantum-resilient communication.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            QuantZen™ is an enterprise cybersecurity company building the
            cryptographic infrastructure that keeps API-driven systems
            trustworthy through the quantum transition and beyond.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4.5 max-[860px]:grid-cols-1">
            {valueMissionCards.map((c) => (
              <Card
                key={c.title}
                title={c.title}
                className="[&_h3]:font-mono [&_h3]:text-sm [&_h3]:font-medium [&_h3]:tracking-[0.04em] [&_h3]:text-blue [&_h3]:uppercase [&_p]:text-[15px] [&_p]:text-[#cdd5e8]"
              >
                <p>{c.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>What we focus on</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Four disciplines, one purpose.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4.5 max-[860px]:grid-cols-1">
            {disciplines.map((d) => (
              <Card key={d.title} title={d.title}>
                <p>{d.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>
    </>
  );
}
