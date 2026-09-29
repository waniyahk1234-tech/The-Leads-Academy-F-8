import React from 'react';
import { SUBJECTS_LIST, SubjectItem } from '../data/academyData';
import { PageId } from '../components/Header';
import { ArrowRight, BookMarked, Check } from 'lucide-react';

interface SubjectsPageProps {
  onNavigate: (page: PageId, subjectName?: string) => void;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Curriculum Breakdown
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Subjects Offered
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Each subject is taught concept-first, then reinforced with guided practice, regular assessments, and systematic revision.
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBJECTS_LIST.map((subject: SubjectItem) => (
            <div
              key={subject.name}
              className="bg-white rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-blue-900" />
                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      {subject.name}
                    </h2>
                  </div>
                  {subject.isEditable && (
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200">
                      Editable
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {subject.description}
                </p>

                {/* Key Syllabus Modules */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-800 mb-2">
                    Key Areas Covered:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {subject.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Individual or Group</span>
                <button
                  type="button"
                  onClick={() => onNavigate('admissions', subject.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-900 hover:text-blue-950 underline underline-offset-4 cursor-pointer"
                >
                  <span>Ask about {subject.isEditable ? 'availability' : subject.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Coaching Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-2">
          <strong className="block text-slate-900 font-semibold">
            Custom Subject Enrollment:
          </strong>
          <p>
            Students can register for full academic packages (e.g. all science subjects for Federal Board Matric or F.Sc) or enroll exclusively in individual subjects where they need extra help, such as Mathematics or Physics.
          </p>
        </div>
      </section>

    </div>
  );
};
