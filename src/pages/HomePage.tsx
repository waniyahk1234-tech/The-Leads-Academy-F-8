import React, { useState } from 'react';
import {
  ACADEMY_CONFIG,
  CORE_PROGRAMS,
  KEY_STRENGTHS,
  LEARNING_CYCLE,
  WHY_LEADS_PRINCIPLES,
  DEMO_TESTIMONIALS,
  AUTHENTIC_FAQS,
  SAMPLE_RESOURCES,
  ProgramItem,
  ResourceListing
} from '../data/academyData';
import { PageId } from '../components/Header';
import {
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Eye,
  Download,
  Calendar,
  Clock,
  School,
  X,
  Compass,
  FileText,
  Users,
  ShieldCheck,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, programId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [programFilter, setProgramFilter] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);
  const [previewResource, setPreviewResource] = useState<ResourceListing | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Course & Batch Consultation Selector
  const [calcClass, setCalcClass] = useState<string>('10th Grade (Federal Board)');
  const [calcSubjects, setCalcSubjects] = useState<string>('Full Science Package (Math, Phys, Chem, Bio/CS)');
  const [calcMode, setCalcMode] = useState<string>('On-Campus Batches (F-8/1)');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredPrograms = programFilter === 'all'
    ? CORE_PROGRAMS
    : CORE_PROGRAMS.filter((p) => p.category === programFilter);

  const getWhatsAppInquiryUrl = () => {
    const text = `Assalam o Alaikum The Leads Academy F-8/1,
I would like to enquire about coaching:
- Target Class: ${calcClass}
- Subject Track: ${calcSubjects}
- Preferred Mode: ${calcMode}
Please share current batch timings, seat availability, and fee details for House 2-A, Johar Road, F-8/1 campus.`;
    return `https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO SECTION (MOBILE OPTIMIZED & AUTHENTIC) */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:py-16 lg:py-20">
          
          {/* Top Location Trust Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-4 h-4 shrink-0" />
              {ACADEMY_CONFIG.address}
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300">Near F-8 Markaz</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-emerald-400 font-medium">New Batches Now Enrolling</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-white leading-[1.14] text-balance">
                Building Strong Foundations. Preparing Students for What Comes Next.
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                The Leads Academy is an academic coaching institute in F-8/1, Islamabad. Students receive structured academic support, focused examination preparation, consistent practice, regular tests, revision, and personal guidance so they know where they stand and what to work on next.
              </p>

              {/* Core Offerings Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cadet &amp; Military College Entry Preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Federal Board (FBISE) 9th, 10th &amp; F.Sc</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cambridge O &amp; A Level Specialist Tutors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>On-Campus, Online &amp; Home Tuition Modes</span>
                </div>
              </div>

              {/* Primary Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('admissions')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-all shadow-md shadow-amber-950/30 whitespace-nowrap cursor-pointer"
                >
                  <span>Enquire About Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Explore Programs</span>
                </button>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-300">
                <a
                  href={`tel:${ACADEMY_CONFIG.phoneTel}`}
                  className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">{ACADEMY_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%20F-8%2F1%2C%20I%20would%20like%20to%20enquire%20about%20classes.`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">WhatsApp Office</span>
                </a>

                <a
                  href={ACADEMY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors py-1"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Get Directions (Maps)</span>
                </a>
              </div>

            </div>

            {/* Right Visual Carrier: Authentic Campus & Academics Card */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Primary Campus Exterior Photography */}
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src="/src/assets/images/leads_campus_exterior_1790716926275.jpg"
                  alt="The Leads Academy F-8/1 Johar Road Islamabad Campus Exterior"
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
                  <div className="font-serif font-bold text-base text-amber-300">
                    The Leads Academy · F-8/1 Campus
                  </div>
                  <div className="text-slate-300 text-[11px] mt-0.5">
                    House 2-A, Street 47, Johar Road, Islamabad
                  </div>
                </div>
              </div>

              {/* Academy Overview & Admissions Desk Card */}
              <div className="p-4 sm:p-5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700 text-xs text-slate-200 shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-serif font-bold text-sm text-white">
                      Admissions Desk &amp; Schedule
                    </span>
                  </div>
                  <span className="text-amber-400 text-[11px] font-medium">Session 2024–2025</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
                    <div className="text-slate-400 font-medium">Batch Format</div>
                    <div className="font-semibold text-white mt-0.5">8–12 Students / Class</div>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
                    <div className="text-slate-400 font-medium">Daily Hours</div>
                    <div className="font-semibold text-white mt-0.5">9:00 AM – 8:30 PM</div>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
                    <div className="text-slate-400 font-medium">Curricula</div>
                    <div className="font-semibold text-white mt-0.5">FBISE &amp; Cambridge</div>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
                    <div className="text-slate-400 font-medium">Test Series</div>
                    <div className="font-semibold text-emerald-400 mt-0.5">Weekly + Pre-Boards</div>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${ACADEMY_CONFIG.phoneTel}`}
                    className="flex-1 py-2 px-2 text-center font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded text-xs transition-colors"
                  >
                    Call 0309-7153253
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate('admissions')}
                    className="flex-1 py-2 px-2 text-center font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-xs transition-colors"
                  >
                    Schedule Campus Visit
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. CAMPUS GALLERY / VISUAL BENTO SHOWCASE */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                Campus Environment &amp; Learning Spaces
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Inside The Leads Academy.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                A calm, disciplined academic setting in F-8/1, Johar Road, purpose-built for serious study and individual mentorship.
              </p>
            </div>

            <div className="text-xs text-slate-400">
              Small batch rooms (8–12 students) · Study Hall · Reference Library
            </div>
          </div>

          {/* Visual Bento Grid with 3 High-Res Academic Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Study Hall */}
            <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="/src/assets/images/library_study_hall_1790716939683.jpg"
                  alt="Quiet study hall and library at The Leads Academy Islamabad"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300">
                  Disciplined Study Hall
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif font-bold text-base text-white">
                  Quiet Focus &amp; Reference Library
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated reading desks with board past papers, reference textbooks, and formula sheets for uninterrupted self-study.
                </p>
              </div>
            </div>

            {/* Card 2: Faculty Mentorship */}
            <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="/src/assets/images/teacher_mentoring_student_1790716953308.jpg"
                  alt="Teacher guiding high school student through physics derivation at Leads Academy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300">
                  Individual Mentorship
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif font-bold text-base text-white">
                  Step-by-Step Doubt Clearing
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tutors spend dedicated time after lessons addressing individual bottlenecks in mathematics, physics, and chemistry.
                </p>
              </div>
            </div>

            {/* Card 3: Collaborative Classroom */}
            <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="/src/assets/images/hero_academy_learning_1790715589930.jpg"
                  alt="Classroom coaching session at The Leads Academy F-8/1"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300">
                  Small Batch Coaching
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif font-bold text-base text-white">
                  Concept First Instruction
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interactive classes where active student participation, derivation proofs, and whiteboard problem solving come first.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PROGRAMS DIRECTORY WITH CATEGORY SWITCHER */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Academic Offerings &amp; Curricula
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Programs directory.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Explore classes tailored for Federal Board (FBISE), Cambridge O/A Levels, Cadet Colleges, and secondary school.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
              {[
                { id: 'all', label: 'All Programs' },
                { id: 'board', label: 'Federal Board (FBISE)' },
                { id: 'cadet', label: 'Cadet Colleges' },
                { id: 'cambridge', label: 'Cambridge (O/A)' },
                { id: 'school', label: 'Middle & Secondary' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setProgramFilter(f.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    programFilter === f.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <article
                key={prog.id}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                      {prog.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">F-8/1 Campus</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                    {prog.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-200 space-y-1.5">
                    <div className="text-[11px] font-semibold uppercase text-slate-500">
                      Focus Subjects:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {prog.focus.slice(0, 4).map((f, i) => (
                        <span key={i} className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                          {f}
                        </span>
                      ))}
                      {prog.focus.length > 4 && (
                        <span className="text-[11px] text-slate-500 px-1 py-0.5">
                          +{prog.focus.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(prog)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Syllabus</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('admissions', prog.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-900 rounded-md transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STRUCTURED ADMISSIONS & BATCH ENROLLMENT GUIDE */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Admissions &amp; Batch Schedules
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Plan your student’s coaching schedule.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Select class level and subject requirements to prepare a tailored inquiry and check current batch openings at Johar Road, F-8/1.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Batch Inquiry Selector */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              
              {/* Step 1: Select Class */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Target Class / Level:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    '9th Grade (Federal Board)',
                    '10th Grade (Federal Board)',
                    '11th Grade (F.Sc Part-I)',
                    '12th Grade (F.Sc Part-II)',
                    'Cadet College Entry Prep',
                    'Cambridge O / A Level'
                  ].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setCalcClass(lvl)}
                      className={`p-2.5 text-xs font-semibold rounded-md border text-left transition-all ${
                        calcClass === lvl
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Subjects */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Select Subject Combination:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Full Science Package (Math, Phys, Chem, Bio/CS)',
                    'Mathematics & Physics Core Duo',
                    'Mathematics Only (Guided Problem Solving)',
                    'Physics Only (Numericals & Derivations)',
                    'Chemistry Only (Equations & Reactions)',
                    'Cadet College All Subjects + IQ'
                  ].map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setCalcSubjects(sub)}
                      className={`p-2.5 text-xs font-semibold rounded-md border text-left transition-all ${
                        calcSubjects === sub
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Learning Mode */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Preferred Learning Mode:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'On-Campus Batches (F-8/1)',
                    'Verified Home Tutor (Islamabad)',
                    'Live Interactive Online'
                  ].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setCalcMode(m)}
                      className={`p-2.5 text-xs font-semibold rounded-md border text-left transition-all ${
                        calcMode === m
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Admission Consultation & Batch Inquiry Summary */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-serif font-bold text-base text-white">
                  Admission Consultation
                </span>
                <span className="text-amber-400 text-xs font-semibold">House 2-A Campus</span>
              </div>

              <div className="space-y-3 text-xs border-b border-slate-800 pb-4">
                <div>
                  <span className="text-slate-400">Class Level:</span>
                  <div className="font-semibold text-white mt-0.5">{calcClass}</div>
                </div>
                <div>
                  <span className="text-slate-400">Subject Combination:</span>
                  <div className="font-semibold text-white mt-0.5">{calcSubjects}</div>
                </div>
                <div>
                  <span className="text-slate-400">Format:</span>
                  <div className="font-semibold text-amber-300 mt-0.5">{calcMode}</div>
                </div>
                <div>
                  <span className="text-slate-400">Campus Address:</span>
                  <div className="text-slate-200 mt-0.5">House 2-A, Street 47, Johar Road, F-8/1, Islamabad</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our administration desk directly via WhatsApp or phone. We will confirm batch timings, available seats, and fee structure promptly.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={getWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('admissions', `${calcClass} - ${calcSubjects}`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
                >
                  <span>Open Full Admissions Form</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. TEACHING PHILOSOPHY & WHY LEADS */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Methodology &amp; Standards
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Learn → Practice → Test → Improve
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Four stages repeated systematically until each topic is fully secured in memory and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEARNING_CYCLE.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-serif font-bold text-sm flex items-center justify-center mb-3">
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
                  Continuous Feedback Cycle
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SAMPLE STUDY VAULT SHOWCASE */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Student Resource Vault
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Curated study sheets &amp; past papers.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('resources')}
              className="text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_RESOURCES.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-blue-900">{item.category}</span>
                    <span>{item.classLevel}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-xs text-slate-500">
                    {item.board} · {item.fileSize}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewResource(item)}
                    className="flex-1 py-1.5 px-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => showToast(`Simulated download: "${item.title}". Real files can be uploaded by the academy.`)}
                    className="flex-1 py-1.5 px-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded flex items-center justify-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
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
              className="text-xs font-semibold text-blue-900 hover:underline"
            >
              See all 8 questions &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {AUTHENTIC_FAQS.slice(0, 4).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-blue-900" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. CAMPUS CONTACT & LOCATION CTA */}
      <section className="bg-slate-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Admissions Consultation
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto text-balance">
            Talk to the academy about the right class.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Call, message on WhatsApp, or send an enquiry. Ask about classes, subjects, timings, and admissions at House 2-A, Street 47, Johar Road, F-8/1, Islamabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${ACADEMY_CONFIG.phoneTel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {ACADEMY_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('admissions')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors cursor-pointer"
            >
              <span>Enquire About Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Program Syllabus Details Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative border border-slate-300 shadow-2xl space-y-4">
            <button
              type="button"
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
                {activeModalProgram.badge}
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                {activeModalProgram.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded border border-slate-200">
              {activeModalProgram.summary}
            </p>

            <div className="space-y-2 text-xs">
              <div className="font-semibold text-slate-900">Focus Areas Covered:</div>
              <div className="text-slate-600">{activeModalProgram.focus.join(' · ')}</div>
            </div>

            <div className="space-y-2 text-xs pt-2 border-t border-slate-100">
              <div className="font-semibold text-slate-900">Preparation &amp; Test Format:</div>
              <div className="text-slate-600">{activeModalProgram.format}</div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setActiveModalProgram(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = activeModalProgram.name;
                  setActiveModalProgram(null);
                  onNavigate('admissions', name);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md"
              >
                Enquire for this Class
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resource Preview Reader Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative border border-slate-300 shadow-2xl space-y-4">
            <button
              type="button"
              onClick={() => setPreviewResource(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-900 rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500">{previewResource.category} · {previewResource.classLevel}</span>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  {previewResource.title}
                </h3>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-md border border-slate-200 text-xs space-y-2 text-slate-600">
              <div><strong>Board:</strong> {previewResource.board}</div>
              <div><strong>Format:</strong> High-Resolution PDF Document</div>
              <div><strong>File Size:</strong> {previewResource.fileSize}</div>
              <div><strong>Status:</strong> Ready for verified academy upload</div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setPreviewResource(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  showToast(`Simulated download for "${previewResource.title}".`);
                  setPreviewResource(null);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Sample PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-2xl border border-slate-700 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
};
