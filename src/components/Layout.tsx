import React from 'react';
import Header from './Header.tsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-brand-bg text-gray-200">
      
      {/* Sticky Header component */}
      <Header />

      {/* Main Column container - wider editorial canvas for desktop while staying comfortable on mobile */}
      <main className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-24">
        {children}
      </main>
      
    </div>
  );
}
