"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ConsultCards() {
  const cards = [
    {
      title: "Consulta Presencial",
      items: [
        "Atendimento na clínica",
        "Tricoscopia com lupa de aumento",
        "Exames laboratoriais quando necessário",
        "Plano de tratamento detalhado",
        "Terapias feitas no consultório",
      ],
      buttonText: "agendar uma consulta",
      buttonHref: "https://wa.me/5599999999999",
      highlight: true,
    },
  ];

  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`bg-offwhite rounded-3xl p-8 lg:p-12 shadow-card hover:shadow-card-hover transition-all flex flex-col border ${
                card.highlight ? "border-taupe/20" : "border-taupe/10"
              }`}
            >
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#62473c] mb-2">
                Consulta{" "}
                <span className="text-taupe">
                  {card.title.includes("Presencial") ? "Presencial" : "Online"}
                </span>
              </h3>

              <ul className="space-y-4 my-8 flex-grow">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#62473c]/80 text-base leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-taupe before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={card.buttonHref}
                variant="secondary"
                size="md"
                className="w-full"
              >
                {card.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
