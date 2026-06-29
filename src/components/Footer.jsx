import { Link } from "react-router-dom";
import Wrap from "./Wrap";

export default function Footer() {
  return (
    <footer className="bg-ink2 pb-10 pt-[54px]">
      <Wrap>
        <div className="flex flex-wrap items-start justify-between gap-7.5">
          <div>
            <div className="flex items-center gap-[11px] cursor-pointer font-disp text-[19px] font-semibold tracking-[-0.01em]">
              <span className="qmark relative grid h-[30px] w-[30px] place-items-center rounded-lg border-[1.5px] border-blue bg-[linear-gradient(150deg,rgba(92,157,255,.18),transparent)]"></span>
              <span>
                QuantZen<span className="align-super text-[10px] text-muted">™</span>
              </span>
            </div>
            <p className="mt-3.5 max-w-[320px] text-[13px] text-faint">
              Patent-pending post-quantum protection for API-driven digital
              communication networks.
            </p>
          </div>

          <div className="flex flex-wrap gap-[50px]">
            <div>
              <h5 className="mb-3 font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
                Platform
              </h5>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/product">
                Product
              </Link>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/security">
                Security
              </Link>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/deployment">
                Deployment
              </Link>
            </div>
            <div>
              <h5 className="mb-3 font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
                Company
              </h5>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/use-cases">
                Use Cases
              </Link>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/about">
                About
              </Link>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/press">
                Press
              </Link>
            </div>
            <div>
              <h5 className="mb-3 font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
                Engage
              </h5>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/contact">
                Request a demo
              </Link>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/contact">
                Pilot programs
              </Link>
              <Link className="block cursor-pointer py-1 text-sm text-muted hover:text-blue" to="/contact">
                Partnerships
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-5.5 font-mono text-[12.5px] text-faint">
          <span>© 2026 QuantZen™. All rights reserved.</span>
          <span>Patent Pending · Indian Patent Application Filed</span>
        </div>
      </Wrap>
    </footer>
  );
}
