"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSplit() {
  return (
    <section className="bg-cream py-0">
      <div className="max-w-7xl mx-auto">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Coluna Esquerda - Foto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative min-h-[400px] lg:min-h-[700px]"
          >
            <Image
              src="/about-photo.jpg"
              alt="Dra. Jéssica Mayara"
              fill
              className="object-cover"
            />
            {/* Overlay suave para criar contraste */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-dark/10"></div>
          </motion.div>

          {/* Coluna Direita - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark to-slate text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Detalhe dourado decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
            
            <div className="inline-block bg-taupe-light/20 text-taupe-light border border-taupe-light/40 px-5 py-2 rounded-full text-sm font-medium mb-8 w-fit tracking-brand">
              Sobre Mim
            </div>

            <div className="space-y-6 text-white/90 leading-relaxed relative z-10">
              <p className="text-base lg:text-lg">
                Sempre acreditei que cuidar da saúde capilar vai muito além da
                estética. Envolve autoestima, identidade e, principalmente,{" "}
                <strong className="text-white font-semibold">escuta</strong>.
              </p>
              <p className="text-base lg:text-lg">
                Por isso,{" "}
                <strong className="text-white font-semibold">
                  meu atendimento é pautado em empatia, escuta ativa e
                  protocolos personalizados
                </strong>
                , pensados para cada paciente de forma única.
              </p>
              <p className="text-base lg:text-lg">
                Sou{" "}
                <strong className="text-white font-semibold">
                  Biomédica Esteta
                </strong>
                , pós-graduada em{" "}
                <strong className="text-white font-semibold">
                  Estética Avançada
                </strong>{" "}
                e especialista em{" "}
                <strong className="text-white font-semibold">Tricologia</strong>
                . Me formei pela Universidade Positivo, com especialização em
                Terapia Capilar pela Comunidade Katzer, e sigo em constante
                atualização para oferecer tratamentos eficazes, seguros e
                humanizados.
              </p>
              <p className="text-base lg:text-lg">
                Participo ativamente de{" "}
                <strong className="text-white font-semibold">
                  Congressos e Conferências
                </strong>{" "}
                na área da tricologia para me manter atualizada. Participei do
                Congresso Internacional de Tricologia em São Paulo em 2024, do
                Congresso de Saúde Capilar em Curitiba em 2025 e também do
                World Trichology Conference em Nova Iorque em 2025.
              </p>
              <p className="text-base lg:text-lg">
                No consultório, uno ciência, tecnologia e sensibilidade para
                tratar disfunções do couro cabeludo e dos fios,{" "}
                <strong className="text-white font-semibold">
                  promovendo resultados reais
                </strong>
                . Mais do que tratar, meu propósito é acolher, para que cada
                pessoa se sinta segura, compreendida e confiante durante todo o
                processo.
              </p>
            </div>

            <div className="mt-10 relative z-10">
              <div className="font-serif text-3xl text-taupe-light italic">
                Jéssica Mayara
              </div>
              <div className="text-sm text-white/60 mt-1 tracking-brand">
                Dra. Jéssica Mayara
              </div>
              <div className="text-xs text-white/50 mt-1">CRBm-PR 2110</div>
            </div>
          </motion.div>
        </div>

        {/* Card de Certificação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto -mt-12 relative z-10 px-6"
        >
          <div className="bg-offwhite rounded-3xl p-8 md:p-10 shadow-premium relative overflow-hidden border border-taupe/10">
            {/* Badge/Selo no canto */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center shadow-soft border border-gold/20">
              <div className="text-2xl">🍁</div>
            </div>

            <div className="max-w-3xl">
              <div className="text-xs text-[#62473c]/60 font-medium tracking-wider mb-2 uppercase">
                Dermore Hair Academy (Canada)
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#62473c] mb-4">
                EBFH: evidence based hair fellowship training program
              </h3>
              <p className="text-[#62473c]/80 text-base leading-relaxed">
                Foi aceita em 2025 no programa de Fellowship baseado em
                evidências científicas pela Dr. Jeff Donovan, um dos maiores
                nomes na área de tricologia. São 2 anos de especialização
                completa e voltada exclusivamente para profissionais da saúde,
                com conteúdos aprofundados em saúde baseada em evidências,
                tricoscopia, anamnese, farmacologia, prescrição de home care,
                procedimentos injetáveis, análise laboratorial e
                fotodocumentação.
              </p>
              <p className="text-[#62473c]/80 text-base leading-relaxed mt-4">
                O foco da formação é o desenvolvimento do raciocínio clínico
                para indicação assertiva e individualizada de tratamentos.
              </p>
              <div className="mt-6 inline-block bg-[#62473c] text-white px-6 py-2 rounded-full text-sm font-medium">
                2023-2024
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
