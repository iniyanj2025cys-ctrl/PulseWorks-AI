import { useState, useMemo } from "react"
import {
    LayoutDashboard, ListChecks, Plus, Search, Pencil, Trash2, X, LogOut,
    ListTodo, Loader2, CheckCircle2, AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/*
  PALETTE (same as login / register)
  ink #1F1220 | night #2B1A2D | plum #6B4A6C | mauve #7D557A
  orchid #8A5F88 | peony #C89BC0 | line #D8C2D6 | mist #F7F1F6
*/

const STATUSES = ["To Do", "In Progress", "Completed"]
const PRIORITIES = ["High", "Medium", "Low"]
const USERS = ["Iniya", "Kani", "Meera", "Arjun"]

const STATUS_COLOR = { "To Do": "#C89BC0", "In Progress": "#8A5F88", "Completed": "#2B1A2D" }
const PRIORITY_COLOR = { High: "#8A2F5A", Medium: "#8A5F88", Low: "#C89BC0" }

const today = new Date().toISOString().slice(0, 10)

const seed = [
    { id: 1, title: "Design login page", description: "Finish login and register screens", assignee: "Iniya", priority: "High", status: "Completed", due: "2026-11-20" },
    { id: 2, title: "API integration", description: "Connect task routes to the React app", assignee: "Rohith", priority: "High", status: "In Progress", due: "2026-12-02" },
    { id: 3, title: "Set up MongoDB schema", description: "Users, tasks and audit logs", assignee: "Arjun", priority: "Medium", status: "Completed", due: "2026-11-18" },
    { id: 4, title: "Role-based access", description: "Admin and member permissions", assignee: "Meera", priority: "High", status: "To Do", due: "2026-11-25" },
    { id: 5, title: "AI task summary", description: "Summarize long task updates", assignee: "Iniya", priority: "Medium", status: "In Progress", due: "2026-12-10" },
    { id: 6, title: "File upload", description: "Attach documents to tasks", assignee: "Rohith", priority: "Low", status: "To Do", due: "2026-12-15" },
    { id: 7, title: "Real-time notifications", description: "Socket events for activity feed", assignee: "Arjun", priority: "Medium", status: "To Do", due: "2026-12-20" },
    { id: 8, title: "Write test cases", description: "Cover auth and task APIs", assignee: "Meera", priority: "Low", status: "Completed", due: "2026-11-22" }
]

const blank = { title: "", description: "", assignee: USERS[0], priority: "Medium", status: "To Do", due: "" }
const field = "h-11 w-full rounded-xl border border-[#D8C2D6] bg-white px-3 text-sm text-[#1F1220] outline-none focus:border-[#8A5F88] focus:ring-2 focus:ring-[#C89BC0]/50"
const card = "rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lg shadow-[#6B4A6C]/10"

function Chip({ color, children }) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: color + "22", color: color === "#C89BC0" ? "#6B4A6C" : color }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />{children}
        </span>
    )
}

function Donut({ data, total }) {
    const r = 40, c = 2 * Math.PI * r
    let offset = 0
    return (
        <div className="relative h-40 w-40 shrink-0">
            <svg viewBox="0 0 100 100" className="-rotate-90">
                <circle cx="50" cy="50" r={r} fill="none" stroke="#EFE4EC" strokeWidth="14" />
                {data.map(([label, n]) => {
                    const len = total ? (n / total) * c : 0
                    const el = <circle key={label} cx="50" cy="50" r={r} fill="none" stroke={STATUS_COLOR[label]} strokeWidth="14" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
                    offset += len
                    return el
                })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{total}</span>
                <span className="text-xs text-[#7D557A]">tasks</span>
            </div>
        </div>
    )
}

function TaskTable({ tasks, onEdit, onDelete, onStatus }) {
    if (!tasks.length) return <p className="py-10 text-center text-sm text-[#7D557A]">No tasks found.</p>
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
                <thead>
                    <tr className="border-b border-[#D8C2D6] text-xs text-[#7D557A]">
                        {["Task", "Assigned to", "Priority", "Status", "Due", ""].map((h) => <th key={h} className="px-3 py-3 font-medium">{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <tr key={t.id} className="border-b border-[#D8C2D6]/50 transition hover:bg-[#F7F1F6]">
                            <td className="px-3 py-3">
                                <p className="font-medium">{t.title}</p>
                                <p className="text-xs text-[#7D557A]">{t.description}</p>
                            </td>
                            <td className="px-3 py-3">
                                <span className="flex items-center gap-2">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2B1A2D] text-xs font-semibold text-[#C89BC0]">{t.assignee[0]}</span>
                                    {t.assignee}
                                </span>
                            </td>
                            <td className="px-3 py-3"><Chip color={PRIORITY_COLOR[t.priority]}>{t.priority}</Chip></td>
                            <td className="px-3 py-3">
                                <select value={t.status} onChange={(e) => onStatus(t.id, e.target.value)} className="rounded-lg border border-[#D8C2D6] bg-white px-2 py-1.5 text-xs outline-none focus:border-[#8A5F88]">
                                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                                </select>
                            </td>
                            <td className={`px-3 py-3 text-xs ${t.due && t.due < today && t.status !== "Completed" ? "font-semibold text-[#8A2F5A]" : "text-[#7D557A]"}`}>{t.due || "-"}</td>
                            <td className="px-3 py-3">
                                <div className="flex justify-end gap-1">
                                    <button onClick={() => onEdit(t)} aria-label="Edit task" className="rounded-lg p-2 text-[#6B4A6C] transition hover:bg-[#EFE4EC]"><Pencil size={16} /></button>
                                    <button onClick={() => onDelete(t)} aria-label="Delete task" className="rounded-lg p-2 text-[#8A2F5A] transition hover:bg-[#F6E3EC]"><Trash2 size={16} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default function DashboardPage({ onLogout }) {
    const [tasks, setTasks] = useState(seed)
    const [view, setView] = useState("dashboard")
    const [query, setQuery] = useState("")
    const [fStatus, setFStatus] = useState("All")
    const [fPriority, setFPriority] = useState("All")
    const [modal, setModal] = useState(null) // { id|null, form }
    const [toDelete, setToDelete] = useState(null)

    const byStatus = STATUSES.map((s) => [s, tasks.filter((t) => t.status === s).length])
    const byPriority = PRIORITIES.map((p) => [p, tasks.filter((t) => t.priority === p).length])
    const byUser = USERS.map((u) => [u, tasks.filter((t) => t.assignee === u).length])
    const overdue = tasks.filter((t) => t.due && t.due < today && t.status !== "Completed").length
    const done = byStatus[2][1]
    const rate = tasks.length ? Math.round((done / tasks.length) * 100) : 0

    const filtered = useMemo(() => tasks.filter((t) =>
        (fStatus === "All" || t.status === fStatus) &&
        (fPriority === "All" || t.priority === fPriority) &&
        (t.title + t.description + t.assignee).toLowerCase().includes(query.toLowerCase())
    ), [tasks, fStatus, fPriority, query])

    const openCreate = () => setModal({ id: null, form: { ...blank } })
    const openEdit = (t) => setModal({ id: t.id, form: { ...t } })
    const setForm = (k, v) => setModal((m) => ({ ...m, form: { ...m.form, [k]: v } }))

    function save(e) {
        e.preventDefault()
        const f = modal.form
        if (modal.id) setTasks((ts) => ts.map((t) => (t.id === modal.id ? { ...f, id: modal.id } : t)))
        else setTasks((ts) => [{ ...f, id: Date.now() }, ...ts])
        setModal(null)
    }
    const changeStatus = (id, status) => setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, status } : t)))
    const remove = () => { setTasks((ts) => ts.filter((t) => t.id !== toDelete.id)); setToDelete(null) }

    const nav = [["dashboard", "Dashboard", LayoutDashboard], ["tasks", "Tasks", ListChecks]]
    const stats = [
        ["Total tasks", tasks.length, ListTodo, "#6B4A6C"],
        ["In progress", byStatus[1][1], Loader2, "#8A5F88"],
        ["Completed", done, CheckCircle2, "#2B1A2D"],
        ["Overdue", overdue, AlertCircle, "#8A2F5A"]
    ]

    return (
        <div className="flex min-h-screen bg-gradient-to-b from-[#F7F1F6] to-[#E3D1E1] text-[#1F1220]">

            {/* SIDEBAR */}
            <aside className="hidden w-64 shrink-0 flex-col bg-[#2B1A2D] p-5 md:flex">
                <div className="flex items-center gap-2.5">
                    <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
                    <span className="text-lg font-bold text-[#EFE4EC]">Pulse<span className="text-[#C89BC0]">Works-AI</span></span>
                </div>
                <nav className="mt-10 flex flex-col gap-1">
                    {nav.map(([id, label, Icon]) => (
                        <button key={id} onClick={() => setView(id)} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${view === id ? "bg-[#EFE4EC] text-[#1F1220]" : "text-[#EFE4EC]/75 hover:bg-white/10"}`}>
                            <Icon size={18} /> {label}
                        </button>
                    ))}
                </nav>
                <button onClick={onLogout} className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#EFE4EC]/75 transition hover:bg-white/10">
                    <LogOut size={18} /> Log out
                </button>
            </aside>

            {/* MAIN */}
            <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

                {/* mobile nav */}
                <div className="mb-4 flex items-center justify-between rounded-2xl bg-[#2B1A2D] p-2 md:hidden">
                    <div className="flex gap-1">
                        {nav.map(([id, label]) => (
                            <button key={id} onClick={() => setView(id)} className={`rounded-xl px-4 py-2 text-sm ${view === id ? "bg-[#EFE4EC] text-[#1F1220]" : "text-[#EFE4EC]"}`}>{label}</button>
                        ))}
                    </div>
                    <button onClick={onLogout} aria-label="Log out" className="p-2 text-[#EFE4EC]"><LogOut size={18} /></button>
                </div>

                <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">{view === "dashboard" ? "Dashboard" : "Task management"}</h1>
                        <p className="text-sm text-[#7D557A]">{view === "dashboard" ? "Task statistics by status and priority" : "Create, edit, delete, assign and track tasks"}</p>
                    </div>
                    <Button onClick={openCreate} className="h-11 rounded-xl bg-[#2B1A2D] px-5 text-[#F7F1F6] hover:bg-[#6B4A6C]"><Plus size={17} /> New task</Button>
                </header>

                {view === "dashboard" && (
                    <div className="flex flex-col gap-6">
                        {/* STAT CARDS */}
                        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                            {stats.map(([label, value, Icon, color]) => (
                                <div key={label} className={card}>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: color + "1F", color }}><Icon size={20} /></span>
                                    <p className="mt-4 text-3xl font-bold">{value}</p>
                                    <p className="text-sm text-[#7D557A]">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CHARTS */}
                        <div className="grid gap-6 xl:grid-cols-3">
                            <div className={card}>
                                <h2 className="font-semibold">Tasks by status</h2>
                                <div className="mt-5 flex flex-wrap items-center gap-6">
                                    <Donut data={byStatus} total={tasks.length} />
                                    <ul className="flex flex-col gap-3 text-sm">
                                        {byStatus.map(([s, n]) => (
                                            <li key={s} className="flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: STATUS_COLOR[s] }} />{s}<b className="ml-auto pl-4">{n}</b></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    <div className="mb-1 flex justify-between text-xs text-[#7D557A]"><span>Completion rate</span><span>{rate}%</span></div>
                                    <div className="h-2 rounded-full bg-[#EFE4EC]"><div className="h-full rounded-full bg-[#6B4A6C]" style={{ width: `${rate}%` }} /></div>
                                </div>
                            </div>

                            <div className={card}>
                                <h2 className="font-semibold">Tasks by priority</h2>
                                <div className="mt-5 flex flex-col gap-5">
                                    {byPriority.map(([p, n]) => (
                                        <div key={p}>
                                            <div className="mb-1.5 flex justify-between text-sm"><span>{p}</span><b>{n}</b></div>
                                            <div className="h-3 rounded-full bg-[#EFE4EC]"><div className="h-full rounded-full transition-all" style={{ width: `${tasks.length ? (n / tasks.length) * 100 : 0}%`, background: PRIORITY_COLOR[p] }} /></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={card}>
                                <h2 className="font-semibold">Workload by member</h2>
                                <div className="mt-5 flex flex-col gap-4">
                                    {byUser.map(([u, n]) => (
                                        <div key={u} className="flex items-center gap-3 text-sm">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2B1A2D] text-xs font-semibold text-[#C89BC0]">{u[0]}</span>
                                            <span className="w-16">{u}</span>
                                            <div className="h-2.5 flex-1 rounded-full bg-[#EFE4EC]"><div className="h-full rounded-full bg-[#8A5F88]" style={{ width: `${tasks.length ? (n / tasks.length) * 100 : 0}%` }} /></div>
                                            <b className="w-5 text-right">{n}</b>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RECENT */}
                        <div className={card}>
                            <div className="mb-2 flex items-center justify-between">
                                <h2 className="font-semibold">Recent tasks</h2>
                                <button onClick={() => setView("tasks")} className="text-sm font-medium text-[#6B4A6C] hover:underline">View all</button>
                            </div>
                            <TaskTable tasks={tasks.slice(0, 5)} onEdit={openEdit} onDelete={setToDelete} onStatus={changeStatus} />
                        </div>
                    </div>
                )}

                {view === "tasks" && (
                    <div className={card}>
                        <div className="mb-4 flex flex-wrap gap-3">
                            <div className="relative min-w-[200px] flex-1">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7D557A]" />
                                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tasks" className={`${field} pl-9`} />
                            </div>
                            <select value={fStatus} onChange={(e) => setFStatus(e.target.value)} className={`${field} !w-auto`}>
                                {["All", ...STATUSES].map((s) => <option key={s} value={s}>{s === "All" ? "All statuses" : s}</option>)}
                            </select>
                            <select value={fPriority} onChange={(e) => setFPriority(e.target.value)} className={`${field} !w-auto`}>
                                {["All", ...PRIORITIES].map((p) => <option key={p} value={p}>{p === "All" ? "All priorities" : p}</option>)}
                            </select>
                        </div>
                        <TaskTable tasks={filtered} onEdit={openEdit} onDelete={setToDelete} onStatus={changeStatus} />
                    </div>
                )}
            </main>

            {/* CREATE / EDIT MODAL */}
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1220]/50 p-4 backdrop-blur-sm" onClick={() => setModal(null)}>
                    <form onSubmit={save} onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-xl font-bold">{modal.id ? "Edit task" : "Create task"}</h2>
                            <button type="button" onClick={() => setModal(null)} aria-label="Close" className="rounded-lg p-2 hover:bg-[#EFE4EC]"><X size={18} /></button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" required value={modal.form.title} onChange={(e) => setForm("title", e.target.value)} placeholder="What needs to be done?" className="h-11 rounded-xl border-[#D8C2D6]" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="desc">Description</Label>
                                <textarea id="desc" rows={3} value={modal.form.description} onChange={(e) => setForm("description", e.target.value)} placeholder="Add a few details" className={`${field} h-auto py-2`} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2"><Label>Assign to</Label>
                                    <select value={modal.form.assignee} onChange={(e) => setForm("assignee", e.target.value)} className={field}>{USERS.map((u) => <option key={u}>{u}</option>)}</select></div>
                                <div className="grid gap-2"><Label>Due date</Label>
                                    <input type="date" value={modal.form.due} onChange={(e) => setForm("due", e.target.value)} className={field} /></div>
                                <div className="grid gap-2"><Label>Priority</Label>
                                    <select value={modal.form.priority} onChange={(e) => setForm("priority", e.target.value)} className={field}>{PRIORITIES.map((p) => <option key={p}>{p}</option>)}</select></div>
                                <div className="grid gap-2"><Label>Status</Label>
                                    <select value={modal.form.status} onChange={(e) => setForm("status", e.target.value)} className={field}>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <Button type="button" variant="outline" onClick={() => setModal(null)} className="h-11 rounded-xl border-[#D8C2D6]">Cancel</Button>
                            <Button type="submit" className="h-11 rounded-xl bg-[#2B1A2D] px-6 text-[#F7F1F6] hover:bg-[#6B4A6C]">{modal.id ? "Save changes" : "Create task"}</Button>
                        </div>
                    </form>
                </div>
            )}

            {/* DELETE CONFIRM */}
            {toDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1220]/50 p-4 backdrop-blur-sm" onClick={() => setToDelete(null)}>
                    <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
                        <h2 className="text-xl font-bold">Delete task?</h2>
                        <p className="mt-2 text-sm text-[#7D557A]">“{toDelete.title}” will be removed permanently.</p>
                        <div className="mt-6 flex justify-end gap-3">
                            <Button variant="outline" onClick={() => setToDelete(null)} className="h-11 rounded-xl border-[#D8C2D6]">Cancel</Button>
                            <Button onClick={remove} className="h-11 rounded-xl bg-[#8A2F5A] px-6 text-white hover:bg-[#6E2447]">Delete</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
