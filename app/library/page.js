'use client';

import Header from '@/components/Header';
import GameLibrary from '@/components/GameLibrary';
import Footer from '@/components/Footer';

export default function LibraryPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <GameLibrary />
      <Footer />
    </main>
  );
}
