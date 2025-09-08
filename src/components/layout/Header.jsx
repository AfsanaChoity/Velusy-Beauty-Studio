"use client"

import { useState } from "react"
import { Search, Bell, ChevronDown, SlidersHorizontal, User, Menu } from "lucide-react"
import Image from "next/image"
import { Avatar, Badge } from "antd"
import { MessageOutlined } from "@ant-design/icons"

const Header = () => {
    const [searchValue, setSearchValue] = useState("")
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigationItems = ["Home", "Booking", "Reward", "Contact Us"]

    const languageOptions = ["English", "French", "German", "Italian"]
    const userMenuItems = ["Profile", "History", "Favorite", "Rewards", "Log Out"]

    return (
        <nav className="bg-slate-800 px-6 py-4 relative">
            <div className="flex items-center justify-between border">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                    
                </div>

                <div>
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            <span className="text-xl font-medium">EN</span>
                            <ChevronDown className="ml-1 w-6 h-6" />
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50">
                                {languageOptions.map((lang, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setIsLanguageOpen(false)}
                                        className="block w-full text-left px-4 py-2 text-xl text-gray-700 hover:bg-gray-100"
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation Menu - Desktop */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-white hover:text-gray-300 transition-colors duration-200 text-xl font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <div className="flex items-center bg-white rounded-full px-4 py-2 w-70">
                            <Search className="text-gray-400 w-4 h-4 mr-3" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
                            />
                            <SlidersHorizontal className="text-gray-400 w-4 h-4 ml-3 cursor-pointer hover:text-gray-600" />
                        </div>
                    </div>

                    

                    {/* Inbox */}
                    <div>
                        <Badge count={1}>
                            <div className="text-white text-3xl">
                                <MessageOutlined />
                            </div>
                        </Badge>
                    </div>

                    {/* Notification Bell */}
                    <div className="relative">
                        <Bell className="text-white w-8 h-8 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
                    </div>

                    {/* User Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            className="flex items-center space-x-3 cursor-pointer hover:bg-slate-700 rounded-lg px-3 py-2 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center border-2 border-white">
                                <User className="w-5 h-5 text-gray-600" />
                            </div>
                            <div className="text-white hidden sm:block">
                                <div className="text-sm font-medium">Hi Miriam</div>
                                <div className="text-xs text-gray-300">7529 E. Pecan St.</div>
                            </div>
                            <ChevronDown className="text-white w-3 h-3" />
                        </button>

                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                {userMenuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setIsUserMenuOpen(false)}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${item === "Log Out" ? "text-red-600" : "text-gray-700"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-gray-300">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 z-40">
                    <div className="px-6 py-4 space-y-4">
                        {/* Mobile Search */}
                        <div className="flex items-center bg-white rounded-full px-4 py-2">
                            <Search className="text-gray-400 w-4 h-4 mr-3" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
                            />
                            <SlidersHorizontal className="text-gray-400 w-4 h-4 ml-3" />
                        </div>

                        {/* Mobile Navigation */}
                        <div className="space-y-2">
                            {navigationItems.map((item, index) => (
                                <a key={index} href="#" className="block text-white hover:text-gray-300 py-2 text-sm font-medium">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay for dropdowns */}
            {(isLanguageOpen || isUserMenuOpen || isMobileMenuOpen) && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={() => {
                        setIsLanguageOpen(false)
                        setIsUserMenuOpen(false)
                        setIsMobileMenuOpen(false)
                    }}
                />
            )}
        </nav>
    )
}

export default Header;
