'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const navItems = [
  { name: 'Overview', path: '/dashboard', icon: 'grid' },
  { name: 'Carbon Ledger', path: '/dashboard/ledger', icon: 'document' },
  { name: 'Settings', path: '/dashboard/settings', icon: 'gear' },
];

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'grid':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case 'document':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'gear':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={`min-h-screen flex bg-[var(--dashboard-bg)] text-[var(--text-primary)] ${inter.className}`}>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(true)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? '16rem' : '4.5rem' }}
        className="fixed z-30 flex flex-col h-screen overflow-y-auto bg-[var(--sidebar-bg)] border-r border-green-800/30 whitespace-nowrap transition-all duration-300 overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 h-16 border-b border-green-800/30">
          <Link href="/dashboard" className="flex items-center space-x-2 truncate">
            <span className="text-xl font-bold tracking-tight">
              {isSidebarOpen ? (
                <>Forest<span className="text-[#4ade80]">Twin</span></>
              ) : (
                <span className="text-[#4ade80]">F</span>
              )}
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-green-900/30 focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/dashboard' && pathname?.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center px-3 py-3 rounded-lg transition-colors duration-200 group ${
                  isActive 
                    ? 'bg-green-900/40 text-green-400 border border-green-800/50' 
                    : 'text-gray-400 hover:bg-[#102a1c] hover:text-white'
                }`}
                title={!isSidebarOpen ? item.name : undefined}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Icon name={item.icon} />
                </div>
                <span className={`ml-3 transition-opacity duration-200 font-medium ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? 'md:ml-64 ml-16' : 'ml-[4.5rem]'}`}>
        <header className="h-16 bg-[#0a1a12]/80 backdrop-blur-md border-b border-green-800/30 sticky top-0 z-10 flex items-center justify-between px-6">
          <div className="flex items-center md:hidden">
            <span className="text-xl font-bold tracking-tight mr-4">
              Forest<span className="text-[#4ade80]">Twin</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6 ml-auto">
            <div className="flex items-center space-x-2 bg-green-900/20 px-3 py-1.5 rounded-full border border-green-800/30">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_8px_#4ade80]"></span>
              <span className="text-sm font-medium text-green-400">Live</span>
            </div>
            
            <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#4ade80] rounded-full transition-transform hover:scale-105">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-600 to-[#102a1c] flex items-center justify-center border border-green-800/50 overflow-hidden shadow-md">
                <svg className="w-4 h-4 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
