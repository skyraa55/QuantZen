import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const tealIcon = {
  color: "var(--color-teal)",
  borderColor: "rgba(47,214,182,.3)",
  background: "rgba(47,214,182,.06)",
};

const deploymentModels = [
  {
    title: "On-premise",
    body: "Deploy entirely within your own data centers for full sovereignty over keys and traffic.",
  },
  {
    title: "Private cloud",
    body: "Run within a dedicated private-cloud tenancy alongside your existing services.",
  },
  {
    title: "Hybrid cloud",
    body: "Protect traffic spanning on-premise cores and public-cloud services with one consistent policy.",
  },
  {
    title: "Containerized",
    body: "Ship as a container image and run beside your services as a sidecar or gateway.",
  },
  {
    title: "Kubernetes",
    body: "Deploy as a sidecar or ingress component, scaled and managed natively by your cluster.",
  },
];

const pipelineSteps = [
  {
    num: "01",
    title: "Assessment",
    body: "Map gateways, protocols, and payload formats; identify the highest-value traffic to protect first.",
  },
  {
    num: "02",
    title: "Integration",
    body: "Place the QuantZen layer at the boundary and connect to your existing gateway — no app changes.",
  },
  {
    num: "03",
    title: "Testing",
    body: "Validate interception, signing, verification, and audit against real request formats and SLAs.",
  },
  {
    num: "04",
    title: "Pilot",
    body: "Run a ring-fenced subset of live traffic, measuring performance and operational impact.",
  },
  {
    num: "05",
    title: "Production",
    body: "Expand coverage by policy across domains and routes at your pace.",
  },
];

const guarantees = [
  {
    title: "No application changes",
    body: "Your codebase, schemas, and UI logic are never modified.",
  },
  {
    title: "No API gateway changes",
    body: "Your gateway configuration and routing remain intact.",
  },
  {
    title: "Minimal operational disruption",
    body: "Incremental, reversible rollout with measurable checkpoints.",
  },
];

export default function Deployment() {
  return (
    <>
      <PageMeta title="Deployment" />

      <Section>
        <Wrap>
          <Eyebrow>Deployment</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Runs where your workloads run.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            QuantZen deploys into your environment of choice and operates as
            a stateless layer at the API boundary. No data leaves your trust
            perimeter unless you choose it to.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4.5 max-[860px]:grid-cols-1">
            {deploymentModels.map((m) => (
              <Card key={m.title} title={m.title}>
                <p>{m.body}</p>
              </Card>
            ))}
            <div className="rounded-[14px] border border-line2 bg-gradient-to-b from-panel to-ink2 p-6.5">
              <h3 className="mb-2 text-lg text-blue">One policy, everywhere</h3>
              <p className="text-[14.5px] text-muted">
                The same protection and audit policy applies across every
                deployment model.
              </p>
            </div>
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Eyebrow>The path to production</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            A measured rollout, not a flag day.
          </h2>
          <div className="mt-7.5 flex flex-wrap">
            {pipelineSteps.map((s) => (
              <div
                key={s.num}
                className="relative -mr-px min-w-[150px] flex-1 rounded-xl border border-line bg-panel px-4.5 py-5.5"
              >
                <div className="font-mono text-[13px] text-blue">{s.num}</div>
                <h4 className="my-2 text-base">{s.title}</h4>
                <p className="text-[13px] text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4.5 max-[860px]:grid-cols-1">
            {guarantees.map((g) => (
              <Card key={g.title} icon="✓" iconStyle={tealIcon} title={g.title}>
                <p>{g.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>
    </>
  );
}
