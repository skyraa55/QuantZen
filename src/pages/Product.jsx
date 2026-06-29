import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import ArchDiagram from "../components/ArchDiagram";
import CtaBand from "../components/CtaBand";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const productArchNodes = [
  { title: "Application", detail: "client / mobile / service" },
  {
    title: "QuantZen™ Security Layer",
    detail: "SDK · interception · crypto · verify · policy · audit",
    highlight: true,
  },
  { title: "API Gateway", detail: "existing gateway" },
  { title: "Backend Systems", detail: "core unchanged" },
];

const gatewayChips = [
  "Kong",
  "NGINX",
  "Envoy",
  "Apigee",
  "AWS API Gateway",
  "Azure API Management",
];

const components = [
  {
    num: "/ 01",
    title: "API interception layer",
    body: "Transparently intercepts outbound and inbound API calls — including POST, PUT, and PATCH — and applies protection without blocking application flow. Selection is policy-driven, so unprotected endpoints pass through cleanly.",
  },
  {
    num: "/ 02",
    title: "Endpoint SDK / middleware",
    body: "A lightweight library for Node.js, Python, and Java, or a sidecar/gateway proxy. Embeds at the boundary and operates without modifying the host application.",
  },
  {
    num: "/ 03",
    title: "Post-quantum authentication",
    body: "Binds authenticity and integrity to every request with ML-DSA (Dilithium) digital signatures, so tampered or forged requests are rejected before processing.",
  },
  {
    num: "/ 04",
    title: "Post-quantum key establishment",
    body: "Establishes session secrets with ML-KEM (Kyber) key encapsulation, with ephemeral keys held only in volatile memory and destroyed at session end.",
  },
  {
    num: "/ 05",
    title: "Payload integrity verification",
    body: "Authenticated encryption (ChaCha20-Poly1305 / AES-256-GCM) protects the payload itself, detecting any modification in transit — not just on the transport hop.",
  },
  {
    num: "/ 06",
    title: "Verification engine",
    body: "Server-side middleware decrypts, verifies signatures, checks replay protections, and forwards clean plaintext to backend logic — or rejects and logs the request.",
  },
  {
    num: "/ 07",
    title: "Policy engine",
    body: "Centralized control over enabled algorithms, protected domains, threat responses, and audit destinations — distributed across the estate as data, not code.",
  },
  {
    num: "/ 08",
    title: "Audit framework",
    body: "Generates a tamper-evident record for every protected request — timestamp, source, algorithm, verification result, and threat outcome — for regulatory evidence.",
  },
];

export default function Product() {
  return (
    <>
      <PageMeta title="Product" />

      <Section>
        <Wrap>
          <Eyebrow>The platform</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            QuantZen™ — quantum-safe middleware for API communication.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            QuantZen is a modular security layer that intercepts API traffic,
            applies post-quantum confidentiality and authenticity, verifies
            every request before it reaches your systems, and records an
            immutable audit trail — all without changing the systems it
            protects.
          </p>
          <ArchDiagram nodes={productArchNodes} chips={gatewayChips} spaced />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>Platform components</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Eight components, one cohesive layer.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4.5 max-[860px]:grid-cols-1">
            {components.map((c) => (
              <Card key={c.num}>
                <div className="font-mono text-[13px] text-faint">{c.num}</div>
                <h3 className="mb-2 text-lg">{c.title}</h3>
                <p>{c.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>Integration</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Built to sit beside your stack, not inside it.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            QuantZen integrates with the API gateways and infrastructure you
            already operate. It runs as a stateless layer at the boundary, so
            traffic continues to flow through your existing gateway to
            unchanged backend services. Adoption is incremental — protect one
            domain or route first, then expand by policy.
          </p>
          <CtaBand
            className="mt-10"
            heading="Map QuantZen to your architecture."
            body="We'll review your gateway, protocols, and payload formats and show exactly where the layer fits."
            ctaLabel="Talk to our engineers →"
          />
        </Wrap>
      </Section>
    </>
  );
}
