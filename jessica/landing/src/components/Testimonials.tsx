'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  procedure: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Maria Silva',
    procedure: 'Implante Capilar FUE',
    rating: 5,
    text: 'Excelente profissional! O resultado superou minhas expectativas. Recuperei minha autoestima e confiança. Todo o processo foi muito tranquilo e a equipe é extremamente atenciosa.',
    date: 'Novembro 2024'
  },
  {
    name: 'João Santos',
    procedure: 'Transplante Capilar',
    rating: 5,
    text: 'Muito satisfeito com o procedimento. A Dra. Jessica é muito cuidadosa e explica cada etapa com clareza. O acompanhamento pós-operatório foi impecável.',
    date: 'Outubro 2024'
  },
  {
    name: 'Ana Paula Costa',
    procedure: 'Micropigmentação Capilar',
    rating: 5,
    text: 'Resultado natural e muito bonito! A técnica é excepcional e o atendimento personalizado fez toda a diferença. Recomendo de olhos fechados.',
    date: 'Setembro 2024'
  },
  {
    name: 'Carlos Eduardo',
    procedure: 'Implante Capilar',
    rating: 5,
    text: 'Após anos procurando um profissional de confiança, finalmente encontrei! O trabalho é impecável e o resultado é totalmente natural. Estou muito feliz.',
    date: 'Agosto 2024'
  },
  {
    name: 'Juliana Martins',
    procedure: 'Tratamento Capilar',
    rating: 5,
    text: 'Profissional extremamente competente e dedicada. O ambiente da clínica é acolhedor e transmite muita confiança. Meu cabelo nunca esteve tão saudável!',
    date: 'Julho 2024'
  },
  {
    name: 'Ricardo Alves',
    procedure: 'Implante FUE',
    rating: 5,
    text: 'Procedimento executado com perfeição. A Dra. Jessica tem um olhar clínico excepcional e conseguiu um resultado muito natural. Valeu cada centavo!',
    date: 'Junho 2024'
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-offwhite border border-taupe/10 rounded-lg p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-gold/40" strokeWidth={1.5} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? 'fill-gold text-gold' : 'text-taupe/20'}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#62473c] leading-relaxed mb-6 text-sm md:text-base">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="pt-4 border-t border-taupe/10">
        <p className="font-medium text-dark mb-1">{testimonial.name}</p>
        <p className="text-sm text-taupe">{testimonial.procedure}</p>
        <p className="text-xs text-taupe/60 mt-1">{testimonial.date}</p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-6 tracking-tight">
            O que dizem nossos <span className="text-taupe">pacientes</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-lg text-[#62473c] leading-relaxed">
            Histórias reais de transformação e confiança renovada.
            Cada depoimento reflete nosso compromisso com a excelência.
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#62473c] mb-6">
            Faça parte das nossas histórias de sucesso
          </p>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-taupe border border-gold/20 text-white rounded-full hover:bg-taupe/90 shadow-soft hover:shadow-premium transition-all duration-300 active:translate-y-[1px] font-medium"
          >
            Agende sua consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
}
