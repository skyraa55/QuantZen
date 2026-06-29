import { useEffect, useRef } from "react";

/**
 * StarfieldBackground — QuantZen Hero Section
 * ─────────────────────────────────────────────
 * Usage:
 *   <div style={{ position:"relative", width:"100%", height:"100vh" }}>
 *     <StarfieldBackground />
 *     <div style={{ position:"relative", zIndex:1 }}>
 *       ...your hero content...
 *     </div>
 *   </div>
 *
 * Parent must have:  position:relative  +  a defined height.
 */
export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = () => canvas.width;
    const H = () => canvas.height;
    const ox = () => W() * 0.18;
    const oy = () => H() * 0.42;

    const N_RAYS      = 26;
    const PTS_PER_RAY = 18;
    const GAP         = () => Math.hypot(W(), H()) * 0.072;

    let rays = [], activeRay = null, path = [];
    let atom = null;
    let tick = 0, revealT = 0, dimT = 1;
    let cyclePhase = "reveal", cycleTimer = 0;
    let rafId = null;

    // ── Resize ──────────────────────────────────────────────────────────
    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    // ── Build dense path along active ray ───────────────────────────────
    function buildPath() {
      path = [];
      if (!activeRay) return;
      const rad  = activeRay.rad;
      const maxD = PTS_PER_RAY * GAP() * 1.05;
      for (let d = GAP() * 0.1; d < maxD; d += 1.8) {
        const x = ox() + Math.cos(rad) * d;
        const y = oy() + Math.sin(rad) * d;
        if (x < -80 || x > W() + 80 || y < -80 || y > H() + 80) break;
        path.push({ x, y });
      }
    }

    // ── Init / setup ─────────────────────────────────────────────────────
    function init() {
      rays = []; activeRay = null; path = [];
      atom = null; tick = 0; revealT = 0; dimT = 1;
      cyclePhase = "reveal"; cycleTimer = 0;

      const g = GAP();
      for (let i = 0; i < N_RAYS; i++) {
        const frac  = i / (N_RAYS - 1);
        const angle = -168 + frac * 336;
        const rad   = (angle * Math.PI) / 180;
        const pts   = [];
        for (let j = 1; j <= PTS_PER_RAY; j++) {
          const d = j * g;
          const x = ox() + Math.cos(rad) * d;
          const y = oy() + Math.sin(rad) * d;
          if (x < -80 || x > W() + 80 || y < -80 || y > H() + 80) continue;
          const node = j % 5 === 0;
          pts.push({
            x, y, node, d,
            r:    node ? 3.2 : 1.4,
            base: node ? 0.55 : 0.22,
            jit:  Math.random() * Math.PI * 2,
          });
        }
        if (pts.length > 2) rays.push({ angle, rad, pts });
      }

      // Pick ray closest to 14° (gentle upper-right diagonal)
      const sorted = [...rays].sort((a, b) => a.angle - b.angle);
      let best = 0, bestDiff = 999;
      sorted.forEach((r, i) => {
        const diff = Math.abs(r.angle - 14);
        if (diff < bestDiff) { bestDiff = diff; best = i; }
      });
      activeRay = sorted[best];
      buildPath();
    }

    // ── Travelling atom ──────────────────────────────────────────────────
    function spawnAtom() {
      atom = { t: 0, r: 3, alpha: 0, orbit: 0, speed: 0.0018 };
    }

    function updateAtom() {
      if (!atom) return;
      atom.orbit += 0.038;
      atom.t      = Math.min(1, atom.t + atom.speed);
      const t     = atom.t;

      atom.r = 4 + 18 * Math.pow(t, 0.5); // grows 4 → 22

      if (t < 0.08)      atom.alpha = t / 0.08;
      else if (t < 0.85) atom.alpha = 1.0;
      else               atom.alpha = (1 - t) / 0.15;

      if (atom.t >= 1) atom = null;
    }

    function atomPos() {
      if (!atom || !path.length) return null;
      const raw = atom.t * (path.length - 1);
      const idx = Math.min(path.length - 1, Math.floor(raw));
      const nxt = Math.min(path.length - 1, idx + 1);
      const f   = raw - idx;
      return {
        x: path[idx].x + (path[nxt].x - path[idx].x) * f,
        y: path[idx].y + (path[nxt].y - path[idx].y) * f,
      };
    }

    // ── Draw: origin glow ────────────────────────────────────────────────
    function drawOriginGlow() {
      const g = ctx.createRadialGradient(ox(), oy(), 0, ox(), oy(), W() * 0.30);
      g.addColorStop(0,    `rgba(18,65,115,${revealT * 0.28})`);
      g.addColorStop(0.45, `rgba(6,22,55,${revealT * 0.10})`);
      g.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.save();
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(ox(), oy(), W() * 0.30, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // ── Draw: full lattice ───────────────────────────────────────────────
    function drawLattice() {
      rays.forEach((ray) => {
        const isActive = ray === activeRay;

        // connecting line
        if (ray.pts.length > 1) {
          ctx.save();
          ctx.globalAlpha  = revealT * (isActive ? 0.13 : 0.08) * dimT;
          ctx.strokeStyle  = isActive ? "#a0d8f0" : "#3a7a9c";
          ctx.lineWidth    = isActive ? 0.7 : 0.4;
          ctx.beginPath();
          ctx.moveTo(ox(), oy());
          ray.pts.forEach((p) => ctx.lineTo(p.x, p.y));
          ctx.stroke();
          ctx.restore();
        }

        // dots
        ray.pts.forEach((p) => {
          const pulse = 1 + 0.07 * Math.sin(tick * 0.028 + p.jit);
          const col   = isActive ? "#ffffff" : "#6ab4d8";
          const rMult = isActive ? 2.2 : 1.0;
          const aMult = isActive ? 1.6 : 1.0;
          const r     = p.r * rMult * pulse;
          const al    = revealT * Math.min(1, p.base * aMult) * dimT;

          ctx.save();
          if (p.node || isActive) {
            ctx.globalAlpha = al * 0.25;
            ctx.beginPath(); ctx.arc(p.x, p.y, r * 2.0, 0, Math.PI * 2);
            ctx.strokeStyle = col; ctx.lineWidth = 0.55; ctx.stroke();

            ctx.globalAlpha = al * 0.48;
            ctx.beginPath(); ctx.arc(p.x, p.y, r * 1.32, 0, Math.PI * 2);
            ctx.strokeStyle = col; ctx.lineWidth = 0.50; ctx.stroke();
          }
          ctx.globalAlpha = al;
          ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = col;
          ctx.fill();
          ctx.restore();
        });
      });
    }

    // ── Draw: travelling quantum atom ────────────────────────────────────
    function drawAtom() {
      if (!atom) return;
      const pos = atomPos();
      if (!pos) return;
      const { x, y } = pos;
      const { r, alpha, orbit } = atom;

      ctx.save();

      // ambient halo
      const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 4.5);
      halo.addColorStop(0,   `rgba(180,225,255,${alpha * 0.20})`);
      halo.addColorStop(0.5, `rgba(100,180,230,${alpha * 0.07})`);
      halo.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = halo;
      ctx.beginPath(); ctx.arc(x, y, r * 4.5, 0, Math.PI * 2); ctx.fill();

      // orbit ellipse 1
      ctx.save();
      ctx.translate(x, y); ctx.rotate(orbit * 0.35); ctx.scale(1, 0.36);
      ctx.beginPath(); ctx.arc(0, 0, r * 1.9, 0, Math.PI * 2);
      ctx.restore();
      ctx.strokeStyle = `rgba(200,235,255,${alpha * 0.42})`;
      ctx.lineWidth   = Math.max(0.7, r * 0.055);
      ctx.stroke();

      // orbit ellipse 2
      ctx.save();
      ctx.translate(x, y); ctx.rotate(orbit * 0.35 + Math.PI * 0.55); ctx.scale(0.36, 1);
      ctx.beginPath(); ctx.arc(0, 0, r * 1.9, 0, Math.PI * 2);
      ctx.restore();
      ctx.strokeStyle = `rgba(160,215,245,${alpha * 0.30})`;
      ctx.lineWidth   = Math.max(0.6, r * 0.048);
      ctx.stroke();

      // inner crisp ring
      ctx.beginPath(); ctx.arc(x, y, r * 1.10, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(235,248,255,${alpha * 0.70})`;
      ctx.lineWidth   = Math.max(0.6, r * 0.06);
      ctx.stroke();

      // nucleus gradient
      const nuc = ctx.createRadialGradient(x, y, 0, x, y, r * 0.9);
      nuc.addColorStop(0,    `rgba(255,255,255,${alpha})`);
      nuc.addColorStop(0.30, `rgba(200,238,255,${alpha})`);
      nuc.addColorStop(0.70, `rgba(120,190,235,${alpha * 0.90})`);
      nuc.addColorStop(1,    `rgba(60,130,200,${alpha * 0.65})`);
      ctx.beginPath(); ctx.arc(x, y, r * 0.88, 0, Math.PI * 2);
      ctx.fillStyle = nuc; ctx.fill();

      // specular highlight
      ctx.save();
      ctx.globalAlpha = alpha * 0.80;
      const sp = ctx.createRadialGradient(
        x - r * 0.3, y - r * 0.3, 0,
        x - r * 0.3, y - r * 0.3, r * 0.45
      );
      sp.addColorStop(0, "rgba(255,255,255,0.95)");
      sp.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = sp;
      ctx.beginPath();
      ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.45, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // electron dot on orbit
      const ea = orbit * 1.15;
      const ex = x + Math.cos(ea) * r * 1.9;
      const ey = y + Math.sin(ea) * r * 1.9 * 0.36;
      ctx.beginPath();
      ctx.arc(ex, ey, Math.max(1.2, r * 0.10), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,252,255,${alpha * 0.90})`;
      ctx.fill();

      ctx.restore();
    }

    // ── Cycle state machine ──────────────────────────────────────────────
    function stepCycle() {
      cycleTimer++;
      switch (cyclePhase) {
        case "reveal":
          revealT = Math.min(1, revealT + 0.010);
          dimT    = 1;
          if (revealT >= 1 && cycleTimer > 90) { cyclePhase = "idle"; cycleTimer = 0; }
          break;

        case "idle":
          dimT = Math.min(1, dimT + 0.02);
          if (cycleTimer > 150) { cyclePhase = "travel"; cycleTimer = 0; spawnAtom(); }
          break;

        case "travel":
          dimT = Math.max(0.25, dimT - 0.015);
          updateAtom();
          if (!atom) { cyclePhase = "fadeout"; cycleTimer = 0; }
          break;

        case "fadeout":
          dimT = Math.min(1, dimT + 0.018);
          if (dimT >= 1 && cycleTimer > 40) { cyclePhase = "idle"; cycleTimer = 0; }
          break;
      }
    }

    // ── Main loop ────────────────────────────────────────────────────────
    function frame() {
      tick++;
      ctx.fillStyle = "#070b14";
      ctx.fillRect(0, 0, W(), H());
      stepCycle();
      drawOriginGlow();
      drawLattice();
      if (cyclePhase === "travel" || cyclePhase === "fadeout") drawAtom();
      rafId = requestAnimationFrame(frame);
    }

    // ── Bootstrap ────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize();
    init();
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        display:       "block",
        pointerEvents: "none",
        zIndex:        0,
      }}
    />
  );
}