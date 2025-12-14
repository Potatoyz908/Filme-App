"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProcedureGrid() {
  const procedures = [
    {
      image: "/proc1.jpg",
      title: "Microagulhamento",
      description:
        "Estimula o crescimento dos fios e melhora a absorção de ativos",
    },
    {
      image: "/proc2.jpg",
      title: "Mesoterapia",
      description:
        "Aplicação de substâncias específicas diretamente no couro cabeludo para tratar disfunções de forma mais eficaz",
    },
    {
      image: "/proc3.jpg",
      title: "LED Terapia e Fotobiomodulação",
      description:
        "Uso de luzes específicas para estimular o metabolismo do folículo piloso e reduzir inflamações",
    },
    {
      image: "/proc4.jpg",
      title: "Protocolos Combinados",
      description:
        "Tratamentos que integram diferentes técnicas para potencializar os resultados",
    },
  ];

  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {procedures.map((proc, index) => (
            <motion.div
              key={proc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-taupe/10"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={proc.image}
                  alt={proc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-taupe mb-2 md:mb-3">
                  {proc.title}
                </h3>
                <p className="text-[#62473c]/80 text-xs sm:text-sm leading-relaxed">
                  {proc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
