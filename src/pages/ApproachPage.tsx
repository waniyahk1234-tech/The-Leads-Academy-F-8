import React from 'react';
import { WHY_LEADS_PRINCIPLES, LEARNING_CYCLE, DEMO_TESTIMONIALS } from '../data/academyData';
import { PageId } from '../components/Header';
import { Lightbulb, PenTool, ClipboardCheck, RotateCcw, Target, Users, ArrowRight } from 'lucide-react';

interface ApproachPageProps {
  onNavigate: (page: PageId) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  const principleIcons: Record<string, React.ReactNode> = {
    concept: <Lightbulb className="w-5 h-5 text-amber-600" />,
    practice: <PenTool className="w-5 h-5 text-blue-600" />,
    testing: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
    revision: <RotateCcw className="w-5 h-5 text-purple-600" />,
    exam: <Target className="w-5 h-5 text-rose-600" />,
    supportive: <Users className="w-5 h-5 text-teal-600" />
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Why The Leads
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            A clear method that students can follow and parents can see.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our instructional approach is founded on six proven educational principles designed to build conceptual depth, steady execution, and genuine exam resilience.
          </p>
        </div>
      </section>

      {/* 6 Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Core Standards
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Six principles behind every class.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_LEADS_PRINCIPLES.map((p) => (
            <div
              key={p.key}
              className="bg-white rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-50 rounded-md border border-slate-200 w-fit mb-4">
                  {principleIcons[p.key]}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
                  {p.title}
                </h3>
                <div className="text-xs font-medium text-blue-900 mb-3">
                  {p.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                Core academic discipline
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-Stage Learning Cycle */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              The Learning Loop
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Learn → Practice → Test → Improve
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Each round feeds directly back into deeper understanding and sharper technique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARNING_CYCLE.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 font-serif font-bold text-base flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-amber-300 mb-2">
                    {step.tagline}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/80 text-[11px] text-slate-400">
                  Step {step.step} of 4
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Placeholders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Community Feedback
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            What parents and students say.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real reviews will be uploaded here by the academy upon verified permission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-xs inline-block mb-3">
                  {t.tag}
                </span>
                <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-xs">
                <div className="font-medium text-slate-900">{t.author}</div>
                <div className="text-slate-500 text-[11px]">{t.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-blue-50 border border-blue-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-blue-950">
              Experience the Leads Academy method firsthand.
            </h3>
            <p className="text-xs text-blue-800">
              Visit our F-8/1 campus for a syllabus walkthrough, class orientation, and academic counselling.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md transition-colors"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
