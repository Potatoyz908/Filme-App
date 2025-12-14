"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#topo", label: "Início" },
    { href: "#procedimentos", label: "Procedimentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-xl shadow-soft"
          : "bg-cream/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="font-serif text-2xl md:text-3xl font-bold text-taupe tracking-brand">
          Jéssica Mayara
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#62473c] hover:text-taupe transition-colors tracking-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          as="a"
          href="https://wa.me/5599999999999"
          variant="secondary"
          size="sm"
          className="hidden md:flex"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#62473c] hover:text-taupe transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-taupe/10">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#62473c] hover:text-taupe transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="https://wa.me/5599999999999"
              variant="secondary"
              size="md"
              className="w-full justify-center mt-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
