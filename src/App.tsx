import { useEffect, useMemo, useRef, useState } from "react";
import {
  Search, Heart, Copy, Check, Sparkles, Waves, Zap, Droplets,
  Layers, Magnet, Shapes, Type, MoonStar, Shuffle, Pause, Play,
  X, ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, FlaskConical,
  Clock, Gauge, Lightbulb, Terminal, MousePointerClick, Quote, Star,
} from "lucide-react";
import { ANIMATIONS, CATEGORIES, CATEGORY_MAP, type AnimationIdea, type CategoryId } from "./data/animations";
import AnimationDemo from "./components/AnimationDemo";

const CAT_ICONS: Record<CategoryId, typeof Waves> = {
  plynne: Waves, sprezyste: Zap, twarde: Zap, mokre: Droplets,
  rozlewajace: Layers, magnetyczne: Magnet, morfujace: Shapes,
  tekstowe: Type, klimat: MoonStar,
};

function useLocalFavs() {
  const [favs, setFavs] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem("gx-favs") || "[]"); }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem("gx-favs", JSON.stringify(favs)); }, [favs]);
  return [favs, setFavs] as const;
}

export default function App() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [diff, setDiff] = useState<string>("all");
  const [favOnly, setFavOnly] = useState(false);
  const [favs, setFavs] = useLocalFavs();
  const [selected, setSelected] = useState<AnimationIdea | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  };

  const copyText = async (text: string, label: string, id?: number) => {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
    if (id !== undefined) { setCopiedId(id); setTimeout(() => setCopiedId(null), 1600); }
    showToast(label);
  };

  const toggleFav = (id: number) => {
    setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  };

  const filtered = useMemo(() => {
    return ANIMATIONS.filter((a) => {
      if (cat !== "all" && a.category !== cat) return false;
      if (diff !== "all" && a.difficulty !== diff) return false;
      if (favOnly && !favs.includes(a.id)) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${a.title} ${a.tagline} ${a.description} ${a.prompt} ${a.tech.join(" ")} ${CATEGORY_MAP[a.category].label}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [cat, diff, favOnly, favs, query]);

  const randomPick = () => {
    const pool = filtered.length ? filtered : ANIMATIONS;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSelected(pick);
  };

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // keyboard nav in modal
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const step = (dir: number) => {
    if (!selected) return;
    const idx = ANIMATIONS.findIndex((a) => a.id === selected.id);
    const next = ANIMATIONS[(idx + dir + ANIMATIONS.length) % ANIMATIONS.length];
    setSelected(next);
  };

  const scrollToGrid = () => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className={paused ? "anim-paused min-h-screen" : "min-h-screen"}>
      {/* SVG FILTERS */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <filter id="liquid">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.024" numOctaves="2" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="26" />
          </filter>
        </defs>
      </svg>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-[#06060c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lime-300 via-cyan-400 to-fuchsia-500 font-display text-sm font-black text-black shadow-lg shadow-cyan-500/30 transition-transform group-hover:rotate-12">
              ✦
            </span>
            <span className="text-left leading-none">
              <span className="font-display block text-[13px] font-extrabold tracking-wider">VIBEANIMATIONS</span>
              <span className="text-[11px] text-slate-400">62 animacje do stron www</span>
            </span>
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <button onClick={() => { setFavOnly(!favOnly); scrollToGrid(); }} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${favOnly ? "border-rose-400/60 bg-rose-500/15 text-rose-300" : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25"}`}>
              <Heart size={15} className={favOnly ? "fill-rose-400 text-rose-400" : ""} /> Ulubione
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">{favs.length}</span>
            </button>
            <button onClick={() => setPaused(!paused)} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-white/25">
              {paused ? <Play size={15} /> : <Pause size={15} />} {paused ? "Wznów" : "Pauza"}
            </button>
            <button onClick={randomPick} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-300 to-cyan-400 px-4 py-2 text-sm font-extrabold text-black shadow-lg shadow-lime-500/25 transition hover:scale-105">
              <Shuffle size={15} /> Losuj pomysł
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={() => setPaused(!paused)} className="rounded-full border border-white/10 bg-white/5 p-2.5">{paused ? <Play size={16} /> : <Pause size={16} />}</button>
            <button onClick={randomPick} className="rounded-full bg-gradient-to-r from-lime-300 to-cyan-400 p-2.5 text-black"><Shuffle size={16} /></button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-grid-bg relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <div className="gx-hero-blob h-72 w-72 left-[8%] top-24" style={{ background: "#22d3ee" }} />
        <div className="gx-hero-blob h-80 w-80 right-[6%] top-40" style={{ background: "#d946ef", animationDelay: "-4s" }} />
        <div className="gx-hero-blob h-60 w-60 left-[42%] top-64" style={{ background: "#a3e635", animationDelay: "-8s", opacity: 0.35 }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal visible flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-lime-300/30 bg-lime-300/10 px-3.5 py-1.5 text-xs font-bold text-lime-300">
              <Sparkles size={13} /> 62 GOTOWE POMYSŁY
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-bold text-cyan-300">
              <Waves size={13} /> PŁYNNE • MOKRE • TWARDE
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-fuchsia-300/30 bg-fuchsia-500/10 px-3.5 py-1.5 text-xs font-bold text-fuchsia-300 sm:flex">
              <Terminal size={13} /> OPISY GOTOWE DO PROMPTU
            </span>
          </div>

          <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.2rem)] font-black leading-[1.02] tracking-tight">
            VIBE{" "}
            <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">ANIMATIONS</span>
            <br />
            <span className="text-slate-400">ruch, który ożywia strony</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Płynne, sprężyste, twarde, mokre i rozlewające się animacje — każda z żywym podglądem
            oraz opisem <span className="font-semibold text-slate-200">2–3 zdań gotowym do wklejenia do promptu</span>.
            Skopiuj pomysł, wklej do AI i patrz, jak strona ożywa.
          </p>

          {/* search */}
          <div className="mt-7 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4 backdrop-blur transition focus-within:border-cyan-300/60 focus-within:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <Search size={19} className="shrink-0 text-cyan-300" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && scrollToGrid()}
                placeholder="Szukaj: gooey, glitch, loader, magnetyczny…" className="w-full bg-transparent text-[15px] text-slate-100 placeholder:text-slate-500 focus:outline-none" />
              {query && <button onClick={() => setQuery("")} className="text-slate-500 hover:text-white"><X size={16} /></button>}
            </label>
            <button onClick={scrollToGrid} className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-display text-sm font-extrabold text-black transition hover:bg-lime-300">
              PRZEGLĄDAJ <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* stats */}
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { n: "62", l: "animacji", c: "text-lime-300" },
              { n: "9", l: "kategorii", c: "text-cyan-300" },
              { n: "100%", l: "podglądów live", c: "text-fuchsia-300" },
              { n: "1 klik", l: "kopiowanie promptu", c: "text-amber-300" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
                <div className={`font-display text-2xl font-black ${s.c}`}>{s.n}</div>
                <div className="text-xs text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* marquee strip */}
        <div className="relative mt-12 -rotate-1 border-y border-white/10 bg-gradient-to-r from-lime-300 via-cyan-300 to-fuchsia-300 py-2.5">
          <div className="page-marquee-track gap-0 font-display text-[13px] font-extrabold tracking-widest text-black">
            {[0, 1].map((k) => (
              <span key={k} className="whitespace-nowrap">
                &nbsp;✦ BLOB MORPH ✦ GOOEY MENU ✦ GLITCH ✦ AURORA ✦ MAGNETIC BUTTON ✦ INK BLEED ✦ TYPEWRITER ✦ RIPPLE ✦ HOLOGRAM ✦ SYNTWAVE GRID ✦ ŻELKOWY PRZYCISK ✦ TUNEL PORTALU ✦ ZORZA ✦ KONFETTI
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div ref={gridRef} className="sticky top-[61px] z-30 border-b border-white/10 bg-[#06060c]/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button onClick={() => setCat("all")} className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-bold transition ${cat === "all" ? "bg-white text-black" : "border border-white/12 bg-white/5 text-slate-300 hover:border-white/30"}`}>
              Wszystkie · {ANIMATIONS.length}
            </button>
            {CATEGORIES.map((c) => {
              const Icon = CAT_ICONS[c.id];
              const count = ANIMATIONS.filter((a) => a.category === c.id).length;
              const active = cat === c.id;
              return (
                <button key={c.id} onClick={() => setCat(active ? "all" : c.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold transition ${active ? `bg-gradient-to-r ${c.gradient} text-black shadow-lg` : "border border-white/12 bg-white/5 text-slate-300 hover:border-white/30"}`}>
                  <Icon size={14} /> {c.short} <span className={active ? "opacity-70" : "text-slate-500"}>{count}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {(["all", "Łatwy", "Średni", "Zaawansowany"] as const).map((d) => (
              <button key={d} onClick={() => setDiff(d)} className={`rounded-full px-3 py-1 text-xs font-semibold transition ${diff === d ? "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/50" : "text-slate-500 hover:text-slate-200"}`}>
                {d === "all" ? "Każdy poziom" : d}
              </button>
            ))}
            <span className="mx-1 hidden h-4 w-px bg-white/10 sm:block" />
            <button onClick={() => setFavOnly(!favOnly)} className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${favOnly ? "bg-rose-500/20 text-rose-200 ring-1 ring-rose-400/50" : "text-slate-500 hover:text-slate-200"}`}>
              <Heart size={12} className={favOnly ? "fill-rose-400 text-rose-400" : ""} /> Tylko ulubione ({favs.length})
            </button>
            <span className="ml-auto text-xs text-slate-500">
              Znaleziono: <span className="font-bold text-slate-200">{filtered.length}</span>
            </span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-white/15 py-24 text-center">
            <FlaskConical size={40} className="text-slate-600" />
            <p className="font-display text-lg font-bold text-slate-300">Brak wyników dla tych filtrów</p>
            <p className="text-sm text-slate-500">Spróbuj innej frazy albo wyczyść filtry.</p>
            <button onClick={() => { setQuery(""); setCat("all"); setDiff("all"); setFavOnly(false); }} className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-lime-300">Wyczyść filtry</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((a, idx) => {
              const c = CATEGORY_MAP[a.category];
              const Icon = CAT_ICONS[a.category];
              const isFav = favs.includes(a.id);
              const copied = copiedId === a.id;
              return (
                <article key={a.id} style={{ animationDelay: `${Math.min(idx % 9, 8) * 60}ms` }}
                  className="card-enter group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur transition hover:border-white/25 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]">
                  {/* preview */}
                  <div className="relative h-[188px] cursor-pointer overflow-hidden" onClick={() => setSelected(a)}>
                    <AnimationDemo demo={a.demo} colors={a.colors} />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5">
                      <span className={`flex items-center gap-1 rounded-full bg-gradient-to-r ${c.gradient} px-2.5 py-1 text-[11px] font-extrabold text-black shadow`}>
                        <Icon size={11} /> {c.short}
                      </span>
                      <span className="rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] font-bold text-slate-300 backdrop-blur">#{String(a.id).padStart(2, "0")}</span>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); toggleFav(a.id); }}
                      className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur transition ${isFav ? "bg-rose-500/90 text-white" : "bg-black/50 text-slate-300 hover:bg-black/80 hover:text-rose-300"}`}>
                      <Heart size={15} className={isFav ? "fill-white" : ""} />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-1.5 bg-gradient-to-t from-black/80 to-transparent pb-2.5 pt-8 text-xs font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                      <MousePointerClick size={13} /> Kliknij, by powiększyć
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <h3 className="font-display text-[16px] font-extrabold leading-snug">{a.title}</h3>
                      <p className="mt-1 text-[13px] font-medium text-cyan-200/80">{a.tagline}</p>
                    </div>
                    <div className="relative rounded-xl border border-white/8 bg-black/30 p-3.5">
                      <Quote size={13} className="absolute -top-2 left-3 bg-[#0a0a12] px-0.5 text-lime-300" />
                      <p className="line-clamp-3 text-[13px] leading-relaxed text-slate-300">{a.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${a.difficulty === "Łatwy" ? "bg-emerald-400/15 text-emerald-300" : a.difficulty === "Średni" ? "bg-amber-400/15 text-amber-300" : "bg-rose-400/15 text-rose-300"}`}>
                        <Gauge size={11} /> {a.difficulty}
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-white/6 px-2.5 py-1 text-[11px] font-bold text-slate-400"><Clock size={11} /> {a.duration}</span>
                      {a.tech.slice(0, 2).map((t) => (
                        <span key={t} className="rounded-full bg-white/6 px-2.5 py-1 text-[11px] font-semibold text-slate-500">{t}</span>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-2 pt-1">
                      <button onClick={() => copyText(a.prompt, `Skopiowano prompt: ${a.title}`, a.id)}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-extrabold transition ${copied ? "bg-emerald-400 text-black" : "bg-gradient-to-r from-lime-300 to-cyan-400 text-black hover:brightness-110"}`}>
                        {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Skopiowano!" : "Kopiuj prompt"}
                      </button>
                      <button onClick={() => setSelected(a)} className="flex items-center justify-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-[13px] font-bold text-slate-200 transition hover:border-white/30 hover:bg-white/10">
                        Opis <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* HOW TO USE */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal">
            <span className="font-display text-xs font-extrabold tracking-[0.3em] text-lime-300">JAK TEGO UŻYWAĆ?</span>
            <h2 className="font-display mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Od pomysłu do animacji w <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">30 sekund</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Każdy opis w galerii jest napisany tak, by działał jako samodzielny prompt.
              Wystarczy skopiować i wkleić do ulubionego narzędzia AI albo przekazać deweloperowi.
            </p>
            <button onClick={randomPick} className="mt-6 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-6 py-3.5 font-display text-sm font-extrabold shadow-lg shadow-fuchsia-500/30 transition hover:scale-105">
              <Star size={16} /> Wylosuj inspirację
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { i: "01", t: "Wybierz klimat", d: "Płynny jak woda, twardy jak glitch, a może mokry gooey? Filtruj po 9 kategoriach i poziomie trudności.", icon: Sparkles },
              { i: "02", t: "Obejrzyj na żywo", d: "Każda karta ma działający podgląd. Kliknij, by zobaczyć animację w dużym formacie i poznać szczegóły.", icon: MousePointerClick },
              { i: "03", t: "Skopiuj jednym klikiem", d: "Przycisk Kopiuj prompt daje gotową instrukcję z timingiem, krzywymi i kolorami — wklejasz i działa.", icon: Copy },
              { i: "04", t: "Dostosuj i łącz", d: "Łącz efekty: gooey + magnetyzm, glitch + ziarno filmu. Najlepsze strony biorą 2–3 animacje i trzymają je konsekwentnie.", icon: Layers },
            ].map((s) => (
              <div key={s.i} className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <s.icon size={20} className="text-cyan-300" />
                  <span className="font-display text-xs font-black text-slate-600">{s.i}</span>
                </div>
                <h3 className="font-display mt-3 text-[15px] font-extrabold">{s.t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-lime-300 via-cyan-400 to-fuchsia-500 text-sm font-black text-black">✦</span>
            <div className="text-sm"><span className="font-display font-extrabold">VIBEANIMATIONS</span>
              <span className="text-slate-500"> · {ANIMATIONS.length} animacje · {CATEGORIES.length} kategorii</span></div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600">
            Wszystkie podglądy renderowane są na żywo w CSS/JS. Zbudowane z miłości do ruchu, cieczy i światła.
          </p>
        </div>
      </footer>

      {/* MODAL */}
      {selected && (
        <div className="backdrop-in fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setSelected(null)}>
          <div className="modal-in relative max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/15 bg-[#0b0b14] sm:rounded-3xl" onClick={(e) => e.stopPropagation()}>
            {/* modal preview */}
            <div className="relative h-64 overflow-hidden sm:h-72">
              <AnimationDemo demo={selected.demo} colors={selected.colors} large />
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-black/60 p-2.5 text-white backdrop-blur transition hover:bg-black/90 hover:rotate-90"><X size={18} /></button>
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className={`rounded-full bg-gradient-to-r ${CATEGORY_MAP[selected.category].gradient} px-3 py-1.5 text-xs font-extrabold text-black`}>
                  {CATEGORY_MAP[selected.category].label}
                </span>
                <span className="rounded-full bg-black/60 px-3 py-1.5 font-mono text-xs font-bold text-slate-300 backdrop-blur">#{String(selected.id).padStart(2, "0")} / {ANIMATIONS.length}</span>
              </div>
              <button onClick={() => step(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur transition hover:bg-black/85"><ChevronLeft size={20} /></button>
              <button onClick={() => step(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur transition hover:bg-black/85"><ChevronRight size={20} /></button>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-black sm:text-[28px]">{selected.title}</h2>
                  <p className="mt-1 text-sm font-medium text-cyan-200/80">{selected.tagline}</p>
                </div>
                <button onClick={() => toggleFav(selected.id)} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${favs.includes(selected.id) ? "border-rose-400/60 bg-rose-500/15 text-rose-300" : "border-white/12 text-slate-300 hover:border-white/30"}`}>
                  <Heart size={15} className={favs.includes(selected.id) ? "fill-rose-400 text-rose-400" : ""} />
                  {favs.includes(selected.id) ? "Ulubione" : "Dodaj"}
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[selected.difficulty, selected.duration, ...selected.tech].map((t) => (
                  <span key={t} className="rounded-full bg-white/6 px-3 py-1.5 text-xs font-semibold text-slate-300">{t}</span>
                ))}
                <span className="rounded-full bg-white/6 px-3 py-1.5 text-xs font-semibold text-slate-400">Zastosowanie: {selected.useCase}</span>
              </div>

              {/* description = prompt-ready */}
              <div className="mt-5 rounded-2xl border border-lime-300/25 bg-lime-300/[0.05] p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-display text-xs font-extrabold tracking-widest text-lime-300"><Quote size={13} /> OPIS-PROMPT · WKLEJ DO AI</span>
                  <button onClick={() => copyText(selected.description, "Skopiowano opis-prompt")} className="flex items-center gap-1.5 rounded-full bg-lime-300/15 px-3 py-1.5 text-xs font-bold text-lime-200 transition hover:bg-lime-300/30">
                    <Copy size={13} /> Kopiuj opis
                  </button>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-200">{selected.description}</p>
              </div>

              {/* technical prompt */}
              <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5">
                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-300"><Terminal size={13} /> prompt_techniczny.txt</span>
                  <button onClick={() => copyText(selected.prompt, `Skopiowano prompt: ${selected.title}`, selected.id)}
                    className="flex items-center gap-1.5 rounded-full bg-cyan-400/15 px-3 py-1.5 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/30">
                    {copiedId === selected.id ? <Check size={13} /> : <Copy size={13} />} {copiedId === selected.id ? "Skopiowano!" : "Kopiuj prompt"}
                  </button>
                </div>
                <p className="max-h-44 overflow-y-auto p-4 font-mono text-[12.5px] leading-relaxed text-slate-300">{selected.prompt}</p>
              </div>

              <div className="mt-3 flex gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-4">
                <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-300" />
                <p className="text-[13px] leading-relaxed text-amber-100/90"><span className="font-bold">Pro tip: </span>{selected.tip}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <button onClick={() => copyText(`${selected.title}\n\n${selected.description}\n\nSzczegóły techniczne:\n${selected.prompt}`, "Skopiowano kompletny pakiet", selected.id)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-cyan-400 px-5 py-3 text-sm font-extrabold text-black transition hover:brightness-110 sm:flex-none sm:px-8">
                  <Copy size={16} /> Kopiuj wszystko
                </button>
                <button onClick={() => step(1)} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-bold transition hover:bg-white/10 sm:flex-none">
                  Następny pomysł <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="toast-in fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-lime-300/40 bg-[#0c1206]/95 py-3 pl-4 pr-5 shadow-[0_10px_40px_rgba(163,230,53,0.3)] backdrop-blur">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-300 text-black"><Check size={15} strokeWidth={3} /></span>
          <span className="max-w-[70vw] truncate text-sm font-bold text-lime-100">{toast}</span>
        </div>
      )}
    </div>
  );
}
