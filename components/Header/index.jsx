'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaUser, FaSearch, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' }, // Главная страница
    { name: 'Library', href: '/library' }, // Библиотека игр
    { name: 'Tournaments', href: '/tournaments' }, // Турниры
    { name: 'Community', href: '/community' }, // Сообщество
    { name: 'Store', href: '/store' }, // Магазин
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaGamepad className="text-4xl text-primary" />
              <span className="text-2xl font-bold text-gradient">GRAPHITE1212</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg glass-effect hover:text-primary transition-colors"
            >
              <FaSearch className="text-xl" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg glass-effect hover:text-primary transition-colors relative"
            >
              <FaBell className="text-xl" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
            </motion.button>

            {/* Profile */}
            <Link href="/profile">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg glass-effect hover:text-primary transition-colors hidden md:block"
              >
                <FaUser className="text-xl" />
              </motion.button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-effect hover:text-primary transition-colors"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <input
              type="text"
              placeholder="Search games, friends, tournaments..." // Поле поиска
              className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 space-y-2"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 glass-effect rounded-lg hover:border-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
