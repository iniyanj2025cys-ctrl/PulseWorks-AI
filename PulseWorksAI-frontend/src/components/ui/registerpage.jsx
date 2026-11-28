import { useState } from "react"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/*
  PALETTE (same as the login page)
  ink #1F1220 | night #2B1A2D | plum #6B4A6C | mauve #7D557A
  orchid #8A5F88 | line #D8C2D6 | mist #F7F1F6 | lilac #E3D1E1
*/

const inputClass =
    "h-12 rounded-xl border-[#D8C2D6] bg-white text-[#1F1220] placeholder:text-[#7D557A]/50 focus-visible:border-[#8A5F88] focus-visible:ring-[#C89BC0]/50"

function PasswordField({ id, label, placeholder }) {
    const [show, setShow] = useState(false)
    return (
        <div className="grid gap-2">

            <Label htmlFor={id} className="text-[#1F1220]">{label}</Label>
            <div className="relative">
                <Input
                    id={id}
                    type={show ? "text" : "password"}
                    placeholder={placeholder}
                    required
                    className={`${inputClass} pr-12`}
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    aria-label={show ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7D557A] transition hover:text-[#1F1220]"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
        </div>
    )
}

export default function RegisterDemo({ onLogin }) {
    return (
        <div className="min-h-screen flex bg-[#F7F1F6]">

            {/* LEFT SIDE: photo with no shade, dark text */}
            <div className="hidden md:flex w-1/2 relative overflow-hidden">

                <img
                    src="/workspace3.jpg"
                    alt="Workspace"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 flex flex-col justify-between p-10 w-full">

                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <img src="/logo.png" alt="" className="h-10 w-10 object-contain drop-shadow-md" />
                        <h1 className="text-2xl font-bold tracking-wide text-[#1F1220]">
                            Pulse<span className="text-[#6B4A6C]">Works-AI</span>
                        </h1>
                    </div>

                    {/* Bottom Text */}
                    <div className="mb-10">

                        <p className="text-[#6B4A6C] text-sm tracking-[4px] mb-4 font-semibold">
                            BEGIN YOUR JOURNEY
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-lg text-[#1F1220]">
                            Build better habits. Create your own rhythm.
                        </h2>

                        <p className="mt-5 max-w-md leading-7 text-[#3E2A40]">
                            A fresh start begins with one small step.
                            Create your account and make space for the things that matter.
                        </p>

                        {/* Dots */}
                        <div className="flex gap-2 mt-8">
                            <div className="w-8 h-1.5 bg-[#6B4A6C] rounded-full"></div>
                            <div className="w-2 h-1.5 bg-[#6B4A6C]/30 rounded-full"></div>
                            <div className="w-2 h-1.5 bg-[#6B4A6C]/30 rounded-full"></div>
                            <div className="w-2 h-1.5 bg-[#6B4A6C]/30 rounded-full"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: soft light lilac */}
            <div className="relative w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-b from-[#F7F1F6] to-[#E3D1E1] overflow-hidden">

                <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C89BC0]/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8A5F88]/20 blur-3xl" />

                <Card className="relative w-full max-w-md gap-6 rounded-3xl border border-white/80 bg-white/75 py-8 shadow-2xl shadow-[#6B4A6C]/15 backdrop-blur-xl">

                    {/* HEADER */}
                    <CardHeader className="space-y-3">

                        {/* Mobile Logo */}
                        <div className="md:hidden mb-3 flex items-center gap-2.5">
                            <img src="/logo.png" alt="" className="h-9 w-9 object-contain" />
                            <h1 className="text-2xl font-bold text-[#1F1220]">
                                Pulse<span className="text-[#6B4A6C]">Works-AI</span>
                            </h1>
                        </div>

                        <CardTitle className="text-3xl font-bold text-[#1F1220]">
                            Create an account
                        </CardTitle>

                        <CardDescription className="text-[#7D557A] text-sm">
                            Enter your details to get started with PulseWorks-AI
                        </CardDescription>

                    </CardHeader>

                    {/* FORM */}
                    <CardContent>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-5">

                                {/* FULL NAME */}
                                <div className="grid gap-2">
                                    <Label htmlFor="fullname" className="text-[#1F1220]">Full Name</Label>
                                    <Input
                                        id="fullname"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-[#1F1220]">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                {/* PASSWORD */}
                                <PasswordField id="password" label="Password" placeholder="Create a password" />

                                {/* CONFIRM PASSWORD */}
                                <PasswordField id="confirmPassword" label="Confirm Password" placeholder="Re-enter your password" />

                                {/* TERMS */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        required
                                        className="mt-1 h-4 w-4 accent-[#6B4A6C]"
                                    />
                                    <Label htmlFor="terms" className="text-sm font-normal leading-5 text-[#7D557A]">
                                        I agree to the Terms of Service and Privacy Policy
                                    </Label>
                                </div>

                                {/* SUBMIT */}
                                <Button
                                    type="submit"
                                    className="h-12 w-full rounded-xl bg-[#2B1A2D] font-medium text-[#F7F1F6] shadow-lg shadow-[#2B1A2D]/20 transition duration-300 hover:bg-[#6B4A6C]"
                                >
                                    Create Account <ArrowRight size={17} />
                                </Button>

                            </div>
                        </form>
                    </CardContent>

                    {/* FOOTER (bg-transparent removes the grey panel) */}
                    <CardFooter className="flex-col gap-3 border-0 bg-transparent">

                        {/* DIVIDER */}
                        <div className="my-2 flex w-full items-center gap-4">
                            <div className="h-px flex-1 bg-[#D8C2D6]"></div>
                            <span className="text-sm text-[#7D557A]">or</span>
                            <div className="h-px flex-1 bg-[#D8C2D6]"></div>
                        </div>

                        {/* GOOGLE */}
                        <Button
                            variant="outline"
                            className="h-12 w-full rounded-xl border-[#D8C2D6] bg-white text-[#1F1220] transition hover:bg-[#F1E4EF] hover:text-[#1F1220]"
                        >
                            <span className="text-lg font-bold text-[#8A5F88]">G</span>
                            Sign up with Google
                        </Button>

                        {/* LOGIN LINK */}
                        <p className="mt-4 text-sm text-[#7D557A]">
                            Already have an account?{" "}
                            <a
                                href="/"
                                onClick={(e) => {
                                    if (onLogin) {
                                        e.preventDefault()
                                        onLogin()
                                    }
                                }}
                                className="cursor-pointer font-semibold text-[#6B4A6C] hover:text-[#1F1220] hover:underline"
                            >
                                Sign in
                            </a>
                        </p>

                    </CardFooter>

                </Card>
            </div>
        </div>
    );
}
