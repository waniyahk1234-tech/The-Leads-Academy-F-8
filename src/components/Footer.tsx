import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { PageId } from './Header';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Institute Brand & Positioning */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-serif text-xl font-bold text-white tracking-tight hover:text-amber-400 transition-colors text-left"
            >
              The Leads Academy
            </button>
            <p className="text-slate-400 leading-relaxed text-xs">
              Structured academic coaching, concept building, regular practice, and focused examination preparation in F-8/1, Johar Road, Islamabad.
            </p>
            <div className="text-[11px] text-slate-500">
              Middle School · Secondary · Federal Board · Cambridge · Cadet Prep
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Programs &amp; Classes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  Middle School Coaching
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  Secondary School Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  9th Grade Board Preparation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  10th Grade Board Preparation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  Federal Board (FBISE) Prep
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  Cadet College Entry Tests
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academy Exploration */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About the Academy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('subjects')}
                  className="hover:text-white transition-colors"
                >
                  Subjects Offered
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('approach')}
                  className="hover:text-white transition-colors"
                >
                  Why The Leads (Approach)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors"
                >
                  Academic Resources
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('results')}
                  className="hover:text-white transition-colors"
                >
                  Results &amp; Achievements
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faculty')}
                  className="hover:text-white transition-colors"
                >
                  Faculty Profiles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Questions &amp; Answers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Office & Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Campus Office
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{ACADEMY_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${ACADEMY_CONFIG.phoneTel}`} className="hover:text-white transition-colors">
                  {ACADEMY_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +92 309 7153253
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('admissions')}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                Enquire About Admissions
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Footer Note */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} The Leads Academy. Website proposal prepared for F-8/1, Johar Road, Islamabad.
          </div>
          <div className="text-center sm:text-right text-[11px] text-slate-500">
            Content marked Sample or Placeholder is for demonstration only and should be replaced with verified information before publishing.
          </div>
        </div>

      </div>
    </footer>
  );
};
