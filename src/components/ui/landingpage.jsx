import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Dashboard");

    const navItems = [
        "Dashboard",
        "Projects",
        "My Tasks",
        "AI Assistant",
        "Documents",
        "Team",
        "Activity",
    ];

    return (
        <nav className="w-full bg-[#D2B79E] border-b border-[#6E3511]/20 px-6 py-4">

            <div className="flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[#4E2A16] flex items-center justify-center text-[#F5E8D8] font-bold">
                        P
                    </div>

                    <h1 className="text-xl font-bold text-[#4E2A16]">
                        PulseWorks <span className="text-[#6E3511]">AI</span>
                    </h1>
                </div>

                {/* NAV LINKS */}
                <div className="hidden lg:flex items-center gap-1">

                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${active === item
                                    ? "bg-[#4E2A16] text-[#F5E8D8] shadow-sm"
                                    : "text-[#4E2A16] hover:bg-[#A77B59]/30"
                                }`}
                        >
                            {item}
                        </button>
                    ))}

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">

                    {/* SEARCH */}
                    <button className="hidden sm:flex items-center gap-2 border border-[#6E3511]/25 bg-[#F5E8D8]/60 rounded-lg px-3 py-2 text-sm text-[#6E3511] hover:bg-[#F5E8D8] transition">
                        <span className="text-lg">⌕</span>
                        Search
                    </button>

                    {/* NOTIFICATIONS */}
                    <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#A77B59]/30 text-[#4E2A16] transition">
                        ♧
                        <span className="absolute top-1 right-1 w-2 h-2 bg-[#6E3511] rounded-full"></span>
                    </button>

                    {/* PROFILE */}
                    <button className="flex items-center gap-2">

                        <div className="w-9 h-9 rounded-full bg-[#6E3511] text-[#F5E8D8] flex items-center justify-center font-semibold text-sm">
                            I
                        </div>

                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-semibold text-[#4E2A16]">
                                Admin
                            </p>
                            <p className="text-xs text-[#6E3511]">
                                Workspace
                            </p>
                        </div>

                    </button>

                </div>
            </div>

            {/* MOBILE NAVIGATION */}
            <div className="lg:hidden flex gap-2 overflow-x-auto mt-4 pb-1">

                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`whitespace-nowrap px-3 py-2 rounded-lg text-xs font-medium transition ${active === item
                                ? "bg-[#4E2A16] text-[#F5E8D8]"
                                : "bg-[#A77B59]/20 text-[#4E2A16] hover:bg-[#A77B59]/40"
                            }`}
                    >
                        {item}
                    </button>
                ))}

            </div>

        </nav>
    );
}