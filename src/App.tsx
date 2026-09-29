import React, { useState, useEffect } from 'react';
import { ProposalBanner } from './components/ProposalBanner';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { SubjectsPage } from './pages/SubjectsPage';
import { ApproachPage } from './pages/ApproachPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResultsPage } from './pages/ResultsPage';
import { FacultyPage } from './pages/FacultyPage';
import { FaqPage } from './pages/FaqPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';
import { ACADEMY_CONFIG } from './data/academyData';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProgramForAdmission, setSelectedProgramForAdmission] = useState<string>('');

  // Synchronize with URL hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageId[] = [
        'home',
        'about',
        'programs',
        'subjects',
        'approach',
        'resources',
        'results',
        'faculty',
        'faq',
        'admissions',
        'contact'
      ];

      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, programName?: string) => {
    if (programName) {
      setSelectedProgramForAdmission(programName);
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'programs':
        return <ProgramsPage onNavigate={navigateTo} />;
      case 'subjects':
        return <SubjectsPage onNavigate={navigateTo} />;
      case 'approach':
        return <ApproachPage onNavigate={navigateTo} />;
      case 'resources':
        return <ResourcesPage />;
      case 'results':
        return <ResultsPage onNavigate={navigateTo} />;
      case 'faculty':
        return <FacultyPage onNavigate={navigateTo} />;
      case 'faq':
        return <FaqPage onNavigate={navigateTo} />;
      case 'admissions':
        return <AdmissionsPage initialProgramName={selectedProgramForAdmission} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-900 selection:text-white pb-16 lg:pb-0">
      
      {/* Proposal Concept Banner */}
      <ProposalBanner />

      {/* Sticky Top Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Quiet Structured Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky Action Bar (Capped <= 15% viewport height per constitution) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:p-2.5 lg:hidden flex items-center justify-around gap-2 text-slate-900 shadow-lg">
        <a
          href={`tel:${ACADEMY_CONFIG.phoneTel}`}
          className="flex-1 py-2 px-2 text-center text-xs font-semibold bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-blue-900" />
          <span>Call Desk</span>
        </a>

        <a
          href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20classes%20in%20F-8%2F1.`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex-1 py-2 px-2 text-center text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-md flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => navigateTo('admissions')}
          className="flex-1 py-2 px-2 text-center text-xs font-semibold bg-blue-900 hover:bg-blue-950 text-white rounded-md flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
        >
          <span>Enquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
