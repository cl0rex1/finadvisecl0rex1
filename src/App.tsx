import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CoverSlide } from './components/CoverSlide';
import { GoalSlide } from './components/GoalSlide';
import { FeaturesSlide } from './components/FeaturesSlide';
import { ArchitectureSlide } from './components/ArchitectureSlide';
import { AIAdvisorSlide } from './components/AIAdvisorSlide';
import { DatabaseSlide } from './components/DatabaseSlide';
import { InterfaceSlide } from './components/InterfaceSlide';
import { CommandsSlide } from './components/CommandsSlide';
import { BenefitsSlide } from './components/BenefitsSlide';
import { RoadmapSlide } from './components/RoadmapSlide';

const slides = [
  CoverSlide,
  GoalSlide,
  FeaturesSlide,
  ArchitectureSlide,
  AIAdvisorSlide,
  DatabaseSlide,
  InterfaceSlide,
  CommandsSlide,
  BenefitsSlide,
  RoadmapSlide,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
      {/* Main Slide Container */}
      <div className="h-screen flex items-center justify-center p-8 relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full h-full max-w-7xl"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-[#0088CC] group-hover:text-[#3BAEE6]" />
          </button>
        )}

        {currentSlide < slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-[#0088CC] group-hover:text-[#3BAEE6]" />
          </button>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-[#0088CC]'
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 text-sm text-white/40 z-50">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
