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

export default function CardDemo() {
    return (
        <div className="min-h-screen flex bg-[#F5E8D8]">

            {/* LEFT SIDE */}
            <div className="hidden md:flex w-1/2 relative overflow-hidden">

                {/* Background Image */}
                <img
                    src="/workspace.jpg"
                    alt="Workspace"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Brown Overlay */}
                <div className="absolute inset-0 bg-[#4E2A16]/65"></div>

                {/* Left Content */}
                <div className="relative z-10 flex flex-col justify-between p-10 w-full">

                    {/* Logo */}
                    <h1 className="text-white text-2xl font-bold tracking-wide">
                        Focus<span className="text-[#C49A76]">Flow.</span>
                    </h1>

                    {/* Bottom Text */}
                    <div className="mb-10 text-white">

                        <p className="text-[#C49A76] text-sm tracking-[4px] mb-4 font-medium">
                            YOUR SPACE. YOUR PACE.
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-lg">
                            Ideas grow when you give them space.
                        </h2>

                        <p className="text-[#F5E8D8] mt-5 max-w-md leading-7">
                            Stay focused, organize your thoughts, and make every
                            moment of productivity count.
                        </p>

                        {/* Dots */}
                        <div className="flex gap-2 mt-8">
                            <div className="w-8 h-1.5 bg-[#C49A76] rounded-full"></div>
                            <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
                            <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
                            <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 py-10 bg-[#F5E8D8">

                <Card className="w-full max-w-md bg-transparent border-none shadow-none">

                    {/* HEADER */}
                    <CardHeader className="space-y-3">

                        {/* Mobile Logo */}
                        <div className="md:hidden mb-5">
                            <h1 className="text-2xl font-bold text-[#6E3511]">
                                Focus<span className="text-[#9B6A45]">Flow.</span>
                            </h1>
                        </div>

                        <CardTitle className="text-3xl font-bold text-[#4E2A16]">
                            Login to your account
                        </CardTitle>

                        <CardDescription className="text-[#9B6A45] text-sm">
                            Enter your email below to login to your account
                        </CardDescription>

                        <CardAction>
                            <Button
                                variant="link"
                                className="text-[#6E3511] hover:text-[#4E2A16]"
                            >
                                Sign Up
                            </Button>
                        </CardAction>

                    </CardHeader>

                    {/* FORM CONTENT */}
                    <CardContent>

                        <form>
                            <div className="flex flex-col gap-5">

                                {/* EMAIL */}
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-[#4E2A16]"
                                    >
                                        Email
                                    </Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        className="h-12 rounded-xl bg-white/80 border-[#C49A76]/50 text-[#4E2A16] placeholder:text-[#9B6A45]/60 focus-visible:ring-[#9B6A45]"
                                    />
                                </div>

                                {/* PASSWORD */}
                                <div className="grid gap-2">

                                    <div className="flex items-center">
                                        <Label
                                            htmlFor="password"
                                            className="text-[#4E2A16]"
                                        >
                                            Password
                                        </Label>

                                        <a
                                            href="#"
                                            className="ml-auto text-sm text-[#9B6A45] hover:text-[#4E2A16] hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        className="h-12 rounded-xl bg-white/80 border-[#C49A76]/50 text-[#4E2A16] placeholder:text-[#9B6A45]/60 focus-visible:ring-[#9B6A45]"
                                    />
                                </div>

                                {/* REMEMBER ME */}
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="accent-[#6E3511] w-4 h-4"
                                    />

                                    <Label
                                        htmlFor="remember"
                                        className="text-sm text-[#9B6A45] font-normal"
                                    >
                                        Remember me
                                    </Label>
                                </div>

                            </div>
                        </form>

                    </CardContent>

                    {/* BUTTONS */}
                    <CardFooter className="flex-col gap-3">

                        {/* SIGN IN */}
                        <Button
                            className="w-full h-12 rounded-xl bg-[#4E2A16] hover:bg-[#6E3511] text-[#F5E8D8] font-medium transition duration-300 shadow-md"
                        >
                            Sign in →
                        </Button>

                        {/* DIVIDER */}
                        <div className="flex items-center gap-4 w-full my-3">
                            <div className="flex-1 h-px bg-[#C49A76]/50"></div>
                            <span className="text-[#9B6A45] text-sm">or</span>
                            <div className="flex-1 h-px bg-[#C49A76]/50"></div>
                        </div>

                        {/* GOOGLE LOGIN */}
                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl bg-[#FFFDF9] border-[#C49A76]/50 text-[#4E2A16] hover:bg-[#EAD5BF] hover:text-[#4E2A16] transition"
                        >
                            <span className="text-lg font-bold text-[#8B5E34]">
                                G
                            </span>
                            Sign in with Google
                        </Button>

                        {/* CREATE ACCOUNT */}
                        <p className="text-sm text-[#9B6A45] mt-5">
                            Don't have an account?{" "}
                            <a
                                href="#"
                                className="text-[#6E3511] font-semibold hover:text-[#4E2A16] hover:underline"
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