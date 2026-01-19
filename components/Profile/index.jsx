'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaGamepad, FaClock, FaUserFriends, FaCog } from 'react-icons/fa';

export default function Profile() {
  const userStats = {
    level: 42,
    gamesPlayed: 127,
    totalHours: 2847,
    achievements: 342,
    friends: 89,
    rating: 9.4,
  };

  const recentGames = [
    { id: 1, title: 'Cyberpunk 2077', hours: 48, progress: 65, lastPlayed: '2 hours ago' }, // Недавняя игра
    { id: 2, title: 'Elden Ring', hours: 156, progress: 32, lastPlayed: '1 day ago' }, // Недавняя игра
    { id: 3, title: 'Baldurs Gate 3', hours: 89, progress: 78, lastPlayed: '3 days ago' }, // Недавняя игра
  ];

  const achievements = [
    { id: 1, name: 'Legend', description: 'Reach level 40', icon: '🏆', rarity: 'Legendary', unlocked: true }, // Достижение
    { id: 2, name: 'Collector', description: 'Collect 100 games', icon: '📚', rarity: 'Rare', unlocked: true }, // Достижение
    { id: 3, name: 'Social Gamer', description: 'Add 50 friends', icon: '👥', rarity: 'Common', unlocked: true }, // Достижение
    { id: 4, name: 'Marathoner', description: 'Play 1000 hours', icon: '⏱️', rarity: 'Epic', unlocked: false }, // Достижение
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #00ff88 0, #00ff88 1px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px',
            }} />
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-gaming p-1">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center text-6xl">
                  🎮
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-dark-bg px-3 py-1 rounded-full font-bold text-sm">
                LVL {userStats.level}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h1 className="text-4xl font-bold">ProGamer2077</h1>
                <button className="p-2 glass-effect rounded-lg hover:text-primary transition-colors">
                  <FaCog />
                </button>
              </div>
              <p className="text-gray-400 mb-4">Player since 2015 • Steam ID: graphite1212</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                <StatCard icon={<FaGamepad />} label="Games" value={userStats.gamesPlayed} />
                <StatCard icon={<FaClock />} label="Hours" value={userStats.totalHours} />
                <StatCard icon={<FaTrophy />} label="Achievements" value={userStats.achievements} />
                <StatCard icon={<FaUserFriends />} label="Friends" value={userStats.friends} />
                <StatCard icon={<FaStar />} label="Rating" value={userStats.rating} />
                <StatCard icon={<FaTrophy />} label="Level" value={userStats.level} />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress to next level</span>
              <span>72%</span>
            </div>
            <div className="w-full h-3 bg-dark-hover rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-gaming"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Games */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-gradient">Recent Games</h2>
              <div className="space-y-4">
                {recentGames.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass-effect rounded-xl p-4 hover:border-primary transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">{game.title}</h3>
                      <span className="text-sm text-gray-400">{game.lastPlayed}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>⏱️ {game.hours} hours</span>
                      <span>📊 Progress: {game.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-hover rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${game.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-gradient">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`glass-effect rounded-xl p-4 transition-all ${
                      achievement.unlocked
                        ? 'border-primary hover:shadow-neon-primary cursor-pointer'
                        : 'opacity-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{achievement.name}</h4>
                        <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          achievement.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                          achievement.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                          achievement.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {achievement.rarity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-lg p-3 text-center"
    >
      <div className="text-2xl mb-1 text-primary">{icon}</div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </motion.div>
  );
}
