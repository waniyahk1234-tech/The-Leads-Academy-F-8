import React from 'react';
import { ACADEMY_CONFIG, LEARNING_CYCLE } from '../data/academyData';
import { PageId } from '../components/Header';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const focalPillars = [
    { title: 'Focused Academic Environment', desc: 'A calm, dedicated study atmosphere where academic work is the clear priority.' },
    { title: 'Individual Attention', desc: 'Sufficient room and small batch sizes so students can ask questions and receive personal clarification.' },
    { title: 'Structured Preparation', desc: 'Topics taught in a logical, systematic order, with planned milestones across the academic year.' },
    { title: 'Concept Building', desc: 'Understanding principles first, so student answers are reasoned and derived rather than merely recalled.' },
    { title: 'Regular Practice', desc: 'Consistent problem solving and exercises that transform conceptual understanding into examination fluency.' },
    { title: 'Systematic Revision', desc: 'Scheduled reviews of previous units before they are needed in exams or board tests.' },
    { title: 'Examination Preparation', desc: 'Realistic practice in the exact style, timing, and marking criteria of board examinations.' },
    { title: 'Student & Parent Support', desc: 'Constructive guidance for students and transparent, regular communication with parents.' },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            About The Leads Academy
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            A focused academy for learning, practice, and preparation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The Leads Academy is an established academic coaching institute in F-8/1, Johar Road, Islamabad. We help students build a firm grasp of their subjects, practice consistently, and prepare with confidence for upcoming board and entrance examinations.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-sm text-slate-600 leading-relaxed">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                Built around how students actually improve.
              </h2>
              <p>
                Academic progress is rarely about shortcuts or passive listening. It happens when a student genuinely understands the idea behind a topic, applies it through guided practice, is evaluated under exam conditions, and receives clear, constructive guidance on what to fix.
              </p>
              <p>
                At The Leads Academy, this simple discipline runs through every class. Our teachers in F-8/1 focus on building conceptual confidence, ensuring that each student feels supported while taking their work seriously.
              </p>
              <p>
                Located conveniently on Johar Road, the academy welcomes enquiries from students and parents seeking reliable, structured guidance across Islamabad and surrounding areas.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 bg-white rounded-lg border border-slate-200 shadow-sm space-y-4">
                <div className="text-xs font-semibold uppercase text-blue-900 tracking-wider">
                  Campus Overview
                </div>
                <div className="font-serif text-xl font-bold text-slate-900">
                  {ACADEMY_CONFIG.address}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Easily accessible from Sectors F-6, F-7, F-8, F-10, G-8, G-9, and G-10. Quiet residential setting with dedicated study rooms and focused classrooms.
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900">Direct Inquiries: {ACADEMY_CONFIG.phoneDisplay}</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="text-blue-900 hover:text-blue-950 font-semibold underline underline-offset-4"
                  >
                    View Campus Map &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What The Academy Focuses On (8 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Academic Focus Areas
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            What the academy focuses on.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Eight essential principles that guide classroom teaching and student support every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focalPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border border-slate-200 hover:border-slate-400 transition-all shadow-2xs space-y-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
                <h3 className="font-serif text-base font-bold text-slate-900">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Philosophy: Learn -> Practice -> Test -> Improve */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Teaching Philosophy
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Learn → Practice → Test → Improve
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Four stages repeated systematically until each topic is fully secured.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARNING_CYCLE.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700 space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-serif font-bold text-sm flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-amber-300">
                  {step.tagline}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Links to Faculty, Results, Admissions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Meet our faculty and see our achievement framework.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore subject specialists, student milestone cards, and admission details.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('faculty')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
            >
              Faculty Profiles
            </button>
            <button
              type="button"
              onClick={() => onNavigate('results')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
            >
              Results &amp; Achievements
            </button>
            <button
              type="button"
              onClick={() => onNavigate('admissions')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors"
            >
              Enquire About Admissions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
