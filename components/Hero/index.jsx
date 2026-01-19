'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Cyberpunk 2077: Phantom Liberty',
    description: 'Immerse yourself in the world of the future with a new expansion', // Описание слайда
    rating: 9.2,
    genre: 'RPG / Action',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop',
  },
  {
    id: 2,
    title: 'Elden Ring: Shadow of the Erdtree',
    description: 'New lands await their heroes', // Описание слайда
    rating: 9.8,
    genre: 'Action / RPG',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop',
  },
  {
    id: 3,
    title: 'Starfield',
    description: 'Explore the endless expanses of space', // Описание слайда
    rating: 8.5,
    genre: 'RPG / Space',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&h=1080&fit=crop',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg/50" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 flex items-center gap-4"
              >
                <span className="px-3 py-1 glass-effect rounded-full text-sm text-primary border border-primary/30">
                  {slides[currentSlide].genre}
                </span>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-bold">{slides[currentSlide].rating}</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <button className="btn-primary flex items-center gap-2">
                  <FaPlay /> Play Now
                </button>
                <button className="btn-secondary">Learn More</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 glass-effect rounded-full hover:bg-primary/20 transition-all z-10 group"
      >
        <FaChevronLeft className="text-2xl group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 glass-effect rounded-full hover:bg-primary/20 transition-all z-10 group"
      >
        <FaChevronRight className="text-2xl group-hover:text-primary transition-colors" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-12'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
