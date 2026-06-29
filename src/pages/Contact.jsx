import { useState } from "react";
import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const contactItems = [
  {
    title: "Product demonstrations",
    body: "See interception, post-quantum protection, verification, and audit on a live request.",
  },
  {
    title: "Partnership inquiries",
    body: "Integrate QuantZen with gateways, platforms, and security ecosystems.",
  },
  {
    title: "Pilot programs",
    body: "Run a ring-fenced proof of concept against your own traffic and SLAs.",
  },
  {
    title: "Technical workshops",
    body: "Deep-dive sessions on post-quantum migration and cryptographic agility with your engineers.",
  },
  {
    title: "Enterprise deployments",
    body: "Plan a phased rollout across on-premise, cloud, and hybrid environments.",
  },
];

const fieldInputClass =
  "w-full rounded-[9px] border border-line2 bg-ink px-[13px] py-2.75 font-body text-sm text-text outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(92,157,255,.12)]";

export default function Contact() {
  const [form, setForm] = useState({
    organization: "",
    email: "",
    interest: "A product demonstration",
    context: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    // No backend is wired up yet — connect this handler to your CRM or
    // email service to actually receive submissions.
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta title="Contact" />

      <Section>
        <Wrap>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Let&rsquo;s protect your API traffic — before the quantum clock
            runs out.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            Whether you&rsquo;re securing a payment network, a telecom
            gateway, or an enterprise API estate, our team will meet you
            where your architecture is.
          </p>

          <div className="mt-7.5 grid grid-cols-[1.1fr_1fr] gap-10 max-[860px]:grid-cols-1">
            <div>
              {contactItems.map((item) => (
                <div className="border-b border-line py-4.5" key={item.title}>
                  <h4 className="mb-1 text-base">{item.title}</h4>
                  <p className="text-sm text-muted">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-line2 bg-gradient-to-b from-panel2 to-ink2 p-7.5">
              <h3 className="mb-1.5 text-[19px]">Start a conversation</h3>
              <p className="mb-5 text-sm text-muted">
                For banks, telecom operators, enterprises, and technology
                partners.
              </p>

              <div className="mb-3.5">
                <label className="mb-1.5 block font-mono text-[12.5px] text-muted">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={form.organization}
                  onChange={handleChange("organization")}
                  className={fieldInputClass}
                />
              </div>
              <div className="mb-3.5">
                <label className="mb-1.5 block font-mono text-[12.5px] text-muted">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@organization.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={fieldInputClass}
                />
              </div>
              <div className="mb-3.5">
                <label className="mb-1.5 block font-mono text-[12.5px] text-muted">
                  I&rsquo;m interested in
                </label>
                <select
                  value={form.interest}
                  onChange={handleChange("interest")}
                  className={fieldInputClass}
                >
                  <option>A product demonstration</option>
                  <option>A pilot program</option>
                  <option>A partnership</option>
                  <option>A technical workshop</option>
                  <option>An enterprise deployment</option>
                </select>
              </div>
              <div className="mb-3.5">
                <label className="mb-1.5 block font-mono text-[12.5px] text-muted">
                  Context
                </label>
                <textarea
                  rows={3}
                  placeholder="Your gateway, protocols, and what you'd like to protect"
                  value={form.context}
                  onChange={handleChange("context")}
                  className={fieldInputClass}
                />
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full justify-center"
              >
                Request engagement →
              </Button>

              {submitted && (
                <p className="mt-4 font-mono text-xs text-teal">
                  Thank you. Connect this form to your CRM or email to
                  receive submissions.
                </p>
              )}

              <p className="mt-4 font-mono text-xs text-faint">
                Prefer email? Reach the team at hello@quantzen.example
              </p>
            </div>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
