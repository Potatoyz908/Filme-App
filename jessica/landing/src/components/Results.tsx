'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeAfter {
  before: string;
  after: string;
  alt: string;
}

interface ResultItem {
  images: BeforeAfter[];
}

const results: ResultItem[] = [
  {
    images: [
      {
        before: '/results/result-1-before.jpg',
        after: '/results/result-1-after.jpg',
        alt: 'Resultado 1'
      },
      {
        before: '/results/result-1-before-2.jpg',
        after: '/results/result-1-after-2.jpg',
        alt: 'Resultado 1 - Ângulo 2'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-2-before.jpg',
        after: '/results/result-2-after.jpg',
        alt: 'Resultado 2'
      },
      {
        before: '/results/result-2-before-2.jpg',
        after: '/results/result-2-after-2.jpg',
        alt: 'Resultado 2 - Ângulo 2'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-3-before.jpg',
        after: '/results/result-3-after.jpg',
        alt: 'Resultado 3'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-4-before.jpg',
        after: '/results/result-4-after.jpg',
        alt: 'Resultado 4'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-5-before.jpg',
        after: '/results/result-5-after.jpg',
        alt: 'Resultado 5'
      },
      {
        before: '/results/result-5-before-2.jpg',
        after: '/results/result-5-after-2.jpg',
        alt: 'Resultado 5 - Ângulo 2'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-6-before.jpg',
        after: '/results/result-6-after.jpg',
        alt: 'Resultado 6'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-7-before.jpg',
        after: '/results/result-7-after.jpg',
        alt: 'Resultado 7'
      }
    ]
  },
  {
    images: [
      {
        before: '/results/result-8-before.jpg',
        after: '/results/result-8-after.jpg',
        alt: 'Resultado 8'
      }
    ]
  }
];

function ResultCard({ item, index }: { item: ResultItem; index: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = item.images.length > 1;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % item.images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative aspect-[4/3] bg-offwhite rounded-lg overflow-hidden border border-taupe/10 shadow-card hover:shadow-card-hover transition-all duration-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            {/* Antes */}
            <div className="absolute inset-0">
              <img
                src={item.images[currentIndex].before}
                alt={`${item.images[currentIndex].alt} - Antes`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-dark/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                Antes
              </div>
            </div>

            {/* Depois */}
            <div className="absolute inset-0 clip-path-polygon-[0_0,50%_0,50%_100%,0_100%]">
              <img
                src={item.images[currentIndex].after}
                alt={`${item.images[currentIndex].alt} - Depois`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-taupe/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                Depois
              </div>
            </div>

            {/* Divisor central */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-lg -translate-x-1/2 z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-premium flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-taupe rounded-full" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navegação */}
        {hasMultiple && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-soft flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-20"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={18} className="text-dark" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-soft flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-20"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={18} className="text-dark" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {item.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="absolute top-3 right-3 bg-dark/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium z-20">
              {currentIndex + 1}/{item.images.length}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="resultados" className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark mb-6 tracking-tight">
            Resultados <span className="text-taupe">reais e visíveis</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-lg text-[#62473c] leading-relaxed">
            Cada transformação conta uma história única de confiança renovada.
            Confira os resultados naturais e duradouros de nossos pacientes.
          </p>
        </motion.div>

        {/* Grid de Resultados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((item, index) => (
            <ResultCard key={index} item={item} index={index} />
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
          <p className="text-[#62473c] text-sm mb-4">
            *Resultados podem variar de acordo com cada caso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
