"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "(41) 99177-4333",
      href: "https://wa.me/554191774333",
    },
    {
      icon: Mail,
      label: "jessicamayaratricologia@gmail.com",
      href: "mailto:jessicamayaratricologia@gmail.com",
    },
    {
      icon: Instagram,
      label: "jessicamayaratricologista",
      href: "https://instagram.com/jessicamayaratricologista",
    },
    {
      icon: MapPin,
      label: "Av. República Argentina, 1505 Sala 1104 Água Verde Curitiba/PR CEP 80620-010",
      href: "https://maps.google.com/?q=Av.+República+Argentina+1505+Curitiba",
    },
  ];

  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#62473c] leading-tight mb-4">
            Entre em <span className="text-taupe">contato</span>
          </h2>
          <p className="text-lg text-[#62473c]/70 max-w-2xl mx-auto">
            Estou aqui para ajudar você. Entre em contato através dos canais abaixo.
          </p>
        </motion.div>

        {/* Cards de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-offwhite rounded-2xl p-6 flex flex-col items-center text-center shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 group border border-taupe/10"
            >
              <div className="w-16 h-16 bg-taupe/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-taupe/20 transition-colors border border-taupe/20">
                <item.icon className="w-7 h-7 text-taupe" strokeWidth={1.5} />
              </div>
              <p className="text-[#62473c] text-sm leading-snug font-medium">
                {item.label}
              </p>
            </a>
          ))}
        </motion.div>

        {/* Mapa do Google */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-[450px] rounded-3xl overflow-hidden shadow-premium border border-taupe/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0234!2d-49.2638!3d-25.4493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4a8c5e5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAv.+Rep%C3%BAblica+Argentina%2C+1505+-+%C3%81gua+Verde%2C+Curitiba+-+PR!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
