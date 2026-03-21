"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "会社概要" },
  { href: "#properties", label: "施設紹介" },
  { href: "#services", label: "事業内容" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-serif text-xl font-medium tracking-widest uppercase transition-colors duration-300 ${
              isScrolled ? "text-ocean-dark" : "text-white"
            }`}
          >
            Good Day Mate
          </span>
          <span
            className={`text-[10px] font-sans tracking-[0.25em] uppercase transition-colors duration-300 ${
              isScrolled ? "text-gold" : "text-gold-light"
            }`}
          >
            Okinawa Luxury Stay
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-sans tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-ocean-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#properties"
            className={`text-[11px] font-sans tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
              isScrolled
                ? "border-ocean text-ocean hover:bg-ocean hover:text-white"
                : "border-white/60 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            予約する
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-ocean-dark" : "text-white"
          }`}
          aria-label="メニュー"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[11px] font-sans tracking-[0.2em] uppercase text-ocean-dark py-2 border-b border-gray-100 hover:text-ocean-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#properties"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary text-center mt-2"
          >
            予約する
          </a>
        </nav>
      </div>
    </header>
  );
}
