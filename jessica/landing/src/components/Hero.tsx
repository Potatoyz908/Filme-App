"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream pt-20 pb-0 flex flex-col relative overflow-hidden">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      
      {/* Foto Wallpaper - Estilo da doutora fazendo procedimento */}
      <div className="relative w-full h-[70vh] md:h-[75vh]">
        <Image
          src="/hero-doctor.jpg"
          alt="Dra. Jéssica Mayara realizando procedimento na clínica"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradiente suave na parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream"></div>
      </div>

      {/* Área de CTA logo abaixo da foto */}
      <div className="bg-cream py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#62473c]">
              Saúde capilar começa com um{" "}
              <span className="text-taupe">olhar atento.</span>
            </h1>

            <p className="text-lg text-[#62473c]/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Com escuta atenta e acompanhamento personalizado, tratamos as
              causas, não apenas os sintomas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  as="a"
                  href="https://wa.me/5599999999999"
                  variant="secondary"
                  size="lg"
                >
                  Agendar uma consulta
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  as="a"
                  href="#procedimentos"
                  variant="secondary"
                  size="lg"
                >
                  Ver procedimentos
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
