"use client";

import { motion } from "framer-motion";
import { Award, HelpCircle, MapPin, MessageSquare, MessageCircle } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: Award,
      label: "Resultados",
      href: "#resultados",
    },
    {
      icon: MapPin,
      label: "Localização",
      href: "#contato",
    },
    {
      icon: MessageSquare,
      label: "Depoimentos",
      href: "#depoimentos",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5599999999999",
    },
  ];

  return (
    <section className="bg-cream py-12 md:py-16 border-y border-taupe/10">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-start md:justify-center items-center gap-8 md:gap-12 pb-2">
            {highlights.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center gap-3 min-w-[90px] flex-shrink-0 group"
              >
                <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] rounded-full bg-offwhite border-2 border-taupe/40 group-hover:border-taupe group-hover:shadow-premium transition-all duration-300 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-taupe" strokeWidth={1.5} />
                </div>
                <span className="text-xs md:text-sm font-medium text-[#62473c] text-center tracking-brand whitespace-nowrap">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
