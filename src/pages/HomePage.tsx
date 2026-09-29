import React, { useState } from 'react';
import { ACADEMY_CONFIG, CORE_PROGRAMS, KEY_STRENGTHS, LEARNING_CYCLE, WHY_LEADS_PRINCIPLES, DEMO_TESTIMONIALS, AUTHENTIC_FAQS } from '../data/academyData';
import { PageId } from '../components/Header';
import { MapPin, Phone, MessageSquare, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, programId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-radial from-blue-900/25 via-slate-900/90 to-slate-900 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          
          {/* Location Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-4 h-4 shrink-0" />
              {ACADEMY_CONFIG.address}
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300">Academic Coaching Institute</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300">Phone: {ACADEMY_CONFIG.phoneDisplay}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] text-balance">
                Building Strong Foundations. Preparing Students for What Comes Next.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                The Leads Academy is an academic coaching institute in F-8/1, Islamabad. Students receive structured academic support, focused examination preparation, consistent practice, regular tests, revision, and personal guidance so they know where they stand and what to work on next.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('admissions')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md shadow-amber-950/20 whitespace-nowrap cursor-pointer"
                >
                  <span>Enquire About Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Explore Programs</span>
                </button>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
                <a href={`tel:${ACADEMY_CONFIG.phoneTel}`} className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {ACADEMY_CONFIG.phoneDisplay}</span>
                </a>
                <span className="text-slate-700" aria-hidden="true">|</span>
                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%20F-8%2F1%2C%20I%20would%20like%20to%20enquire%20about%20classes.`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <span className="text-slate-700" aria-hidden="true">|</span>
                <a
                  href={ACADEMY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Right: Academic Test Paper Graphic & Classroom Photography */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Classroom Photo */}
              <div className="rounded-lg overflow-hidden border border-slate-700 shadow-xl bg-slate-800 relative group">
                <img
                  src="/src/assets/images/hero_academy_learning_1790715589930.jpg"
                  alt="Students and tutor in focused academic session at The Leads Academy F-8/1 Islamabad"
                  className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <div className="font-semibold text-amber-400">The Leads Academy · F-8/1 Campus</div>
                  <div className="text-slate-300 text-[11px] mt-0.5">Focused classroom coaching, small batch format &amp; individual guidance.</div>
                </div>
              </div>

              {/* Marked Test Paper Motif Card */}
              <div className="p-4 bg-slate-800/90 rounded-lg border border-slate-700/80 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700 font-semibold text-white">
                  <span className="font-serif text-sm">Chapter Test Assessment</span>
                  <span className="text-amber-400 font-mono">Learn · Practice · Test · Improve</span>
                </div>
                <div className="py-2.5 space-y-1.5 font-mono text-[11px] text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>1. Conceptual Understanding</span>
                    <span className="text-emerald-400 font-semibold">✓ Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>2. Step-by-Step Problem Solving</span>
                    <span className="text-emerald-400 font-semibold">✓ Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>3. Diagnostic Mistake Analysis</span>
                    <span className="text-amber-400 font-semibold">✎ Annotated Review</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400 italic">
                  &ldquo;Every test shows what to work on next before the examination hall.&rdquo;
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. PROGRAMS OVERVIEW */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Academic Programs &amp; Classes
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Find the right program.
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Structured classes and examination preparation for students at every stage. Program details are configured for The Leads Academy and confirmed directly.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 underline underline-offset-4 self-start sm:self-auto cursor-pointer"
            >
              <span>View All Programs Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_PROGRAMS.slice(0, 6).map((prog) => (
              <div
                key={prog.id}
                className="p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-400 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1.5">
                    {prog.badge}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    {prog.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {prog.summary}
                  </p>
                  
                  <div className="pt-3 border-t border-slate-200/80 text-xs">
                    <div className="font-medium text-slate-700 mb-1">Focus Areas:</div>
                    <div className="text-slate-600">
                      {prog.focus.slice(0, 4).join(' · ')}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{prog.format.split(',')[0]}</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('admissions', prog.name)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-900 hover:text-blue-950 cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              <span>Find a Program for Your Student</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. KEY STRENGTHS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Academic Environment
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A place to study with purpose.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              What students and parents in Islamabad can expect from The Leads Academy’s approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_STRENGTHS.map((s, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg border border-slate-200 border-l-4 border-l-blue-900 shadow-2xs space-y-2"
              >
                <h3 className="font-serif text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TEACHING APPROACH (LEARN → PRACTICE → TEST → IMPROVE) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Teaching Philosophy
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How students learn here.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The same four steps run through every class, from first conceptual explanation to final board revision.
            </p>
          </div>

          {/* 4 Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARNING_CYCLE.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-serif font-bold text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-blue-900 mb-2">
                    {step.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  Continuous improvement cycle
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => onNavigate('approach')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-900 hover:text-white bg-slate-100 hover:bg-slate-900 rounded-md border border-slate-300 transition-colors"
            >
              <span>See the full approach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. WHY THE LEADS (6 PRINCIPLES) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Core Principles
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why The Leads Academy.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear principles behind every classroom session and student interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_LEADS_PRINCIPLES.map((item) => (
              <div
                key={item.key}
                className="p-6 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS (CLEARLY MARKED PLACEHOLDERS) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Social Proof &amp; Reviews
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What parents and students say.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Genuine reviews will appear here once the academy collects and uploads them with student and parental permission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 flex flex-col justify-between relative"
              >
                <div>
                  <div className="text-[11px] font-semibold text-amber-700 bg-amber-100/70 inline-block px-2 py-0.5 rounded-sm mb-3">
                    {t.tag}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 text-xs">
                  <div className="font-medium text-slate-900">{t.author}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">{t.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-slate-500 text-center">
            Note: Demonstrational review placeholders for the academy website proposal.
          </div>

        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Common Questions
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Quick answers for parents &amp; students.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('faq')}
              className="text-xs font-semibold text-blue-900 hover:text-blue-950 underline underline-offset-4 self-start sm:self-auto cursor-pointer"
            >
              See all questions &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {AUTHENTIC_FAQS.slice(0, 4).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. CONTACT CTA BAND */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Admissions Consultation
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto text-balance">
            Talk to the academy about the right class.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Call, message on WhatsApp, or send an enquiry. Ask about classes, subjects, timings, and admissions at F-8/1, Johar Road, Islamabad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${ACADEMY_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {ACADEMY_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('admissions')}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors cursor-pointer"
            >
              <span>Enquire About Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
