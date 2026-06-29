import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

export default function Press() {
  return (
    <>
      <PageMeta title="Press" />

      <Section>
        <Wrap>
          <Eyebrow>Press release</Eyebrow>
          <div className="mt-7 rounded-2xl border border-line bg-ink2 p-10 [&_p:not([class])]:mb-4 [&_p:not([class])]:text-[15.5px] [&_p:not([class])]:text-[#c9d2e6]">
            <div className="mb-4.5 font-mono text-[12.5px] tracking-[0.05em] text-faint">
              FOR IMMEDIATE RELEASE
            </div>
            <h2 className="mb-2 max-w-[780px] text-[28px]">
              QuantZen™ Announces Patent-Pending Post-Quantum Security
              Platform for API-Driven Infrastructure
            </h2>
            <p className="mb-6.5 max-w-[760px] text-[17px] text-muted">
              Company files an Indian patent application for a middleware
              approach that protects API communications against quantum-era
              threats — without replacing existing infrastructure.
            </p>
            <p>
              QuantZen™ today announced the launch of its patent-pending
              platform for post-quantum cryptographic protection of
              API-driven digital communication networks, and confirmed the
              filing of an Indian patent application covering its core
              technology.
            </p>
            <p>
              As organizations across banking, payments, telecommunications,
              and government move critical operations onto API-driven
              infrastructure, the cryptography securing those communications
              faces an approaching threat. Public-key algorithms such as RSA
              and elliptic-curve cryptography — the foundation of
              today&rsquo;s transport security — are vulnerable to future
              quantum computers. Adversaries are already understood to be
              conducting &ldquo;harvest now, decrypt later&rdquo; operations,
              capturing encrypted traffic today to decrypt once quantum
              capability matures.
            </p>
            <div className="my-6 border-l-2 border-blue py-1.5 pl-5 font-disp text-lg text-text italic">
              &ldquo;Securing the post-quantum transition cannot require
              every institution to rebuild its infrastructure. QuantZen
              protects the API traffic organizations already run, today, and
              gives them the agility to evolve as standards advance.&rdquo;
            </div>
            <p>
              The QuantZen platform operates as a middleware security layer
              at the API boundary. It intercepts API requests, applies
              NIST-standardized post-quantum key establishment and digital
              signatures, verifies authenticity and integrity before requests
              reach backend systems, and records a tamper-evident audit trail
              — all without modifying applications or API gateways.
            </p>
            <p>
              The company&rsquo;s patent-pending approach emphasizes four
              capabilities its filing identifies as distinguishing:
              quantum-aware threat detection, ephemeral key handling with no
              persistent storage, hybrid integration of post-quantum
              cryptography with quantum key distribution, and immutable audit
              logging for regulated industries.
            </p>
            <p>
              QuantZen&rsquo;s mission is to secure the world&rsquo;s digital
              communications against quantum threats by making post-quantum
              protection deployable without disruption — establishing a
              durable trust layer for the API-driven systems that critical
              industries depend on.
            </p>
            <p>
              QuantZen is engaging with banks, telecom operators,
              enterprises, and technology partners on demonstrations and
              pilot programs. Organizations interested in participating can
              contact the company through its website.
            </p>
            <p className="mt-4 font-mono text-xs text-faint">
              Patent Pending. Indian patent application filed. This release
              describes the company&rsquo;s technology and product
              direction.
            </p>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
