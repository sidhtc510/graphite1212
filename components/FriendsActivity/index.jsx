'use client';

import { motion } from 'framer-motion';
import { FaGamepad, FaTrophy, FaUserPlus } from 'react-icons/fa';

const friendsActivity = [
  {
    id: 1,
    name: 'Alex_Gamer',
    avatar: '🎮',
    status: 'online',
    activity: 'Playing Cyberpunk 2077', // Активность друга
    time: '2 hours', // Время
    level: 35,
  },
  {
    id: 2,
    name: 'MegaPlayer99',
    avatar: '🕹️',
    status: 'online',
    activity: 'Earned achievement "Legend"', // Активность друга
    time: '30 minutes ago', // Время
    level: 42,
  },
  {
    id: 3,
    name: 'ProGirl2024',
    avatar: '👾',
    status: 'away',
    activity: 'Recently played Elden Ring', // Активность друга
    time: '3 hours ago', // Время
    level: 28,
  },
  {
    id: 4,
    name: 'NinjaWarrior',
    avatar: '⚔️',
    status: 'online',
    activity: 'In tournament: CS:GO Championship', // Активность друга
    time: '1 hour', // Время
    level: 50,
  },
  {
    id: 5,
    name: 'StrategyMaster',
    avatar: '🎯',
    status: 'offline',
    activity: 'Last seen 2 days ago', // Активность друга
    time: '2 days ago', // Время
    level: 38,
  },
];

export default function FriendsActivity() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gradient">Friends Activity</h2>
            <button className="btn-secondary flex items-center gap-2">
              <FaUserPlus />
              <span>Add Friend</span>
            </button>
          </div>

          {/* Friends List */}
          <div className="space-y-4">
            {friendsActivity.map((friend, index) => (
              <motion.div
                key={friend.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-4 hover:border-primary transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-gaming p-0.5">
                      <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center text-2xl">
                        {friend.avatar}
                      </div>
                    </div>
                    {/* Status Indicator */}
                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-dark-bg ${
                      friend.status === 'online' ? 'bg-green-500' :
                      friend.status === 'away' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`} />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {friend.name}
                      </h3>
                      <span className="text-xs glass-effect px-2 py-0.5 rounded-full">
                        LVL {friend.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      {friend.activity.includes('Playing') && <FaGamepad className="text-primary" />}
                      {friend.activity.includes('achievement') && <FaTrophy className="text-yellow-400" />}
                      {friend.activity}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{friend.time}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 glass-effect rounded-lg text-sm hover:border-primary"
                    >
                      Profile
                    </motion.button>
                    {friend.status === 'online' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-primary text-dark-bg rounded-lg text-sm font-semibold"
                      >
                        Invite
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-3 glass-effect rounded-lg hover:border-primary transition-all"
          >
            Show all friends ({friendsActivity.length + 84})
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
