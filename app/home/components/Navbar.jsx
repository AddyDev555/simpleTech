"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-950 p-4 fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">SimplerTechnologies</div>

                {/* Hamburger Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-white focus:outline-none"
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/home" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">About</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</Link>
                    <Button onClick={() => {
                        sessionStorage.removeItem("user");
                        window.location.href = "/";
                    }} className="text-white hover:text-white hover:bg-red-400 cursor-pointer bg-red-500 px-3 py-2">Logout</Button>
                </div>
            </div>

            {/* Fullscreen Overlay Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-blue-950 bg-opacity-95 z-50 p-6">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white"
                        >
                            <X size={30} />
                        </button>
                    </div>

                    <div className="flex flex-col mt-10 space-y-6 text-white text-xl font-medium">
                        <Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        <Button onClick={() => {
                            sessionStorage.removeItem("user");
                            window.location.href = "/";
                        }} className="text-white hover:text-white hover:bg-red-400 cursor-pointer bg-red-500 px-3 py-2">Logout</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
