import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import Wrap from "../components/Wrap";
import Section from "../components/Section";
import { useCases } from "../data/useCases";

export default function UseCases() {
  return (
    <>
      <PageMeta title="Use Cases" />

      <Section>
        <Wrap>
          <Eyebrow>Where QuantZen applies</Eyebrow>
          <h2 className="mt-3.5 max-w-[760px] text-[34px] max-[860px]:text-[27px]">
            Built for the infrastructure the economy depends on.
          </h2>
          <p className="mt-4.5 max-w-[680px] text-lg text-muted">
            Anywhere critical data crosses an API, QuantZen protects it
            against tampering today and quantum decryption tomorrow. Each
            environment, the same drop-in model.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4.5 max-[860px]:grid-cols-1">
            {useCases.map((u) => (
              <Card key={u.title} className="[&_p]:mb-0.5 [&_p]:text-[13.8px]">
                <h3 className="mb-2 flex items-center gap-2.5 text-lg">
                  {u.title}{" "}
                  <span className="rounded-[5px] border border-line2 px-[7px] py-0.5 font-mono text-[11px] text-blue">
                    {u.tag}
                  </span>
                </h3>
                <div className="mt-3.5 mb-1 font-mono text-[11px] tracking-[0.1em] text-faint uppercase">
                  The problem
                </div>
                <p>{u.problem}</p>
                <div className="mt-3.5 mb-1 font-mono text-[11px] tracking-[0.1em] text-faint uppercase">
                  Why quantum matters
                </div>
                <p>{u.whyQuantum}</p>
                <div className="mt-3.5 mb-1 font-mono text-[11px] tracking-[0.1em] text-faint uppercase">
                  How QuantZen helps
                </div>
                <p>{u.howWeHelp}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>
    </>
  );
}
