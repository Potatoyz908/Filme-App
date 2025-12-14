"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfessionalCTA() {
  const tiles = [
    {
      image: "/course-tile.jpg",
      title: "CURSO PRESENCIAL",
      subtitle: "TRICO divino",
      href: "https://wa.me/5599999999999",
    },
    {
      image: "/consult-tile.jpg",
      title: "CONSULTORIA ONLINE",
      subtitle: "CONSULTO RIA®",
      href: "https://wa.me/5599999999999",
    },
  ];

  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
              Alcance seu máximo potencial como{" "}
              <span className="text-rose">profissional!</span>
            </h2>

            <div className="space-y-4 text-gray-dark/80 mb-8">
              <p className="text-base lg:text-lg leading-relaxed">
                A Dra. Jéssica oferece{" "}
                <strong className="text-gray-dark font-semibold">
                  curso presencial
                </strong>{" "}
                para quem deseja se aprofundar na tricologia e entender melhor a
                atuação clínica na área.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Além de{" "}
                <strong className="text-gray-dark font-semibold">
                  consultoria individual
                </strong>{" "}
                para profissionais da área que buscam aprimorar o raciocínio
                clínico e melhorar os resultados com seus pacientes.
              </p>
            </div>
          </motion.div>

          {/* Coluna Direita - Tiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {tiles.map((tile, index) => (
              <motion.a
                key={tile.title}
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark via-gray-dark/60 to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="text-xs font-medium tracking-wider mb-1 opacity-90">
                    {tile.title}
                  </div>
                  <div className="font-serif text-2xl font-bold leading-tight">
                    {tile.subtitle}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
