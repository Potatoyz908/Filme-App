"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const timeline = [
    {
      institution: "Comunidade Katzer",
      title: "Terapia Capilar",
      description:
        "Curso com foco na identificação de disfunções do couro cabeludo e diferentes tipos de alopecia. A formação trouxe bases sólidas em tricoscopia, análise capilar e aplicação prática de recursos como argilas, óleos essenciais, alta frequência, microagulhamento, mesoterapia e fotobiomodulação.",
      period: "2022-2023",
    },
    {
      institution: "ISEEC",
      title: "Estética Avançada",
      description:
        "Imersão presencial de três dias em Maringá com a tricologista Lívia Viscari, referência nacional na área. Acompanhei de perto sua rotina clínica, do atendimento à prescrição, com enfoque em processos práticos de diagnóstico, planejamento terapêutico e gestão de casos.",
      period: "2018-2020",
    },
    {
      institution: "Universidade Positivo",
      title: "Biomedicina",
      description:
        "Graduada em Biomedicina, com foco na compreensão das doenças humanas, suas causas e métodos de diagnóstico laboratorial. Durante a formação, atuei em dois estágios de destaque: no laboratório de Genética Forense da Polícia Científica do Paraná, e no Hospital Cruz Vermelha.",
      period: "2014-2017",
    },
    {
      institution: "Comunidade Katzer",
      title: "Especialização Avançada",
      description:
        "Especialização completa e voltada exclusivamente para profissionais da saúde, com conteúdos aprofundados em saúde baseada em evidências, tricoscopia, anamnese, farmacologia, prescrição de home care, procedimentos injetáveis, análise laboratorial e fotodocumentação.",
      period: "2023-2024",
    },
  ];

  return (
    <section className="bg-cream py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title + item.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-offwhite rounded-3xl p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all flex flex-col md:flex-row md:items-start gap-6 border border-taupe/10"
            >
              {/* Conteúdo à esquerda */}
              <div className="flex-1 space-y-3">
                <div className="text-xs text-[#62473c]/60 font-medium tracking-wider uppercase">
                  {item.institution}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#62473c] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#62473c]/80 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Ano à direita */}
              <div className="flex-shrink-0 md:text-right">
                <div className="font-serif text-4xl md:text-5xl font-bold text-taupe">
                  {item.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
