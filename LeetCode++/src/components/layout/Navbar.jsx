import { Search, Bell, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {

    const navLinks = [
        { name: 'Problems', href: '#' },
        { name: 'Contest', href: '#' },
        { name: 'Discuss', href: '#' },
        { name: 'Interview', href: '#' },
        { name: 'Store', href: '#' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1117] border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-14 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#f9b13f] rounded flex items-center justify-center text-black font-bold text-xl">
                                L
                            </div>
                            <span className="text-white font-semibold text-2xl tracking-tight">
                                LeetCode
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                            {navLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="hover:text-white transition-colors hover:underline underline-offset-4"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-8">
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search problems, contests, etc."
                                className="w-full bg-[#1a1c23] border border-gray-700 rounded-lg pl-11 py-2 text-sm focus:outline-none focus:border-[#f9b13f] text-gray-200 placeholder-gray-500"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {/* Premium Button */}
                        <a
                            href="#"
                            className="hidden md:block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded hover:brightness-110 transition"
                        >
                            Premium
                        </a>

                        {/* Icons */}
                        <button className="p-2 text-gray-400 hover:text-white transition">
                            <Bell size={20} />
                        </button>

                        <button className="p-2 text-gray-400 hover:text-white transition">
                            <User size={20} />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-white"
                        >
                            {false ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {false && (
                <div className="md:hidden border-t border-gray-800 bg-[#0f1117]">
                    <div className="px-4 py-4 space-y-4">
                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-[#1a1c23] border border-gray-700 rounded-lg pl-11 py-3 text-sm focus:outline-none"
                            />
                        </div>

                        {/* Mobile Links */}
                        <div className="flex flex-col gap-3 text-gray-300">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="py-2 px-3 hover:bg-gray-800 rounded-lg transition"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-gray-800">
                            <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-lg">
                                Upgrade to Premium
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}