import { useState, useEffect, useRef } from "react";
import {
    Menu, X, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, Users, FileText,
    MessageSquare, LayoutDashboard, BarChart3, Lock, KeyRound, Upload, Bot,
    Activity, Bell, ClipboardList, Database, Server, Atom, Hexagon,
    CheckCircle2, Globe, Mail, Send
} from "lucide-react";
import { Link } from "react-router-dom"

/*
  PUBLIC FOLDER: put these files in /public
    logo.png (already recolored), image1, image2, image3, background
  Change the extensions below if yours differ (.jpg / .png / .webp).

  PALETTE
  midnight #0D090D | plum #6B4A6C | lilac #B898B6 | mist #EFE4EC
  peony #C89BC0 | orchid #8A5F88 | mauve #7D557A
*/
const IMAGES = ["/image1", "/image2", "/image3"]; // no extension needed: .png .jpg .jpeg .webp are tried automatically
const EXTS = [".png", ".jpg", ".jpeg", ".webp"];
const BACKGROUND = "/background1.png";
const LOGO = "/logo.png";

const NAV = [
    ["Home", "home"], ["Objectives", "objectives"], ["AI", "ai"], ["Contact", "contact"]
];

const orbitCards = [
    { icon: Sparkles, title: "AI Task Summary", text: "Long updates, one clear line" },
    { icon: Activity, title: "Live Activity Feed", text: "No refresh needed" },
    { icon: ShieldCheck, title: "Role-Based Access", text: "Admins and members" }
];

const slides = [
    ["Plan every project", "Create, assign and track tasks in one shared workspace."],
    ["Ask your documents", "Upload files and get answers from their content."],
    ["Stay in the loop", "Chat, notifications and activity update in real time."]
];

const objectives = [
    [ClipboardList, "Centralized tasks", "One platform for all organizational tasks."],
    [Users, "Create, assign, track", "Members create, assign, update and track tasks."],
    [Bot, "AI assistance", "Task summaries and document help powered by AI."],
    [MessageSquare, "Real-time talk", "Communication and notifications as things happen."],
    [KeyRound, "Secure access", "Authentication with role-based permissions."],
    [BarChart3, "Team analytics", "Monitor activity through analytics and audit logs."],
    [Database, "Protected data", "Secure storage and access to organization data."]
];

const glass = "rounded-3xl border border-white/50 bg-white/45 backdrop-blur-xl shadow-lg";

function SlideImage({ base, alt }) {
    const [i, setI] = useState(0);
    if (i >= EXTS.length) {
        return <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#EFE4EC]/60">Image not found. Put {base.slice(1)}.png (or .jpg / .webp) inside your /public folder.</div>;
    }
    return <img src={base + EXTS[i]} alt={alt} onError={() => setI(i + 1)} className="h-full w-full object-cover" />;
}

function Reveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const [seen, setSeen] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setSeen(true); o.disconnect(); }
        }, { threshold: 0.12 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ${seen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
        >
            {children}
        </div>
    );
}

function Heading({ kicker, title, light }) {
    return (
        <Reveal className="mb-12 max-w-2xl">
            <p className={`mb-3 flex items-center gap-2 text-sm font-medium ${light ? "text-[#C89BC0]" : "text-[#6B4A6C]"}`}>
                <span className="h-2 w-2 rounded-full bg-[#C89BC0]" />{kicker}
            </p>
            <h2 className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl ${light ? "text-[#EFE4EC]" : "text-[#0D090D]"}`}>
                {title}
            </h2>
        </Reveal>
    );
}

export default function LandingPage() {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            let cur = "home";
            NAV.forEach(([, id]) => {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 140) cur = id;
            });
            setActive(cur);
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4500);
        return () => clearInterval(t);
    }, []);

    return (
        <div
            className="relative min-h-screen w-full text-[#0D090D]"
            style={{
                backgroundImage: `url(${BACKGROUND}), linear-gradient(135deg,#B898B6,#EFE4EC 50%,#8A5F88)`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}
        >
            <style>{`
                html{scroll-behavior:smooth}
                @keyframes orbit{to{transform:rotate(360deg)}}
                @keyframes counter{to{transform:rotate(-360deg)}}
                @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
                @keyframes marquee{to{transform:translateX(-50%)}}
                @keyframes pulseRing{0%{transform:scale(.8);opacity:.7}100%{transform:scale(1.5);opacity:0}}
                .arm{position:absolute;inset:0;animation:orbit 24s linear infinite}
                .cc{animation:counter 24s linear infinite}
                .orbit:hover .arm,.orbit:hover .cc{animation-play-state:paused}
                .floaty{animation:floaty 5s ease-in-out infinite}
                @media (prefers-reduced-motion:reduce){.arm,.cc,.floaty{animation:none}}
            `}</style>

            {/* readability overlay over the custom background */}
            <div className="pointer-events-none fixed inset-0 bg-[#EFE4EC]/45" />

            {/* NAVBAR */}
            <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
                <nav className={`rounded-2xl border backdrop-blur-2xl transition-all duration-300 ${scrolled ? "border-[#C89BC0]/30 bg-[#0D090D]/95 shadow-2xl" : "border-[#C89BC0]/20 bg-[#0D090D]/85"}`}>
                    <div className="flex h-16 items-center justify-between px-4 lg:px-6">
                        <a href="#home" className="flex items-center gap-2.5">
                            <img src={LOGO} alt="PulseWorks AI logo" className="h-10 w-10 object-contain drop-shadow-lg" />
                            <span className="text-lg font-bold tracking-tight text-[#EFE4EC]">
                                PulseWorks <span className="text-[#C89BC0]">AI</span>
                            </span>
                        </a>

                        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
                            {NAV.map(([label, id]) => (
                                <li key={id}>
                                    <a href={`#${id}`} className={`block rounded-full px-5 py-1.5 text-sm font-medium transition ${active === id ? "bg-[#EFE4EC] text-[#0D090D]" : "text-[#EFE4EC]/80 hover:bg-white/10 hover:text-[#EFE4EC]"}`}>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-2">
                            <Link to="/login" className="hidden rounded-full px-4 py-2 text-sm font-medium text-[#EFE4EC] transition hover:bg-white/10 sm:block">Sign in</Link>
                            <Link to="/register" className="hidden items-center gap-2 rounded-full bg-[#C89BC0] px-5 py-2 text-sm font-semibold text-[#0D090D] transition hover:bg-[#EFE4EC] sm:flex">
                                Get started <ArrowRight size={15} />
                            </Link>
                            <button onClick={() => setOpen(!open)} aria-label="Menu" className="flex h-10 w-10 items-center justify-center rounded-xl text-[#EFE4EC] hover:bg-white/10 lg:hidden">
                                {open ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {open && (
                    <div className="mt-2 rounded-2xl border border-[#C89BC0]/20 bg-[#0D090D]/95 p-3 backdrop-blur-2xl lg:hidden">
                        {NAV.map(([label, id]) => (
                            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 text-sm font-medium ${active === id ? "bg-[#EFE4EC] text-[#0D090D]" : "text-[#EFE4EC]"}`}>
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <main className="relative z-10">

                {/* HERO: one line of text, the carousel in a card below it, orbit cards on the right */}
                <section id="home" className="grid gap-8 px-3 pb-6 pt-[88px] sm:px-4 lg:h-screen lg:grid-cols-[1.25fr_1fr] lg:pr-10">
                    <div className="flex min-h-[560px] flex-col gap-6">
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#0D090D] sm:text-5xl xl:text-6xl">
                            Secure Enterprise Workspace
                        </h1>

                        <div className={`${glass} flex flex-1 flex-col p-3`}>
                            <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#6B4A6C] to-[#0D090D]">
                                {IMAGES.map((src, i) => (
                                    <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ${slide === i ? "opacity-100" : "opacity-0"}`}>
                                        <SlideImage base={src} alt={slides[i][0]} />
                                    </div>
                                ))}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D090D]/90 to-transparent p-5 pt-16">
                                    <p className="text-xl font-semibold text-[#EFE4EC]">{slides[slide][0]}</p>
                                    <p className="text-sm text-[#B898B6]">{slides[slide][1]}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-2 pb-1 pt-3">
                                <div className="flex gap-2">
                                    {slides.map((_, i) => (
                                        <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className={`h-2.5 rounded-full transition-all ${slide === i ? "w-8 bg-[#0D090D]" : "w-2.5 bg-[#6B4A6C]/40"}`} />
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => setSlide((slide + slides.length - 1) % slides.length)} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0D090D]/20 transition hover:bg-[#0D090D] hover:text-[#C89BC0]"><ArrowLeft size={17} /></button>
                                    <button onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D090D] text-[#C89BC0] transition hover:bg-[#6B4A6C]"><ArrowRight size={17} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ORBITING CARDS */}
                    <div className="flex items-center justify-center">
                        <div className="orbit relative aspect-square w-full max-w-[460px]">
                            <div className="absolute inset-[6%] rounded-full border border-dashed border-[#6B4A6C]/40" />
                            <div className="absolute inset-[30%] rounded-full border border-[#C89BC0]/50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="absolute h-28 w-28 rounded-full bg-[#C89BC0]/50" style={{ animation: "pulseRing 2.8s ease-out infinite" }} />
                                <img src={LOGO} alt="" className="floaty relative h-28 w-28 object-contain drop-shadow-2xl sm:h-32 sm:w-32" />
                            </div>
                            {orbitCards.map(({ icon: Icon, title, text }, i) => (
                                <div key={title} className="arm" style={{ animationDelay: `${-8 * i}s` }}>
                                    <div className="absolute left-1/2 top-[6%] -translate-x-1/2 -translate-y-1/2">
                                        <div className="cc w-40 rounded-2xl border border-[#C89BC0]/50 bg-[#EFE4EC]/90 p-3 shadow-xl backdrop-blur-xl sm:w-48" style={{ animationDelay: `${-8 * i}s` }}>
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0D090D] text-[#C89BC0]"><Icon size={16} /></span>
                                                <div>
                                                    <p className="text-xs font-semibold leading-tight">{title}</p>
                                                    <p className="mt-0.5 text-[11px] leading-tight text-[#6B4A6C]">{text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OBJECTIVES */}
                <section id="objectives" className="mx-auto max-w-[1600px] px-5 py-24 lg:px-12">
                    <Heading kicker="Project objectives" title="One platform for how your organization actually works." />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {objectives.map(([Icon, title, text], i) => (
                            <Reveal key={title} delay={i * 70}>
                                <div className={`group h-full cursor-default p-6 transition duration-300 hover:-translate-y-2 hover:rotate-1 hover:bg-[#0D090D] hover:shadow-2xl ${glass}`}>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6B4A6C]/15 text-[#6B4A6C] transition group-hover:bg-[#C89BC0] group-hover:text-[#0D090D]"><Icon size={22} /></span>
                                    <h3 className="mt-5 text-lg font-semibold transition group-hover:text-[#EFE4EC]">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6B4A6C] transition group-hover:text-[#B898B6]">{text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* AI */}
                <section id="ai" className="relative overflow-hidden bg-[#0D090D] py-24">
                    <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#6B4A6C]/40 blur-3xl" />
                    <div className="relative mx-auto max-w-[1600px] px-3 sm:px-4 lg:px-6">
                        <Heading light kicker="AI inside" title="Less searching. More deciding." />
                        <div className="grid gap-6 lg:grid-cols-2">
                            <Reveal>
                                <div className="floaty rounded-3xl border border-[#C89BC0]/30 bg-white/5 p-6 backdrop-blur-xl">
                                    <p className="flex items-center gap-2 text-sm font-semibold text-[#C89BC0]"><Sparkles size={16} /> AI Task Summary</p>
                                    <p className="mt-4 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-[#B898B6]">
                                        Thread: 24 updates on “API integration”. Auth endpoints done, payment webhook blocked by
                                        missing keys, QA waiting on staging, deadline moved to Friday…
                                    </p>
                                    <p className="mt-4 rounded-2xl bg-[#C89BC0] p-4 text-sm font-medium leading-6 text-[#0D090D]">
                                        Summary: Auth is done. Payments are blocked on API keys. QA starts once staging is ready. Due Friday.
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={150}>
                                <div className="rounded-3xl border border-[#C89BC0]/30 bg-white/5 p-6 backdrop-blur-xl transition hover:border-[#C89BC0]">
                                    <p className="flex items-center gap-2 text-sm font-semibold text-[#C89BC0]"><FileText size={16} /> AI Document Assistant · contract.pdf</p>
                                    <div className="mt-4 flex flex-col gap-3 text-sm">
                                        <p className="self-end rounded-2xl rounded-br-sm bg-[#6B4A6C] px-4 py-2.5 text-[#EFE4EC]">When does the renewal clause apply?</p>
                                        <p className="self-start rounded-2xl rounded-bl-sm bg-[#EFE4EC] px-4 py-2.5 text-[#0D090D]">Section 7.2: it renews automatically 30 days before the end date unless cancelled in writing.</p>
                                        <div className="mt-1 flex items-center gap-2 rounded-full border border-[#C89BC0]/40 px-4 py-2 text-[#B898B6]">
                                            <span className="flex-1">Ask about this document…</span><Send size={15} className="text-[#C89BC0]" />
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer id="contact" className="relative z-10 mx-3 mb-3 rounded-3xl bg-[#E6D7E3] text-[#6B4A6C] sm:mx-4">
                <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <img src={LOGO} alt="" className="h-10 w-10 object-contain" />
                            <span className="text-lg font-bold text-[#0D090D]">PulseWorks <span className="text-[#8A5F88]">AI</span></span>
                        </div>
                        <p className="mt-4 text-sm leading-6">Secure enterprise workspace for tasks, documents and teams.</p>
                        <div className="mt-5 flex gap-3">
                            {[Globe, MessageSquare, Mail].map((Icon, i) => (
                                <a key={i} href="#home" aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#6B4A6C]/30 transition hover:bg-[#6B4A6C] hover:text-[#EFE4EC]"><Icon size={16} /></a>
                            ))}
                        </div>
                    </div>
                    {[
                        ["Product", ["Task Management", "AI Summary", "Document Assistant", "Analytics"]],
                        ["Platform", ["Authentication", "Role-Based Access", "Audit Logs", "File Management"]],
                        ["Company", ["Objectives", "Security", "Contact", "Sign in"]]
                    ].map(([h, items]) => (
                        <div key={h}>
                            <p className="mb-4 text-sm font-semibold text-[#0D090D]">{h}</p>
                            <ul className="flex flex-col gap-2.5 text-sm">
                                {items.map((it) => (<li key={it}><a href="#home" className="transition hover:text-[#0D090D]">{it}</a></li>))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-[#6B4A6C]/20 px-5 py-5 text-center text-xs">
                    © {new Date().getFullYear()} PulseWorks AI. Built with the MERN stack.
                </div>
            </footer>
        </div>
    );
}
