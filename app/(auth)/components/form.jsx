"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export default function Form() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const router = useRouter()

    const signUp = (e) =>{
        e.preventDefault();

        if (!formData.fullName) {
            toast.error("Full Name is required.");
            setFormData({ fullName: "", email: "", password: "" });
            return;
        }
        if (!formData.email) {
            toast.error("Email is required.");
            setFormData({ fullName: "", email: "", password: "" });
            return;
        }
        if (!formData.password) {
            toast.error("Password is required.");
            setFormData({ fullName: "", email: "", password: "" });
            return;
        }
        else{
            toast.success('Signup successful!');
            sessionStorage.setItem("user", JSON.stringify(formData));
            router.push('/home');
            setFormData({ fullName: "", email: "", password: "" });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Left Side Image */}
                <div className="hidden md:block w-1/2">
                    <Image
                        src="/loginImg.jpg"
                        width={500}
                        height={500}
                        alt="Login"
                        className="object-cover h-full w-full"
                    />
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Create Your Account
                    </h2>

                    <form className="flex flex-col space-y-5" onSubmit={signUp}>
                        <div>
                            <Label htmlFor="fullName" className="text-sm">Full Name</Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="John Doe"
                                className="mt-1"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-sm">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="mt-1"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" className="text-sm">Password</Label>
                            <div className="relative mt-1">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="pr-10"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button type="submit" className="mt-4 w-full">
                            Sign Up
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="px-4 text-gray-400 text-sm">or sign up with</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex items-center justify-center w-full border rounded-md p-2 hover:bg-gray-100 transition">
                            <FcGoogle className="w-5 h-5 mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center w-full border rounded-md p-2 hover:bg-gray-100 transition">
                            <FaGithub className="w-5 h-5 mr-2" />
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}