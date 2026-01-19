'use client';

import { motion } from 'framer-motion';
import { FaGamepad, FaTwitter, FaDiscord, FaTwitch, FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: 'About', href: '/about' }, // О платформе
      { name: 'Blog', href: '/blog' }, // Блог
      { name: 'Careers', href: '/careers' }, // Карьера
      { name: 'Partners', href: '/partners' }, // Партнеры
    ],
    support: [
      { name: 'Help', href: '/help' }, // Помощь
      { name: 'FAQ', href: '/faq' }, // Часто задаваемые вопросы
      { name: 'Contact Us', href: '/contact' }, // Связаться с нами
      { name: 'Server Status', href: '/status' }, // Статус серверов
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' }, // Условия использования
      { name: 'Privacy Policy', href: '/privacy' }, // Политика конфиденциальности
      { name: 'Cookies', href: '/cookies' }, // Cookies
      { name: 'Licenses', href: '/licenses' }, // Лицензии
    ],
  };

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaDiscord />, href: '#', label: 'Discord' },
    { icon: <FaTwitch />, href: '#', label: 'Twitch' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative mt-20 border-t border-dark-border">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer mb-4">
                  <FaGamepad className="text-4xl text-primary" />
                  <span className="text-2xl font-bold text-gradient">GRAPHITE1212</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Your ultimate gaming platform. Discover new games, compete with friends, and join millions of players worldwide.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold mb-2">Subscribe to Newsletter</h4>
              <p className="text-sm text-gray-400">Get updates about new games and features</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email" // Поле ввода email
                className="flex-1 md:w-64 px-4 py-3 bg-dark-hover rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 Graphite1212. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Version 2.4.1</span>
              <span>Server: Online</span>
              <span className="text-green-400">● Ping: 24ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gaming opacity-50" />
    </footer>
  );
}
