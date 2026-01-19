'use client';

import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <Profile />
      <Footer />
    </main>
  );
}
