import React from 'react';
import { DEMO_FACULTY } from '../data/academyData';
import { PageId } from '../components/Header';
import { User, AlertCircle, ArrowRight } from 'lucide-react';

interface FacultyPageProps {
  onNavigate: (page: PageId, specialty?: string) => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Instructional Team
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Faculty
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The teachers behind each subject, guiding students with conceptual clarity, syllabus pacing, and exam techniques.
          </p>
        </div>

        {/* Clear Notice */}
        <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200/80 rounded-md text-xs text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Faculty Placeholders:</strong> These cards illustrate the presentation format for The Leads Academy faculty. In accordance with strict factual verification, they will be updated with actual teacher names, photographs, and subject credentials supplied by the academy.
          </span>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_FACULTY.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 hover:border-slate-400 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                {/* Photo Placeholder */}
                <div className="w-full aspect-4/3 bg-slate-100 rounded-md border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 mb-5">
                  <User className="w-10 h-10 mb-1" />
                  <span className="text-[11px] font-medium">Photograph Placeholder</span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {f.role}
                  </h3>
                  <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-xs">
                    Placeholder
                  </span>
                </div>

                <div className="text-xs font-semibold text-blue-900 mb-3">
                  {f.specialty}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {f.bio}
                </p>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Subjects:</strong> {f.subjects}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-right">
                <button
                  type="button"
                  onClick={() => onNavigate('admissions', f.specialty)}
                  className="text-xs font-semibold text-blue-900 hover:underline"
                >
                  Inquire for this Subject &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Have specific subject requirements?
            </h3>
            <p className="text-xs text-slate-600">
              We connect students with dedicated subject specialists for both group and individual tutoring.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
          >
            <span>Ask About Tutors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
