'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle, FaStar, FaUsers, FaTrophy } from 'react-icons/fa';

export default function GameCard({ game }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card-game relative group"
    >
      {/* Game Image */}
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />

        {/* Hover Video Preview Placeholder */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center"
          >
            <div className="text-center">
              <FaPlay className="text-6xl text-primary mx-auto mb-4" />
              <p className="text-sm text-gray-400">Trailer</p>
            </div>
          </motion.div>
        )}

        {/* Quick Stats */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="flex gap-2">
            <span className="px-3 py-1 glass-effect rounded-full text-xs font-semibold">
              {game.genre}
            </span>
            {game.isNew && (
              <span className="px-3 py-1 bg-primary/20 border border-primary rounded-full text-xs font-semibold text-primary">
                NEW
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 glass-effect px-3 py-1 rounded-full">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="font-bold text-sm">{game.rating}</span>
          </div>
        </div>

        {/* Action Buttons - Appear on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 left-4 right-4 flex gap-3"
        >
          <button className="btn-primary flex-1 flex items-center justify-center gap-2">
            <FaPlay /> Play
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2 flex-1">
            <FaInfoCircle /> Details
          </button>
        </motion.div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {game.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{game.description}</p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <FaUsers />
            <span>{game.players}</span>
          </div>
          {game.achievements && (
            <div className="flex items-center gap-1 text-gray-400">
              <FaTrophy />
              <span>{game.achievements}</span>
            </div>
          )}
          <div className="text-primary font-semibold">{game.price}</div>
        </div>

        {/* Progress Bar (if game is owned) */}
        {game.progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{game.progress}%</span>
            </div>
            <div className="w-full h-2 bg-dark-hover rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${game.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Neon Border Effect on Hover */}
      <div className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 rounded-xl border-2 border-primary shadow-neon-primary" />
      </div>
    </motion.div>
  );
}
