import React from 'react';
import { DEMO_ACHIEVEMENTS } from '../data/academyData';
import { PageId } from '../components/Header';
import { Award, AlertCircle, ArrowRight } from 'lucide-react';

interface ResultsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Academic Milestones
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Student Achievements
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Showcase your students&apos; progress, examination results, and academic milestones.
          </p>
        </div>

        {/* Clear Policy Notice */}
        <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200/80 rounded-md text-xs text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Authentic Records Notice:</strong> These achievement cards are structured placeholders for the academy proposal. The Leads Academy will publish verified student results, board score cards, and Cadet College entrance clearances upon mutual consent with parents and guardians.
          </span>
        </div>
      </section>

      {/* Achievement Placeholders Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEMO_ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border-2 border-dashed border-slate-300 p-6 sm:p-7 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-blue-50 text-blue-900 rounded-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-sm">
                    Placeholder
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {item.type}
                </div>
                <h2 className="font-serif text-xl font-bold text-slate-900 mt-1 mb-2">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Structured Form Fields to be filled */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  {item.fields.map((f, i) => (
                    <div key={i} className="text-xs">
                      <div className="text-slate-500 font-medium">{f.label}</div>
                      <div className="font-mono text-slate-800 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 mt-0.5">
                        {f.placeholder}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                Ready to populate with verified board cards
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-900 text-white rounded-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Ready to prepare for the upcoming board session?
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Enroll early to secure a seat in our morning or evening preparation batches.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
          >
            <span>Enquire for Admissions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
