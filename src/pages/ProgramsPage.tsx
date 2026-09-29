import React from 'react';
import { CORE_PROGRAMS, ProgramItem } from '../data/academyData';
import { PageId } from '../components/Header';
import { ACADEMY_IMAGES } from '../assets/images';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: PageId, programName?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Academic Offerings &amp; Classes
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Programs Directory
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the academic stage that fits your student. Every program follows our core approach: learn, practice, test, and improve.
          </p>
        </div>

        {/* Informative Note */}
        <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200/80 rounded-md text-xs text-amber-950 flex items-start gap-2.5">
          <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Program Notice:</strong> The programs below represent the core academic structure at The Leads Academy. Specific class combinations, subject options, and batch timings are confirmed directly by the academy administration.
          </span>
        </div>
      </section>

      {/* Program Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_PROGRAMS.map((program: ProgramItem) => {
            let imageSrc: string | null = null;
            if (program.id === 'cadet') imageSrc = ACADEMY_IMAGES.cadetCollegePrep;
            if (program.id === 'cambridge') imageSrc = ACADEMY_IMAGES.cambridgeOALevel;
            if (program.id === 'federal' || program.id === 'tenth') imageSrc = ACADEMY_IMAGES.scienceFscMdcat;

            return (
              <article
                key={program.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
              >
                {imageSrc && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imageSrc}
                      alt={program.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-4 text-xs font-semibold text-amber-300">
                      {program.badge}
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {!imageSrc && (
                      <div className="text-xs font-semibold uppercase tracking-wide text-blue-900 mb-2">
                        {program.badge || 'Academic Program'}
                      </div>
                    )}

                    <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {program.name}
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {program.summary}
                    </p>

                    {/* Focus Areas */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-900" />
                        <span>Subjects &amp; Focus Areas:</span>
                      </div>
                      <div className="text-xs text-slate-600 leading-normal">
                        {program.focus.join(' · ')}
                      </div>
                    </div>

                    {/* Preparation Format */}
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
                      <div className="font-semibold text-slate-800 mb-1">Preparation Format:</div>
                      <p className="text-slate-600 leading-relaxed">
                        {program.format}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Admissions Open</span>
                    <button
                      type="button"
                      onClick={() => onNavigate('admissions', program.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-900 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-900 text-white rounded-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-white">
              Not sure which class or batch timing suits you best?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak with our academic coordinator to discuss batch timings, subject combinations, or to schedule a campus visit.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
          >
            Contact Academic Coordinator
          </button>
        </div>
      </section>

    </div>
  );
};
