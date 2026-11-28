
import { useState } from "react";
import {
    ArrowRight,
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    ShieldCheck,
    Sparkles,
    Users,
    FileText,
    MessageSquare,
    LayoutDashboard,
    TrendingUp,
} from "lucide-react";

const features = [
    {
        tag: "01 — Task management",
        title: "Every task.\nOne workspace.",
        description:
            "Create tasks, assign teammates, set priorities and track progress without losing sight of what matters.",
        icon: LayoutDashboard,
        points: ["Smart task organization", "Priority-based tracking", "Team assignments"],
    },
    {
        tag: "02 — AI task intelligence",
        title: "Less busywork.\nMore clarity.",
        description:
            "Turn long task updates into clear summaries. Let AI help your team understand what needs attention next.",
        icon: Sparkles,
        points: ["AI task summaries", "Smart insights", "Faster decision making"],
    },
    {
        tag: "03 — AI document assistant",
        title: "Your documents.\nYour answers.",
        description:
            "Upload work documents, extract useful information and ask questions without manually searching every page.",
        icon: FileText,
        points: ["Document extraction", "Context-based answers", "Quick information retrieval"],
    },
    {
        tag: "04 — Secure collaboration",
        title: "Work together.\nStay protected.",
        description:
            "Bring your team into one connected space with role-based access, activity tracking and secure collaboration.",
        icon: ShieldCheck,
        points: ["Role-based access", "Activity monitoring", "Secure workspace"],
    },
];

function LandingPage() {
    const [active, setActive] = useState(0);

    const current = features[active];
    const FeatureIcon = current.icon;

    function nextSlide() {
        setActive((prev) => (prev + 1) % features.length);
    }

    function previousSlide() {
        setActive((prev) => (prev - 1 + features.length) % features.length);
    }

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            {/* Background overlay */}
            <div className="min-h-screen bg-[#f4eee5]/35">

                {/* Hero section */}
                <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">

                    {/* Top introduction */}
                    <div className="mb-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6E3511] text-[#F5E8D8]">
                            <Sparkles size={16} />
                        </span>

                        <span className="text-sm font-semibold tracking-[0.22em] text-[#6E3511]">
                            PULSEWORKS AI
                        </span>

                        <span className="ml-2 rounded-full border border-[#9B6A45]/40 bg-[#F5E8D8]/70 px-3 py-1 text-xs text-[#6E3511]">
                            Secure Enterprise Workspace
                        </span>
                    </div>

                    {/* Main two column layout */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* LEFT SECTION */}
                        <div className="flex flex-col">

                            <p className="mb-5 flex items-center gap-2 text-sm font-medium text-[#8C6040]">
                                <span className="h-2 w-2 rounded-full bg-[#9B6A45]" />
                                A better way to work together
                            </p>

                            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-[#4E2A16] sm:text-6xl xl:text-7xl">
                                Work smarter.
                                <br />
                                Stay <span className="italic text-[#9B6A45]">in sync.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-[#6E513C] sm:text-lg">
                                Your team's tasks, projects, documents and conversations —
                                brought together in one intelligent workspace built for
                                productivity and security.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="flex items-center gap-3 rounded-full bg-[#4E2A16] px-6 py-3.5 text-sm font-medium text-[#F5E8D8] shadow-lg transition hover:bg-[#6E3511] hover:shadow-xl">
                                    Explore workspace
                                    <ArrowRight size={17} />
                                </button>

                                <button className="flex items-center gap-3 rounded-full border border-[#9B6A45]/50 bg-[#F5E8D8]/70 px-6 py-3.5 text-sm font-medium text-[#4E2A16] backdrop-blur-sm transition hover:bg-[#E8D5C0]">
                                    Discover AI
                                    <Sparkles size={16} />
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="my-10 h-px w-full bg-[#9B6A45]/25" />

                            {/* FEATURE CAROUSEL */}
                            <div className="relative overflow-hidden rounded-3xl border border-[#9B6A45]/20 bg-[#F5E8D8]/70 p-6 shadow-sm backdrop-blur-md sm:p-8">

                                {/* Feature top */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9B6A45]">
                                        Discover what you can do
                                    </span>

                                    <span className="rounded-full bg-[#6E3511]/10 px-3 py-1 text-xs text-[#6E3511]">
                                        {active + 1} / {features.length}
                                    </span>
                                </div>

                                {/* Carousel content */}
                                <div key={active} className="mt-6 animate-[fadeIn_0.4s_ease-in-out]">

                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6E3511] text-[#F5E8D8] shadow-md">
                                        <FeatureIcon size={22} />
                                    </div>

                                    <p className="text-xs font-medium tracking-wide text-[#9B6A45]">
                                        {current.tag}
                                    </p>

                                    <h2 className="mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-[#4E2A16] sm:text-4xl">
                                        {current.title}
                                    </h2>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-[#6E513C]">
                                        {current.description}
                                    </p>

                                    <div className="mt-5 flex flex-col gap-3">
                                        {current.points.map((point, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-[#6E3511]">
                                                <CheckCircle2 size={16} className="text-[#9B6A45]" />
                                                {point}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Carousel controls */}
                                <div className="mt-8 flex items-center justify-between border-t border-[#9B6A45]/20 pt-5">

                                    {/* Dots */}
                                    <div className="flex items-center gap-2">
                                        {features.map((feature, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActive(index)}
                                                aria-label={`Show ${feature.tag}`}
                                                className={`h-2.5 rounded-full transition-all duration-300 ${active === index
                                                    ? "w-8 bg-[#6E3511]"
                                                    : "w-2.5 bg-[#C49A76] hover:bg-[#9B6A45]"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Arrows */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={previousSlide}
                                            aria-label="Previous feature"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9B6A45]/30 text-[#6E3511] transition hover:bg-[#6E3511] hover:text-[#F5E8D8]"
                                        >
                                            <ArrowLeft size={17} />
                                        </button>

                                        <button
                                            onClick={nextSlide}
                                            aria-label="Next feature"
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6E3511] text-[#F5E8D8] transition hover:bg-[#4E2A16]"
                                        >
                                            <ArrowRight size={17} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom small highlights */}
                            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#6E513C]">
                                <span className="flex items-center gap-2">
                                    <ShieldCheck size={15} />
                                    Security focused
                                </span>
                                <span className="flex items-center gap-2">
                                    <Users size={15} />
                                    Built for teams
                                </span>
                                <span className="flex items-center gap-2">
                                    <Sparkles size={15} />
                                    AI powered
                                </span>
                            </div>
                        </div>

                        {/* RIGHT SECTION - DASHBOARD PREVIEW */}
                        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

                            {/* Decorative glow */}
                            <div className="absolute -inset-8 rounded-[3rem] bg-[#C49A76]/20 blur-3xl" />

                            {/* Dashboard card */}
                            <div className="relative overflow-hidden rounded-[2rem] border border-[#9B6A45]/25 bg-[#F5E8D8]/85 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

                                {/* Dashboard heading */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-[#9B6A45]">
                                            WORKSPACE OVERVIEW
                                        </p>
                                        <h2 className="mt-1 text-xl font-semibold text-[#4E2A16]">
                                            Good morning, team.
                                        </h2>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6E3511] text-[#F5E8D8]">
                                        <LayoutDashboard size={18} />
                                    </div>
                                </div>

                                {/* Metric cards */}
                                <div className="mt-6 grid grid-cols-2 gap-3">

                                    <div className="rounded-2xl bg-[#E8D5C0] p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-[#795638]">Total tasks</span>
                                            <LayoutDashboard size={15} className="text-[#9B6A45]" />
                                        </div>
                                        <h3 className="mt-2 text-3xl font-semibold text-[#4E2A16]">
                                            24
                                        </h3>
                                        <p className="mt-1 text-xs text-[#8A6748]">
                                            Active workspace
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#6E3511] p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-[#E5C7A7]">Completed</span>
                                            <TrendingUp size={15} className="text-[#E5C7A7]" />
                                        </div>
                                        <h3 className="mt-2 text-3xl font-semibold text-[#F5E8D8]">
                                            16
                                        </h3>
                                        <p className="mt-1 text-xs text-[#D5B08D]">
                                            Tasks finished
                                        </p>
                                    </div>

                                </div>

                                {/* Progress section */}
                                <div className="mt-5 rounded-2xl border border-[#C49A76]/30 bg-white/50 p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-[#4E2A16]">
                                            Project progress
                                        </span>
                                        <span className="text-sm font-semibold text-[#9B6A45]">
                                            68%
                                        </span>
                                    </div>

                                    <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#E8D5C0]">
                                        <div className="h-full w-[68%] rounded-full bg-[#6E3511]" />
                                    </div>

                                    <div className="mt-2 flex justify-between text-xs text-[#8A6748]">
                                        <span>16 of 24 tasks completed</span>
                                        <span>On track</span>
                                    </div>
                                </div>

                                {/* Recent tasks */}
                                <div className="mt-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="text-sm font-semibold text-[#4E2A16]">
                                            Recent tasks
                                        </h3>
                                        <button className="flex items-center gap-1 text-xs font-medium text-[#9B6A45]">
                                            View all
                                            <ArrowUpRight size={14} />
                                        </button>
                                    </div>

                                    <div className="flex flex-col gap-3">

                                        {/* Task 1 */}
                                        <div className="flex items-center gap-3 rounded-xl bg-white/60 p-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8D5C0] text-[#6E3511]">
                                                <CheckCircle2 size={17} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-[#4E2A16]">
                                                    Website redesign
                                                </p>
                                                <p className="text-xs text-[#9B6A45]">
                                                    UI / UX Team
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-[#E1EAD9] px-2.5 py-1 text-xs text-[#527344]">
                                                Done
                                            </span>
                                        </div>

                                        {/* Task 2 */}
                                        <div className="flex items-center gap-3 rounded-xl bg-white/60 p-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8D5C0] text-[#6E3511]">
                                                <Clock3 size={17} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-[#4E2A16]">
                                                    API integration
                                                </p>
                                                <p className="text-xs text-[#9B6A45]">
                                                    Development Team
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-[#F3DFBE] px-2.5 py-1 text-xs text-[#98713C]">
                                                Pending
                                            </span>
                                        </div>

                                        {/* Task 3 */}
                                        <div className="flex items-center gap-3 rounded-xl bg-white/60 p-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8D5C0] text-[#6E3511]">
                                                <MessageSquare size={17} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-[#4E2A16]">
                                                    Product review meeting
                                                </p>
                                                <p className="text-xs text-[#9B6A45]">
                                                    Management
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-[#E8D5C0] px-2.5 py-1 text-xs text-[#6E3511]">
                                                Active
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* AI insight */}
                                <div className="mt-5 flex gap-3 rounded-2xl bg-[#4E2A16] p-4 text-[#F5E8D8]">
                                    <div className="mt-0.5">
                                        <Sparkles size={18} className="text-[#D7AE86]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">AI Workspace Insight</p>
                                        <p className="mt-1 text-xs leading-5 text-[#E5C7A7]">
                                            3 tasks need attention today. Your team is making steady progress.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Floating AI badge */}
                            <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-full border border-[#C49A76]/40 bg-[#F5E8D8] px-4 py-2 shadow-lg sm:-right-5">
                                <Sparkles size={15} className="text-[#9B6A45]" />
                                <span className="text-xs font-semibold text-[#6E3511]">
                                    AI Powered
                                </span>
                            </div>

                            {/* Floating security badge */}
                            <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-full border border-[#C49A76]/40 bg-[#F5E8D8] px-4 py-2 shadow-lg sm:-left-5">
                                <ShieldCheck size={15} className="text-[#6E3511]" />
                                <span className="text-xs font-semibold text-[#6E3511]">
                                    Secure workspace
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="mt-16 flex flex-col gap-4 border-t border-[#9B6A45]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-[#6E513C]">
                            One workspace. Every team. Better work.
                        </p>

                        <div className="flex flex-wrap gap-5 text-xs font-medium text-[#8A6748]">
                            <span>Task management</span>
                            <span>AI assistance</span>
                            <span>Team collaboration</span>
                            <span>Security & access</span>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default LandingPage;
