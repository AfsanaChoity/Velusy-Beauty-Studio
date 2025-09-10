"use client"

import { useEffect, useState } from "react"
import { Search, Bell, ChevronDown, SlidersHorizontal, User, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Cookies from 'js-cookie'

const Header = () => {
    const [searchValue, setSearchValue] = useState("")
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState("Home");

    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    useEffect(() => {
        const langCookie = Cookies.get('googtrans');
        if (langCookie) {
            // Ensure cookie value is valid before splitting
            const langParts = langCookie.split('/');
            if (langParts.length > 2) {
                const lang = langParts[2].toUpperCase();
                // Find the corresponding language option to get the short code
                const langOption = languageOptions.find(opt => opt.code.toUpperCase() === lang);
                if (langOption) {
                    setSelectedLanguage(langOption.short);
                }
            }
        }
    }, []);

    const navigationItems = [
        { name: "Home", path: "/" },
        { name: "Booking", path: "/booking" },
        { name: "Reward", path: "/reward" },
        { name: "Contact Us", path: "/contact" }
    ]
    const languageOptions = [
        { code: "en", name: "English", short: "EN" },
        { code: "fr", name: "French", short: "FR" },
        { code: "de", name: "German", short: "DE" },
        { code: "it", name: "Italian", short: "IT" }
    ]

    const userMenuItems = [
        { name: "Profile", icon: "👤", path: "/profile" },
        { name: "History", icon: "📋", path: "/history" },
        { name: "Favorite", icon: "❤️", path: "/favorites" },
        // { name: "Rewards", icon: "🎁" },
        // { name: "Settings", icon: "⚙️" },
        { name: "Log Out", icon: "🚪", danger: true }
    ]

    // 2. Create the function to handle language change
    const handleLanguageChange = (langCode, langShort) => {
        Cookies.set('googtrans', `/en/${langCode}`, { path: '/' });
        setSelectedLanguage(langShort);
        setIsLanguageOpen(false);
        window.location.reload();
    };

    // logout function
    const handleLogout = () => {
        console.log("Logout action triggered!");

        setIsUserMenuOpen(false);
    };

    const Badge = ({ count, children, size = "small" }) => (
        <div className="relative inline-block">
            {children}
            {count > 0 && (
                <div className={`absolute -top-1 -right-1 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs min-w-5 h-5 ${size === 'large' ? 'min-w-6 h-6 text-sm' : ''}`}>
                    {count > 99 ? '99+' : count}
                </div>
            )}
        </div>
    )

    return (
        <>
            <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative z-50">
                <div className="max-w-7xl mx-auto px-4  xl:px-8 ">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="">

                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={88}
                                    height={68}
                                    className=""
                                    priority
                                />


                            </Link>

                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    onClick={() => setActiveItem(item.name)}
                                    className={`text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 hover:bg-slate-700/50 hover:shadow-lg hover:scale-105 cursor-pointer
                                        ${activeItem === item.name ? 'underline font-semibold' : ''} `}

                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center  xl:gap-4 ">
                            {/* Search Bar - Hidden on mobile */}
                            <div className="hidden md:block">
                                <div className="relative">
                                    <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-4 py-2.5 w-50 shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-[#B3BAB9] focus-within:border-[#B3BAB9] transition-all duration-200">
                                        <Search className="text-gray-400 w-4 h-4 mr-3 flex-shrink-0" />
                                        <input
                                            type="text"
                                            placeholder="Search category"
                                            value={searchValue}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            className="w-36 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                                        />
                                        {/* <button className="ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200">
                                            <SlidersHorizontal className="text-gray-400 w-4 h-4 hover:text-gray-600" />
                                        </button> */}
                                    </div>
                                </div>
                            </div>

                            {/* Language Selector */}
                            <div className="relative hidden sm:block">
                                <button
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="cursor-pointer flex items-center text-gray-200 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-lg transition-all duration-200"
                                >
                                    <span className="text-sm font-medium">{selectedLanguage}</span>
                                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isLanguageOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100 backdrop-blur-sm">
                                        {languageOptions.map((lang, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleLanguageChange(lang.code, lang.short)}
                                                className="cursor-pointer flex items-center justify-between w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#E9EBF8] hover:text-[#595959] transition-colors duration-200"
                                            >
                                                <span>{lang.name}</span>
                                                <span className="text-xs text-gray-400">{lang.code}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Messages */}
                            <div className="hidden sm:block">
                                <Badge count={3}>
                                    <button className="cursor-pointer text-gray-300 hover:text-white hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-200 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                                        </svg>
                                    </button>
                                </Badge>
                            </div>

                            {/* Notifications */}
                            <div className="hidden sm:block">
                                <Badge count={5}>
                                    <button className="cursor-pointer text-gray-300 hover:text-white hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-200 hover:scale-110">
                                        <Bell className="w-6 h-6" />
                                    </button>
                                </Badge>
                            </div>

                            {/* Language selector for mobile device */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="cursor-pointer flex items-center text-gray-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-lg transition-all duration-200"
                                >
                                    <span className="text-sm font-medium mr-1">EN</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isLanguageOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100 backdrop-blur-sm">
                                        {languageOptions.map((lang, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleLanguageChange(lang.code, lang.short)}
                                                className="cursor-pointer flex items-center justify-between w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <span>{lang.name}</span>
                                                <span className="text-xs text-gray-400">{lang.code}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* User Profile */}
                            <div className="relative ">
                                <button
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="cursor-pointer flex items-center space-x-3 hover:bg-slate-700/50 rounded-xl pl-2 lg:pl-3  py-2  transition-all duration-200 hover:shadow-lg"
                                >
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#E9EBF8] rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                                        <User className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                                    </div>
                                    <div className="text-white hidden xl:block">
                                        <div className="text-sm font-medium">Hi Miriam</div>
                                        <div className="text-xs text-gray-300">Premium Member</div>
                                    </div>
                                    <ChevronDown className={`text-gray-300 w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isUserMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100 backdrop-blur-sm">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10  bg-[#E9EBF8] rounded-full flex items-center justify-center">
                                                    <User className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900">Miriam Johnson</div>
                                                    <div className="text-xs text-gray-500">Premium Member</div>
                                                </div>
                                            </div>
                                        </div>
                                        {userMenuItems.map((item, index) =>
                                            item.path ? (
                                                <Link
                                                    key={index}
                                                    href={item.path}
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className={`cursor-pointer flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200`}
                                                >
                                                    <span className="mr-3 text-base">{item.icon}</span>
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <button
                                                    key={index}
                                                    onClick={item.action === 'logout' ? handleLogout : () => setIsUserMenuOpen(false)}
                                                    className={`cursor-pointer flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors duration-200 ${item.danger ? "text-red-600 hover:bg-red-50" : "text-gray-700"}`}
                                                >
                                                    <span className="mr-3 text-base">{item.icon}</span>
                                                    {item.name}
                                                </button>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="cursor-pointer text-gray-300 hover:text-white hover:bg-slate-700/50 p-2 rounded-lg transition-all duration-200"
                                >
                                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
                        <div className="px-4 py-6 space-y-6">
                            {/* Mobile Search */}
                            <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg">
                                <Search className="text-gray-400 w-4 h-4 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search category"
                                    className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                                />
                                <SlidersHorizontal className="text-gray-400 w-4 h-4 ml-3" />
                            </div>

                            {/* Mobile Navigation */}
                            <div className="space-y-2">
                                {navigationItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block text-white hover:text-blue-400 py-3 px-2 text-base font-medium border-b border-slate-700/50 hover:bg-slate-700/30 rounded-lg transition-all duration-200"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Mobile Actions */}
                            <div className="flex items-center justify-around pt-4 border-t border-slate-700">
                                <Badge count={3}>
                                    <button className="cursor-pointer text-gray-300 hover:text-white p-3 hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                                        </svg>
                                    </button>
                                </Badge>
                                <Badge count={5}>
                                    <button className="cursor-pointer text-gray-300 hover:text-white p-3 hover:bg-slate-700/50 rounded-lg transition-all duration-200">
                                        <Bell className="w-6 h-6" />
                                    </button>
                                </Badge>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for dropdowns */}
            {(isLanguageOpen || isUserMenuOpen || isMobileMenuOpen) && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => {
                        setIsLanguageOpen(false)
                        setIsUserMenuOpen(false)
                        setIsMobileMenuOpen(false)
                    }}
                />
            )}
        </>
    )
}

export default Header