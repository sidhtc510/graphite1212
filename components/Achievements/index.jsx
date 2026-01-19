'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaMedal, FaCrown } from 'react-icons/fa';

const achievementsList = [
  {
    id: 1,
    name: 'First Steps', // Название достижения
    description: 'Create your first account', // Описание достижения
    icon: '🎮',
    points: 10,
    rarity: 'common',
    progress: 100,
    unlocked: true,
  },
  {
    id: 2,
    name: 'Collector', // Название достижения
    description: 'Collect 50 games in your library', // Описание достижения
    icon: '📚',
    points: 50,
    rarity: 'rare',
    progress: 76,
    unlocked: false,
  },
  {
    id: 3,
    name: 'Game Master', // Название достижения
    description: 'Get 100% in any game', // Описание достижения
    icon: '🏆',
    points: 100,
    rarity: 'epic',
    progress: 100,
    unlocked: true,
  },
  {
    id: 4,
    name: 'Legend', // Название достижения
    description: 'Reach level 50', // Описание достижения
    icon: '👑',
    points: 200,
    rarity: 'legendary',
    progress: 84,
    unlocked: false,
  },
  {
    id: 5,
    name: 'Social Butterfly', // Название достижения
    description: 'Add 100 friends', // Описание достижения
    icon: '👥',
    points: 75,
    rarity: 'epic',
    progress: 89,
    unlocked: false,
  },
  {
    id: 6,
    name: 'Tournament Champion', // Название достижения
    description: 'Win 10 tournaments', // Описание достижения
    icon: '🥇',
    points: 150,
    rarity: 'legendary',
    progress: 30,
    unlocked: false,
  },
];

const rarityColors = {
  common: 'from-gray-500 to-gray-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-yellow-500 to-yellow-600',
};

const rarityBorders = {
  common: 'border-gray-500',
  rare: 'border-blue-500',
  epic: 'border-purple-500',
  legendary: 'border-yellow-500',
};

export default function Achievements() {
  const totalPoints = achievementsList.reduce((acc, ach) => acc + (ach.unlocked ? ach.points : 0), 0);
  const totalPossiblePoints = achievementsList.reduce((acc, ach) => acc + ach.points, 0);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">Achievements</h1>
              <p className="text-gray-400">Unlock new achievements and earn rewards</p>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {achievementsList.filter(a => a.unlocked).length}
                </div>
                <div className="text-sm text-gray-400">Unlocked</div>
              </div>
              <div className="w-px bg-dark-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">{totalPoints}</div>
                <div className="text-sm text-gray-400">Points</div>
              </div>
              <div className="w-px bg-dark-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">
                  {Math.round((totalPoints / totalPossiblePoints) * 100)}%
                </div>
                <div className="text-sm text-gray-400">Progress</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`glass-effect rounded-xl p-6 transition-all cursor-pointer relative overflow-hidden ${
                achievement.unlocked
                  ? `border-2 ${rarityBorders[achievement.rarity]}`
                  : 'opacity-60'
              }`}
            >
              {/* Rarity Glow */}
              {achievement.unlocked && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${rarityColors[achievement.rarity]} opacity-10`}
                />
              )}

              <div className="relative">
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto ${
                      achievement.unlocked
                        ? `bg-gradient-to-br ${rarityColors[achievement.rarity]}`
                        : 'bg-dark-hover'
                    }`}
                  >
                    {achievement.icon}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-center mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray-400 text-center mb-4">
                  {achievement.description}
                </p>

                {/* Points */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaStar className="text-yellow-400" />
                  <span className="font-bold">{achievement.points} points</span>
                </div>

                {/* Progress Bar */}
                {!achievement.unlocked && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-hover rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${achievement.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={`h-full bg-gradient-to-r ${rarityColors[achievement.rarity]}`}
                      />
                    </div>
                  </div>
                )}

                {/* Unlocked Badge */}
                {achievement.unlocked && (
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <FaTrophy />
                    <span className="font-semibold text-sm">Unlocked!</span>
                  </div>
                )}

                {/* Rarity Badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      achievement.rarity === 'legendary'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : achievement.rarity === 'epic'
                        ? 'bg-purple-500/20 text-purple-400'
                        : achievement.rarity === 'rare'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}
                  >
                    {achievement.rarity === 'legendary' && <FaCrown className="inline mr-1" />}
                    {achievement.rarity === 'epic' && <FaMedal className="inline mr-1" />}
                    {achievement.rarity.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
