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
export default function RegisterDemo() {
    return (
        <div className="min-h-screen flex bg-[#F5E8D8">

            { }
            <div className="hidden md:flex w-1/2 relative overflow-hidden">

                <img
                    src="/workspace.jpg"
                    alt="Workspace"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                { }
                <div className="absolute inset-0 bg-[#4E2A16]/65"></div>

                { }
                <div className="relative z-10 flex flex-col justify-between p-10 w-full">

                    { }
                    <h1 className="text-white text-2xl font-bold tracking-wide">
                        Pulse<span className="text-[#C49A76">Works-AI</span>
                    </h1>

                    { }
                    <div className="mb-10 text-white">

                        <p className="text-[#C49A76] text-sm tracking-[4px] mb-4 font-medium">
                            BEGIN YOUR JOURNEY
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-lg">
                            Build better habits. Create your own rhythm.
                        </h2>

                        <p className="text-[#F5E8D8] mt-5 max-w-md leading-7">
                            A fresh start begins with one small step.
                            Create your account and make space for the things that matter.
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

            { }
            <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 py-10 bg-[#F5E8D8">

                <Card className="w-full max-w-md bg-transparent border-none shadow-none">

                    { }
                    <CardHeader className="space-y-3">

                        { }
                        <div className="md:hidden mb-3">
                            <h1 className="text-2xl font-bold text-[#6E3511">
                                Focus<span className="text-[#9B6A45">Flow.</span>
                            </h1>
                        </div>

                        <CardTitle className="text-3xl font-bold text-[#4E2A16">
                            Create an account
                        </CardTitle>

                        <CardDescription className="text-[#9B6A45] text-sm">
                            Enter your details to get started with FocusFlow
                        </CardDescription>

                    </CardHeader>

                    { }
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-5">

                                { }
                                <div className="grid gap-2">
                                    <Label htmlFor="fullname" className="text-[#4E2A16">
                                        Full Name
                                    </Label>

                                    <Input
                                        id="fullname"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                        className="h-12 rounded-xl bg-white/80 border-[#C49A76]/50 text-[#4E2A16] placeholder:text-[#9B6A45]/60 focus-visible:ring-[#9B6A45"
                                    />
                                </div>

                                { }
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-[#4E2A16">
                                        Email
                                    </Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        className="h-12 rounded-xl bg-white/80 border-[#C49A76]/50 text-[#4E2A16] placeholder:text-[#9B6A45]/60 focus-visible:ring-[#9B6A45"
                                    />
                                </div>

                                {/* PASSWORD */}
                                <div className="grid gap-2">
                                    <Label htmlFor="password" className="text-[#4E2A16">
                                        Password
                                    </Label>

                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Create a password"
                                        required
                                        className="h-12 rounded-xl bg-white/80 border-[#C49A76]/50 text-[#4E2A16] placeholder:text-[#9B6A45]/60 focus-visible:ring-[#9B6A45"
                                    />
                                </div>

                                { }
                                <div className="grid gap-2">
                                    <Label htmlFor="confirmPassword" className="text-[#4E2A16">
                                        Confirm Password
                                    </Label>

                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Re-enter your password"
                                        required
                                        className="h-12 rounded-xl bg-white/80 border-[#C49A76]/50 text-[#4E2A16] placeholder:text-[#9B6A45]/60 focus-visible:ring-[#9B6A45"
                                    />
                                </div>

                                { }
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        required
                                        className="accent-[#6E3511] w-4 h-4 mt-1"
                                    />

                                    <Label
                                        htmlFor="terms"
                                        className="text-sm text-[#9B6A45] font-normal leading-5"
                                    >
                                        I agree to the Terms of Service and Privacy Policy
                                    </Label>
                                </div>

                                { }
                                <Button
                                    type="submit"
                                    className="w-full h-12 rounded-xl bg-[#4E2A16] hover:bg-[#6E3511] text-[#F5E8D8] font-medium transition duration-300 shadow-md"
                                >
                                    Create Account →
                                </Button>

                            </div>
                        </form>
                    </CardContent>

                    { }
                    <CardFooter className="flex-col gap-3">

                        { }
                        <div className="flex items-center gap-4 w-full my-2">
                            <div className="flex-1 h-px bg-[#C49A76]/50"></div>
                            <span className="text-[#9B6A45] text-sm">or</span>
                            <div className="flex-1 h-px bg-[#C49A76]/50"></div>
                        </div>

                        { }
                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl bg-[#FFFDF9] border-[#C49A76]/50 text-[#4E2A16] hover:bg-[#EAD5BF] hover:text-[#4E2A16] transition"
                        >
                            <span className="text-lg font-bold text-[#8B5E34">
                                G
                            </span>
                            Sign up with Google
                        </Button>

                        { }
                        <p className="text-sm text-[#9B6A45] mt-4">
                            Already have an account?{" "}
                            <a
                                href="/"
                                className="text-[#6E3511] font-semibold hover:text-[#4E2A16] hover:underline"
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