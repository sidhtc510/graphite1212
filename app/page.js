'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GameCard from '@/components/GameCard';
import FriendsActivity from '@/components/FriendsActivity';
import Footer from '@/components/Footer';
import { FaTrophy, FaFire, FaClock } from 'react-icons/fa';

const featuredGames = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    description: 'Discover the world of the future in Night City', // Описание игры
    genre: 'RPG',
    rating: 9.2,
    players: '1.2M',
    achievements: 52,
    price: '$19.99', // Цена игры
    isNew: false,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    title: 'Baldurs Gate 3',
    description: 'A classic RPG of a new generation', // Описание игры
    genre: 'RPG',
    rating: 9.5,
    players: '890K',
    achievements: 54,
    price: '$21.99', // Цена игры
    isNew: true,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    title: 'Starfield',
    description: 'Explore the endless cosmos', // Описание игры
    genre: 'Space RPG',
    rating: 8.5,
    players: '1.8M',
    achievements: 62,
    price: '$27.99', // Цена игры
    isNew: true,
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    title: 'Elden Ring',
    description: 'An epic journey through the Lands Between', // Описание игры
    genre: 'Action RPG',
    rating: 9.8,
    players: '2.5M',
    achievements: 42,
    price: '$24.99', // Цена игры
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=800&fit=crop',
  },
];

const trendingGames = [
  {
    id: 5,
    title: 'Red Dead Redemption 2',
    description: 'The Wild West in all its glory', // Описание игры
    genre: 'Action',
    rating: 9.7,
    players: '3.2M',
    achievements: 48,
    price: '$17.99', // Цена игры
    progress: 45,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=800&fit=crop',
  },
  {
    id: 6,
    title: 'The Witcher 3',
    description: 'The monster hunt continues', // Описание игры
    genre: 'RPG',
    rating: 9.9,
    players: '4.1M',
    achievements: 78,
    price: '$9.99', // Цена игры
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=800&fit=crop',
  },
  {
    id: 7,
    title: 'God of War',
    description: 'Norse myths come alive', // Описание игры
    genre: 'Action',
    rating: 9.6,
    players: '2.8M',
    achievements: 36,
    price: '$22.99', // Цена игры
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop',
  },
  {
    id: 8,
    title: 'Horizon Forbidden West',
    description: 'New lands to explore', // Описание игры
    genre: 'Adventure',
    rating: 9.1,
    players: '1.5M',
    achievements: 44,
    price: '$25.99', // Цена игры
    isNew: true,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=800&fit=crop',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Popular Games Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaFire className="text-4xl text-primary" />
              <h2 className="text-4xl font-bold text-gradient">Popular Games</h2>
            </div>
            <p className="text-gray-400">The hottest games of the month</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaTrophy className="text-4xl text-accent" />
              <h2 className="text-4xl font-bold text-gradient">Trending</h2>
            </div>
            <p className="text-gray-400">What your friends are playing now</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Friends Activity */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-4xl text-secondary" />
              <h2 className="text-4xl font-bold text-gradient">Recent Activity</h2>
            </div>
            <p className="text-gray-400">Keep track of your friends' achievements</p>
          </motion.div>
        </div>
        
        <FriendsActivity />
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #00ff88 0, #00ff88 1px, transparent 0, transparent 50%)',
                backgroundSize: '20px 20px',
              }} />
            </div>

            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-6 text-gradient"
              >
                Join the Community
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Over 5 million gamers are already playing together. Create an account and get access to exclusive features and tournaments.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 justify-center"
              >
                <button className="btn-primary text-lg px-8 py-4">
                  Create Account
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
