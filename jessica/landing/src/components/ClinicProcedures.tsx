"use client";

import { motion } from "framer-motion";

export default function ClinicProcedures() {
  return (
    <section className="bg-gradient-to-br from-dark via-slate to-dark py-24 relative overflow-hidden">
      {/* Detalhe dourado decorativo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gold/60 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Underline dourado decorativo */}
            <div className="absolute -left-6 top-8 w-1 h-20 bg-gold/40 rounded-full hidden lg:block"></div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-tight relative">
              Procedimentos
              <br />
              em <span className="text-taupe relative inline-block">
                Clínica
                <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gold/60"></span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-offwhite/90"
          >
            <p className="text-base lg:text-lg leading-relaxed">
              Voltados para o tratamento de diversas disfunções capilares, como
              queda de cabelo, afinamento dos fios, oleosidade excessiva, caspa,
              dermatites e outros desequilíbrios do couro cabeludo.
            </p>
            <p className="text-base lg:text-lg leading-relaxed">
              Todos os tratamentos são personalizados, definidos após uma
              avaliação completa em consulta, de acordo com as necessidades e
              objetivos de cada paciente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
