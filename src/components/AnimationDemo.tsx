import { useMemo } from "react";

interface Props {
  demo: string;
  colors: string[];
  large?: boolean;
}

function rand(seed: number, min: number, max: number) {
  const x = Math.sin(seed * 999.7) * 10000;
  return min + ((x - Math.floor(x)) * (max - min));
}

export default function AnimationDemo({ demo, colors }: Props) {
  const c1 = colors[0] || "#22d3ee";
  const c2 = colors[1] || "#8b5cf6";
  const c3 = colors[2] || c1;

  const bubbles = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    left: `${rand(i + 1, 4, 92)}%`,
    size: rand(i + 1, 6, 30),
    dur: rand(i + 1, 4, 8),
    delay: -rand(i + 1, 0, 8),
    sway: rand(i + 1, 8, 22),
  })), []);

  const confetti = useMemo(() => Array.from({ length: 22 }, (_, i) => ({
    left: `${rand(i + 40, 2, 98)}%`,
    delay: -rand(i + 40, 0, 3),
    dur: rand(i + 40, 1.8, 3.4),
    color: [c1, c2, c3, "#fbbf24", "#a3e635"][i % 5],
    w: rand(i + 40, 5, 9),
    rot: rand(i + 40, 0, 360),
  })), [c1, c2, c3]);

  const dots = useMemo(() => {
    const arr: { x: number; y: number }[] = [];
    for (let y = 0; y < 4; y++) for (let x = 0; x < 8; x++) arr.push({ x, y });
    return arr;
  }, []);

  const dnaDots = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);
  const trailDots = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);
  const rings = useMemo(() => Array.from({ length: 7 }, (_, i) => i), []);
  const stars = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    left: `${rand(i + 90, 0, 100)}%`,
    top: `${rand(i + 130, 0, 100)}%`,
    delay: -rand(i + 90, 0, 3),
    size: rand(i + 90, 1, 2.5),
  })), []);

  switch (demo) {
    case "blob-morph":
      return (
        <div className="demo-stage">
          <div className="gx-blob" style={{ background: `linear-gradient(135deg, ${c1}, ${c2}, ${c3})` }} />
          <div className="gx-blob-orbit" style={{ borderColor: c1 }}><span style={{ background: c3 }} /></div>
        </div>
      );
    case "lava-gradient":
      return (
        <div className="demo-stage">
          <div className="gx-lava" style={{ background: `linear-gradient(120deg, ${c1}, ${c2}, ${c3}, ${c1})` }} />
          <div className="gx-lava-noise" />
        </div>
      );
    case "page-wipe":
      return (
        <div className="demo-stage">
          <div className="gx-wipe-txt">NOWA STRONA</div>
          {[c1, c2, c3].map((c, i) => (
            <div key={i} className="gx-wipe-bar" style={{ background: c, animationDelay: `${i * 0.18}s` }} />
          ))}
        </div>
      );
    case "parallax-cards":
      return (
        <div className="demo-stage">
          {[0, 1, 2].map((i) => (
            <div key={i} className="gx-pcard" style={{ animationDelay: `${i * 0.7}s`, background: `linear-gradient(135deg, ${[c1, c2, c3][i]}55, rgba(255,255,255,0.08))`, borderColor: `${[c1, c2, c3][i]}66` }}>
              <div className="gx-pcard-line" /><div className="gx-pcard-line short" />
            </div>
          ))}
        </div>
      );
    case "cursor-aura":
      return (
        <div className="demo-stage">
          <div className="gx-aura-grid" />
          <div className="gx-aura" style={{ background: `radial-gradient(circle, ${c1}66, transparent 70%)` }} />
          <div className="gx-aura sm" style={{ background: `radial-gradient(circle, ${c2}88, transparent 70%)` }} />
          <div className="gx-aura-dot" style={{ background: c1 }} />
        </div>
      );
    case "wave-lines":
      return (
        <div className="demo-stage">
          <svg className="gx-waves" viewBox="0 0 400 160" preserveAspectRatio="none">
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} className={`gx-wave-p w${i}`} d="M-100,80 Q-50,40 0,80 T100,80 T200,80 T300,80 T400,80 T500,80" fill="none" stroke={i % 2 ? c2 : c1} strokeWidth="1.5" opacity={0.25 + i * 0.12} />
            ))}
          </svg>
          <div className="gx-waves-label">SCROLL = PRZYSPIESZENIE</div>
        </div>
      );
    case "image-reveal":
      return (
        <div className="demo-stage">
          <div className="gx-reveal-frame">
            <div className="gx-reveal-img" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
              <div className="gx-reveal-sun" /><div className="gx-reveal-mtn" /><div className="gx-reveal-mtn m2" />
            </div>
            <div className="gx-reveal-bar" style={{ background: c1 }} />
          </div>
        </div>
      );
    case "marquee":
      return (
        <div className="demo-stage">
          <div className="gx-marquee"><div className="gx-marquee-track">
            {[0, 1].map((k) => (
              <span key={k} className="gx-marquee-chunk">PIĘKNO ✦ RUCH ✦ PŁYNNOŚĆ ✦ DESIGN ✦&nbsp;</span>
            ))}
          </div></div>
          <div className="gx-marquee rev"><div className="gx-marquee-track">
            {[0, 1].map((k) => (
              <span key={k} className="gx-marquee-chunk outline">VIBEANIMATIONS • 62 POMYSŁY •&nbsp;</span>
            ))}
          </div></div>
        </div>
      );
    case "jelly-button":
      return (
        <div className="demo-stage">
          <button className="gx-jelly" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>KLIKNIJ MNIE</button>
          <div className="gx-jelly-shadow" />
        </div>
      );
    case "bounce-cards":
      return (
        <div className="demo-stage">
          <div className="gx-bounce-wrap">
            <div className="gx-bounce-ball" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
            <div className="gx-bounce-shadow" />
          </div>
          <div className="gx-bounce-floor" />
        </div>
      );
    case "gum-scale":
      return (
        <div className="demo-stage">
          <div className="gx-gum-ring" />
          <div className="gx-gum" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>◉</div>
          <div className="gx-gum-cursor">➤</div>
        </div>
      );
    case "accordion":
      return (
        <div className="demo-stage">
          <div className="gx-acc">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`gx-acc-row ${i === 1 ? "open" : ""}`} style={{ borderColor: `${c1}44` }}>
                <div className="gx-acc-head"><span /> <em style={{ background: c1 }} /></div>
                <div className="gx-acc-body"><i /></div>
              </div>
            ))}
          </div>
        </div>
      );
    case "bouncy-loader":
      return (
        <div className="demo-stage">
          <div className="gx-bdots">
            {[c1, c2, c3].map((c, i) => (
              <div key={i} className="gx-bdot-wrap" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="gx-bdot" style={{ background: c, animationDelay: `${i * 0.12}s` }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "glitch":
      return (
        <div className="demo-stage dark">
          <div className="gx-glitch" data-text="GLITCH">GLITCH</div>
          <div className="gx-glitch-sub">SYGNAŁ ZAKŁÓCONY_</div>
        </div>
      );
    case "hard-steps":
      return (
        <div className="demo-stage">
          <div className="gx-step-track">
            <div className="gx-step-box" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>8</div>
          </div>
          <div className="gx-step-ticks">{Array.from({ length: 9 }).map((_, i) => <i key={i} />)}</div>
        </div>
      );
    case "brutal-shake":
      return (
        <div className="demo-stage">
          <div className="gx-shake-field">
            <div className="gx-shake-box">nieprawidłowy@email</div>
            <div className="gx-shake-msg">✕ Błędny adres e-mail</div>
          </div>
        </div>
      );
    case "flicker":
      return (
        <div className="demo-stage dark">
          <div className="gx-neon">OTW<span className="bad">A</span>RTE</div>
          <div className="gx-neon-sub">— bar nocny —</div>
        </div>
      );
    case "matrix":
      return (
        <div className="demo-stage dark">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="gx-mcol" style={{ left: `${4 + i * 9.5}%`, animationDuration: `${rand(i, 2.2, 4.5)}s`, animationDelay: `${-rand(i + 5, 0, 4)}s` }}>
              アカサタナ01ハマヤラワ
            </div>
          ))}
          <div className="gx-mhead">MATRIX</div>
        </div>
      );
    case "flip-3d":
      return (
        <div className="demo-stage">
          <div className="gx-flip"><div className="gx-flip-inner">
            <div className="gx-flip-face front" style={{ background: `linear-gradient(135deg, ${c1}, #7c2d12)` }}>PRZÓD</div>
            <div className="gx-flip-face back" style={{ background: `linear-gradient(135deg, ${c2}, #1e1b4b)` }}>TYŁ ✦</div>
          </div></div>
        </div>
      );
    case "goo-menu":
      return (
        <div className="demo-stage">
          <div className="gx-goo" style={{ filter: "url(#goo)" }}>
            <div className="gx-goo-main" style={{ background: c1 }} />
            {[{ x: 0, y: -52 }, { x: 48, y: -16 }, { x: 30, y: 44 }, { x: -42, y: 30 }].map((p, i) => (
              <div key={i} className="gx-goo-sat" style={{ background: i % 2 ? c2 : c1, ["--tx" as string]: `${p.x}px`, ["--ty" as string]: `${p.y}px`, animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
          <div className="gx-goo-plus">+</div>
        </div>
      );
    case "drops-loader":
      return (
        <div className="demo-stage">
          <div className="gx-drops" style={{ filter: "url(#goo)" }}>
            <div className="gx-drop-top" style={{ background: c1 }} />
            <div className="gx-drop-fall" style={{ background: c1 }} />
            <div className="gx-drop-pool" style={{ background: c1 }} />
          </div>
        </div>
      );
    case "slime-button":
      return (
        <div className="demo-stage">
          <button className="gx-slime-btn"><span>NAJEDŹ NA MNIE</span>
            <div className="gx-slime-blob" style={{ background: `linear-gradient(180deg, ${c1}, ${c2})` }} />
          </button>
        </div>
      );
    case "goo-attract":
      return (
        <div className="demo-stage">
          <div className="gx-attract" style={{ filter: "url(#goo)" }}>
            <div className="gx-att-a" style={{ background: c1 }} />
            <div className="gx-att-b" style={{ background: c2 }} />
          </div>
        </div>
      );
    case "bubbles":
      return (
        <div className="demo-stage">
          <div className="gx-water" style={{ background: `linear-gradient(180deg, #082f49, #0c4a6e)` }} />
          {bubbles.map((b, i) => (
            <span key={i} className="gx-bubble" style={{ left: b.left, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s`, ["--sway" as string]: `${b.sway}px` }} />
          ))}
        </div>
      );
    case "wet-stain":
      return (
        <div className="demo-stage">
          <div className="gx-stain" style={{ background: `radial-gradient(circle at 40% 35%, ${c1}, ${c2} 60%, transparent 72%)` }} />
          <div className="gx-stain-txt">MOKRY<br />KLIMAT</div>
        </div>
      );
    case "ink-bleed":
      return (
        <div className="demo-stage light">
          <div className="gx-ink-core" style={{ background: c1 }} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="gx-ink-dot" style={{ background: i % 2 ? c2 : c1, ["--ang" as string]: `${i * 60}deg`, animationDelay: `${0.3 + i * 0.08}s` }} />
          ))}
          <div className="gx-ink-ring" style={{ borderColor: c2 }} />
        </div>
      );
    case "gradient-border":
      return (
        <div className="demo-stage">
          <div className="gx-gborder"><div className="gx-gborder-inner">
            <div className="gx-gborder-badge" style={{ background: c1 }}>PRO</div>
            <div className="gx-gborder-t">Premium Card</div>
            <div className="gx-gborder-d">Światło krąży po ramce</div>
          </div></div>
        </div>
      );
    case "ripple":
      return (
        <div className="demo-stage">
          <button className="gx-ripple-btn" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
            KLIKNIJ
            <span className="gx-ripple r1" /><span className="gx-ripple r2" /><span className="gx-ripple r3" />
          </button>
        </div>
      );
    case "curtain":
      return (
        <div className="demo-stage">
          <div className="gx-curt-content">✦ TREŚĆ ✦</div>
          <div className="gx-curt-l" style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }} />
          <div className="gx-curt-r" style={{ background: `linear-gradient(-90deg, ${c1}, ${c2})` }} />
        </div>
      );
    case "circle-grow":
      return (
        <div className="demo-stage">
          <div className="gx-grow-card">
            <div className="gx-grow-circle" style={{ background: c1 }} />
            <div className="gx-grow-txt">HOVER<br />SPOT</div>
            <div className="gx-grow-cur" />
          </div>
        </div>
      );
    case "spray-reveal":
      return (
        <div className="demo-stage dark">
          <div className="gx-spray" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
            <span>GRAFFITI</span>
          </div>
          <div className="gx-spray-can">◉</div>
        </div>
      );
    case "puddle":
      return (
        <div className="demo-stage">
          <div className="gx-pud-trail"><i style={{ background: c1 }} /><i style={{ background: c2 }} /><i style={{ background: c1 }} /></div>
          <div className="gx-puddle" style={{ background: `radial-gradient(ellipse, ${c1}, ${c2} 70%, transparent 75%)` }} />
          <div className="gx-pud-cur">➤</div>
        </div>
      );
    case "magnetic-button":
      return (
        <div className="demo-stage">
          <div className="gx-mag-zone">
            <div className="gx-mag-ring" style={{ borderColor: `${c1}66` }} />
            <button className="gx-mag-btn" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>MAGNES</button>
            <div className="gx-mag-cur" />
          </div>
        </div>
      );
    case "tilt-3d":
      return (
        <div className="demo-stage">
          <div className="gx-tilt">
            <div className="gx-tilt-shine" />
            <div className="gx-tilt-chip" /><div className="gx-tilt-lines"><i /><i /><i /></div>
            <div className="gx-tilt-num">3D TILT</div>
          </div>
        </div>
      );
    case "spotlight":
      return (
        <div className="demo-stage dark">
          <div className="gx-spot-txt">UKRYTY SKARB<br />✦ ZNALEZIONY ✦</div>
          <div className="gx-spot-dark" />
          <div className="gx-spot-hole" />
        </div>
      );
    case "eyes":
      return (
        <div className="demo-stage">
          {[0, 1].map((i) => (
            <div key={i} className="gx-eye"><div className="gx-pupil"><i /></div></div>
          ))}
        </div>
      );
    case "magnetic-links":
      return (
        <div className="demo-stage">
          <nav className="gx-nav">
            <div className="gx-nav-pill" style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }} />
            {["Start", "Oferta", "Cennik", "Kontakt"].map((l, i) => (
              <span key={l} className={`gx-nav-link ${i === 1 ? "on" : ""}`}>{l}</span>
            ))}
          </nav>
        </div>
      );
    case "trail":
      return (
        <div className="demo-stage dark">
          {trailDots.map((i) => (
            <span key={i} className="gx-trail-dot" style={{ animationDelay: `${-i * 0.12}s`, background: `hsl(${185 + i * 14}, 95%, 65%)`, width: 14 - i, height: 14 - i }} />
          ))}
        </div>
      );
    case "svg-morph":
      return (
        <div className="demo-stage">
          <div className="gx-svgmorph" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
          <div className="gx-svgmorph-lbl">■ → ★ → ●</div>
        </div>
      );
    case "icon-morph":
      return (
        <div className="demo-stage">
          <div className="gx-burger"><span /><span /><span /></div>
        </div>
      );
    case "text-morph":
      return (
        <div className="demo-stage dark">
          <span className="gx-mword w1" style={{ color: c1 }}>KREATYWNOŚĆ</span>
          <span className="gx-mword w2" style={{ color: c2 }}>PŁYNNOŚĆ</span>
        </div>
      );
    case "shape-button":
      return (
        <div className="demo-stage">
          <div className="gx-shapebtn" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
            <span className="ic">▶</span><span className="tx">Odtwórz wideo</span>
          </div>
        </div>
      );
    case "kinetic-type":
      return (
        <div className="demo-stage dark" style={{ flexDirection: "column", gap: 2 }}>
          <div className="gx-krow k1"><span>RUSZAJ SIĘ • RUSZAJ SIĘ •&nbsp;</span><span>RUSZAJ SIĘ • RUSZAJ SIĘ •&nbsp;</span></div>
          <div className="gx-krow k2"><span className="ol">KINETYK KINETYK&nbsp;</span><span className="ol">KINETYK KINETYK&nbsp;</span></div>
          <div className="gx-krow k3"><span>TYPOGRAFIA ŻYJE •&nbsp;</span><span>TYPOGRAFIA ŻYJE •&nbsp;</span></div>
        </div>
      );
    case "stagger-letters":
      return (
        <div className="demo-stage dark">
          <div className="gx-stagger">{"ANIMACJE".split("").map((l, i) => (
            <span key={i} className="gx-sletter" style={{ animationDelay: `${i * 0.09}s`, color: i % 2 ? c2 : c1 }}>{l}</span>
          ))}</div>
        </div>
      );
    case "typewriter":
      return (
        <div className="demo-stage dark">
          <div className="gx-term">
            <div className="gx-term-bar"><i /><i /><i /></div>
            <div className="gx-term-txt">const magic = <em style={{ color: c1 }}>await create()</em>;<span className="gx-caret" /></div>
          </div>
        </div>
      );
    case "wave-text":
      return (
        <div className="demo-stage dark">
          <div className="gx-wtext">{"PŁYNNA FALA".split("").map((l, i) => (
            <span key={i} className="gx-wletter" style={{ animationDelay: `${i * 0.08}s`, color: i % 2 ? c2 : c1 }}>{l === " " ? " " : l}</span>
          ))}</div>
        </div>
      );
    case "shine-text":
      return (
        <div className="demo-stage dark">
          <div className="gx-shine">PREMIUM</div>
          <div className="gx-shine-sub">jakość, która błyszczy</div>
        </div>
      );
    case "scatter-letters":
      return (
        <div className="demo-stage dark">
          <div className="gx-scatter">{"WYBUCH!".split("").map((l, i) => (
            <span key={i} className="gx-scletter" style={{ ["--dx" as string]: `${rand(i, -46, 46)}px`, ["--dy" as string]: `${rand(i + 9, -34, 22)}px`, ["--rr" as string]: `${rand(i + 4, -50, 50)}deg`, animationDelay: `${i * 0.03}s`, color: i % 2 ? c2 : c1 }}>{l}</span>
          ))}</div>
        </div>
      );
    case "aurora":
      return (
        <div className="demo-stage dark">
          {stars.map((s, i) => <i key={i} className="gx-star" style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />)}
          <div className="gx-aurora a1" style={{ background: `linear-gradient(180deg, transparent, ${c1}88, transparent)` }} />
          <div className="gx-aurora a2" style={{ background: `linear-gradient(180deg, transparent, ${c2}88, transparent)` }} />
          <div className="gx-aurora a3" style={{ background: `linear-gradient(180deg, transparent, ${c3}77, transparent)` }} />
          <div className="gx-aurora-mtn" />
        </div>
      );
    case "confetti":
      return (
        <div className="demo-stage">
          {confetti.map((p, i) => (
            <span key={i} className="gx-confetti" style={{ left: p.left, background: p.color, width: p.w, height: p.w * 1.5, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }} />
          ))}
          <div className="gx-confetti-pop" style={{ borderColor: c1 }}>BOOM!</div>
        </div>
      );
    case "fog":
      return (
        <div className="demo-stage dark">
          <div className="gx-fog-moon" />
          <div className="gx-fog f1" /><div className="gx-fog f2" />
        </div>
      );
    case "holo-shine":
      return (
        <div className="demo-stage">
          <div className="gx-holo">
            <div className="gx-holo-foil" />
            <div className="gx-holo-grid" />
            <div className="gx-holo-star">✦ HOLO ✦</div>
          </div>
        </div>
      );
    case "neon-border":
      return (
        <div className="demo-stage dark">
          <div className="gx-nitro">
            <span className="gx-comet cA" style={{ background: c1, boxShadow: `0 0 12px ${c1}, 0 0 30px ${c1}` }} />
            <span className="gx-comet cB" style={{ background: c2, boxShadow: `0 0 12px ${c2}, 0 0 30px ${c2}` }} />
            <div className="gx-nitro-core">NITRO</div>
          </div>
        </div>
      );
    case "synth-grid":
      return (
        <div className="demo-stage dark">
          <div className="gx-sun" />
          <div className="gx-grid-floor"><div className="gx-grid-lines" /></div>
          <div className="gx-scan" />
        </div>
      );
    case "grain":
      return (
        <div className="demo-stage">
          <div className="gx-grain-photo" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
            <span>ANALOG</span>
          </div>
          <div className="gx-grain-noise" />
        </div>
      );
    case "chrome":
      return (
        <div className="demo-stage dark">
          <div className="gx-chrome" />
          <div className="gx-chrome-gloss" />
        </div>
      );
    case "tunnel":
      return (
        <div className="demo-stage dark">
          {rings.map((i) => (
            <span key={i} className="gx-ring" style={{ borderColor: i % 2 ? c2 : c1, animationDelay: `${-i * 0.43}s` }} />
          ))}
          <div className="gx-core" style={{ background: `radial-gradient(circle, #fff, ${c1} 40%, transparent 70%)` }} />
        </div>
      );
    case "dots-grid":
      return (
        <div className="demo-stage">
          <div className="gx-dots">
            {dots.map((d, i) => (
              <span key={i} className="gx-dot" style={{ animationDelay: `${(d.x + d.y) * 0.12}s` }} />
            ))}
          </div>
        </div>
      );
    case "fire":
      return (
        <div className="demo-stage dark">
          <div className="gx-fire" style={{ filter: "url(#goo)" }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="gx-flame" style={{ background: [c1, c2, c3, c2, c1][i], animationDelay: `${-i * 0.22}s`, left: `${18 + i * 13}%` }} />
            ))}
          </div>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="gx-spark" style={{ left: `${rand(i + 60, 25, 75)}%`, animationDelay: `${-rand(i + 60, 0, 1.6)}s`, animationDuration: `${rand(i + 60, 1, 1.8)}s` }} />
          ))}
          <div className="gx-log" />
        </div>
      );
    case "caustics":
      return (
        <div className="demo-stage">
          <div className="gx-sea" style={{ background: `linear-gradient(180deg, #082f49, #0c4a6e)` }} />
          <div className="gx-caus c1" /><div className="gx-caus c2" />
        </div>
      );
    case "dna":
      return (
        <div className="demo-stage dark">
          <div className="gx-dna">
            {dnaDots.map((i) => (
              <span key={"a" + i} className="gx-dna-dot a" style={{ background: c1, left: 12 + i * 15, animationDelay: `${-i * 0.18}s` }} />
            ))}
            {dnaDots.map((i) => (
              <span key={"b" + i} className="gx-dna-dot b" style={{ background: c2, left: 12 + i * 15, animationDelay: `${-i * 0.18}s` }} />
            ))}
          </div>
        </div>
      );
    case "orbit":
      return (
        <div className="demo-stage dark">
          <div className="gx-sun-c" style={{ background: `radial-gradient(circle, #fef9c3, ${c1} 55%, transparent 72%)` }} />
          {[0, 1, 2].map((i) => (
            <div key={i} className={`gx-orbit o${i}`}>
              <span className="gx-planet" style={{ background: [c1, c2, c3][i], boxShadow: `0 0 10px ${[c1, c2, c3][i]}` }} />
            </div>
          ))}
        </div>
      );
    default:
      return <div className="demo-stage"><div className="gx-blob" style={{ background: c1 }} /></div>;
  }
}
