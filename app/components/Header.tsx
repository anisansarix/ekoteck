"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  /* Handle scroll */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const shouldBlur = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBlur
          ? "bg-black/80 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image
              src="/logo.png"
              alt="Ekoteck Enterprise"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white/90">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="#about" className="hover:text-accent">About Us</Link>
          <Link href="#services" className="hover:text-accent">Services</Link>
          <Link href="#products" className="hover:text-accent">Products</Link>
          <Link href="#contact" className="hover:text-accent">Contact Us</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-accent text-[#0E1714] font-bold py-3 px-6 rounded-lg hover:shadow-lg transition"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 space-y-4 text-white"
        >
          {[
            { href: "/", label: "Home" },
            { href: "#about", label: "About Us" },
            { href: "#services", label: "Services" },
            { href: "#products", label: "Products" },
            { href: "#contact", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-lg hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
