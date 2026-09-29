import React, { useState } from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export type PageId =
  | 'home'
  | 'about'
  | 'programs'
  | 'subjects'
  | 'approach'
  | 'resources'
  | 'results'
  | 'faculty'
  | 'faq'
  | 'admissions'
  | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'subjects', label: 'Subjects' },
    { id: 'approach', label: 'Approach' },
    { id: 'resources', label: 'Resources' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-900 transition-colors cursor-pointer text-left"
          >
            The Leads Academy
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            {mainNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${ACADEMY_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>{ACADEMY_CONFIG.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => handleNavClick('admissions')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('admissions')}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 rounded-md"
            >
              Enquire
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="text-xs text-slate-500 pb-2 border-b border-slate-100">
            F-8/1, Johar Road, Islamabad · Academic Coaching
          </div>

          <div className="grid grid-cols-2 gap-1">
            {mainNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Secondary links on mobile */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-600">
            <button
              type="button"
              onClick={() => handleNavClick('results')}
              className="hover:underline"
            >
              Results &amp; Milestones
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleNavClick('faculty')}
              className="hover:underline"
            >
              Faculty
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleNavClick('faq')}
              className="hover:underline"
            >
              FAQ
            </button>
          </div>

          {/* Quick contact buttons on mobile */}
          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <a
              href={`tel:${ACADEMY_CONFIG.phoneTel}`}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-md"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>Call 0309-7153253</span>
            </a>

            <button
              type="button"
              onClick={() => handleNavClick('admissions')}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-blue-900 rounded-md"
            >
              <span>Enquire Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
