'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch, FaSortAmountDown } from 'react-icons/fa';
import GameCard from '../GameCard';

const mockGames = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    description: 'Discover the world of the future in Night City', // Описание игры
    genre: 'RPG',
    rating: 9.2,
    players: '1.2M',
    achievements: 52,
    price: '$19.99', // Цена игры
    progress: 65,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    title: 'Elden Ring',
    description: 'An epic journey through the Lands Between', // Описание игры
    genre: 'Action RPG',
    rating: 9.8,
    players: '2.5M',
    achievements: 42,
    price: '$24.99', // Цена игры
    progress: 32,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=800&fit=crop',
  },
  {
    id: 3,
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
    id: 4,
    title: 'Starfield',
    description: 'Explore the endless cosmos', // Описание игры
    genre: 'Space RPG',
    rating: 8.5,
    players: '1.8M',
    achievements: 62,
    price: '$27.99', // Цена игры
    progress: 15,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=800&fit=crop',
  },
  {
    id: 5,
    title: 'Red Dead Redemption 2',
    description: 'The Wild West in all its glory', // Описание игры
    genre: 'Action',
    rating: 9.7,
    players: '3.2M',
    achievements: 48,
    price: '$17.99', // Цена игры
    progress: 88,
    isNew: false,
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
    progress: 100,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=800&fit=crop',
  },
];

const genres = ['All', 'RPG', 'Action', 'Strategy', 'Shooter', 'Adventure', 'Space RPG']; // Жанры
const platforms = ['All', 'PC', 'PlayStation', 'Xbox', 'Nintendo']; // Платформы
const sortOptions = ['Popularity', 'Rating', 'Newest', 'Friends Activity']; // Опции сортировки

export default function GameLibrary() {
  const [selectedGenre, setSelectedGenre] = useState('All'); // Выбранный жанр
  const [selectedPlatform, setSelectedPlatform] = useState('All'); // Выбранная платформа
  const [sortBy, setSortBy] = useState('Popularity'); // Сортировка
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredGames = mockGames.filter(game => {
    const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre; // Фильтрация по жанру
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()); // Фильтрация по поиску
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gradient mb-4">Game Library</h2>
          <p className="text-gray-400">Find your next favorite game</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 glass-effect rounded-xl p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..." // Поле поиска
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-hover rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FaFilter />
              <span>Filters</span>
            </button>

            {/* Sort */}
            <div className="relative">
              <FaSortAmountDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-12 pr-8 py-3 bg-dark-hover rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-dark-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Genre Filter */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-400">Genre</h4>
                  <div className="flex flex-wrap gap-2">
                    {genres.map(genre => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          selectedGenre === genre
                            ? 'bg-primary text-dark-bg font-semibold'
                            : 'glass-effect hover:border-primary'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platform Filter */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-400">Platform</h4>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map(platform => (
                      <button
                        key={platform}
                        onClick={() => setSelectedPlatform(platform)}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          selectedPlatform === platform
                            ? 'bg-accent text-dark-bg font-semibold'
                            : 'glass-effect hover:border-accent'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredGames.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-4">No games found</p>
            <p className="text-gray-500">Try changing filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
