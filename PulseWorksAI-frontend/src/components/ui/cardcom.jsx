import { useState } from "react"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/*
  PALETTE (chosen to match the white + lilac workspace photo)
  ink      #1F1220  - headings, strongest text
  night    #2B1A2D  - primary button
  plum     #6B4A6C  - links, accents, hover
  mauve    #7D557A  - descriptions and muted text
  orchid   #8A5F88  - small accents
  line     #D8C2D6  - borders and dividers
  mist     #F7F1F6  - page and light surfaces
  lilac    #E3D1E1  - bottom of the right-side gradient
*/

export default function CardDemo({ onSignup }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen flex bg-[#F7F1F6]">

            {/* LEFT SIDE: photo with no shade, dark text so it reads on the light image */}
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
                            YOUR SPACE. YOUR PACE.
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-lg text-[#1F1220]">
                            Ideas grow when you give them space.
                        </h2>

                        <p className="mt-5 max-w-md leading-7 text-[#3E2A40]">
                            Stay focused, organize your thoughts, and make every
                            moment of productivity count.
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

            {/* RIGHT SIDE: soft light lilac, no dark shade */}
            <div className="relative w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-b from-[#F7F1F6] to-[#E3D1E1] overflow-hidden">

                {/* soft decorative glows */}
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
                            Welcome back
                        </CardTitle>

                        <CardDescription className="text-[#7D557A] text-sm">
                            Log in to continue to your workspace
                        </CardDescription>

                        <CardAction>
                            <Button
                                variant="link"
                                className="text-[#6B4A6C] hover:text-[#1F1220]"
                                onClick={onSignup}
                            >
                                Sign Up
                            </Button>
                        </CardAction>

                    </CardHeader>

                    {/* FORM CONTENT */}
                    <CardContent>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-5">

                                {/* EMAIL */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-[#1F1220]">
                                        Email
                                    </Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        className="h-12 rounded-xl border-[#D8C2D6] bg-white text-[#1F1220] placeholder:text-[#7D557A]/50 focus-visible:border-[#8A5F88] focus-visible:ring-[#C89BC0]/50"
                                    />
                                </div>

                                {/* PASSWORD */}
                                <div className="grid gap-2">

                                    <div className="flex items-center">
                                        <Label htmlFor="password" className="text-[#1F1220]">
                                            Password
                                        </Label>

                                        <a
                                            href="#"
                                            className="ml-auto text-sm text-[#6B4A6C] hover:text-[#1F1220] hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            required
                                            className="h-12 rounded-xl border-[#D8C2D6] bg-white pr-12 text-[#1F1220] placeholder:text-[#7D557A]/50 focus-visible:border-[#8A5F88] focus-visible:ring-[#C89BC0]/50"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7D557A] transition hover:text-[#1F1220]"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* REMEMBER ME */}
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="h-4 w-4 accent-[#6B4A6C]"
                                    />

                                    <Label htmlFor="remember" className="text-sm font-normal text-[#7D557A]">
                                        Remember me
                                    </Label>
                                </div>

                            </div>
                        </form>

                    </CardContent>

                    {/* BUTTONS (bg-transparent removes the grey footer panel) */}
                    <CardFooter className="flex-col gap-3 border-0 bg-transparent">

                        {/* SIGN IN */}
                        <Button
                            className="h-12 w-full rounded-xl bg-[#2B1A2D] font-medium text-[#F7F1F6] shadow-lg shadow-[#2B1A2D]/20 transition duration-300 hover:bg-[#6B4A6C]"
                        >
                            Sign in <ArrowRight size={17} />
                        </Button>

                        {/* DIVIDER */}
                        <div className="my-2 flex w-full items-center gap-4">
                            <div className="h-px flex-1 bg-[#D8C2D6]"></div>
                            <span className="text-sm text-[#7D557A]">or</span>
                            <div className="h-px flex-1 bg-[#D8C2D6]"></div>
                        </div>

                        {/* GOOGLE LOGIN */}
                        <Button
                            variant="outline"
                            className="h-12 w-full rounded-xl border-[#D8C2D6] bg-white text-[#1F1220] transition hover:bg-[#F1E4EF] hover:text-[#1F1220]"
                        >
                            <span className="text-lg font-bold text-[#8A5F88]">G</span>
                            Sign in with Google
                        </Button>

                        {/* CREATE ACCOUNT */}
                        <p className="mt-4 text-sm text-[#7D557A]">
                            Don't have an account?{" "}
                            <a
                                onClick={onSignup}
                                className="cursor-pointer font-semibold text-[#6B4A6C] hover:text-[#1F1220] hover:underline"
                            >
                                Create account
                            </a>
                        </p>

                    </CardFooter>

                </Card>
            </div>
        </div>
    );
}
