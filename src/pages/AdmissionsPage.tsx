import React, { useState } from 'react';
import { ACADEMY_CONFIG, CORE_PROGRAMS } from '../data/academyData';
import { Phone, MessageSquare, MapPin, CheckCircle2, Send, RotateCcw } from 'lucide-react';

interface AdmissionsPageProps {
  initialProgramName?: string;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ initialProgramName = '' }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classLevel: '10th Grade',
    subjectProgram: initialProgramName || 'Federal Board Preparation (FBISE)',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const classOptions = [
    'Middle School',
    'Secondary School',
    '9th Grade',
    '10th Grade',
    '11th Grade (F.Sc Part-I)',
    '12th Grade (F.Sc Part-II)',
    'Cadet College Entrance Prep',
    'Cambridge O Level',
    'Cambridge A Level',
    'Supplementary / Crash Batch',
    'Other / Individual Subject'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim()) {
      setErrorMsg('Please enter the student’s name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please enter a valid contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Assalam o Alaikum The Leads Academy F-8/1,
I would like to enquire about admission:
- Student Name: ${formData.studentName}
- Parent/Guardian: ${formData.parentName || 'Not specified'}
- Class Level: ${formData.classLevel}
- Subject / Program: ${formData.subjectProgram}
- Phone Number: ${formData.phone}
- Message: ${formData.message || 'Please share details regarding batch timings and fee structure.'}`;

    return `https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Admissions &amp; Registration
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Interested in joining The Leads Academy?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Send the details below, or contact the academy directly via call or WhatsApp. Fees, timings, and batch combinations are confirmed by the academy administration.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Contact Buttons & Guidance */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 space-y-4">
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Talk to the academy
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents are always welcome to call our administration desk directly or visit our F-8/1 campus on Johar Road.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${ACADEMY_CONFIG.phoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Us ({ACADEMY_CONFIG.phoneDisplay})</span>
                </a>

                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={ACADEMY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* What to have ready */}
            <div className="p-6 bg-white rounded-lg border border-slate-200 text-xs space-y-2 text-slate-600 border-l-4 border-l-amber-500">
              <strong className="block text-slate-900 font-semibold text-sm">
                Helpful to have ready:
              </strong>
              <p>• The student’s current class and board (FBISE / Cambridge / Other)</p>
              <p>• The specific subjects needing guidance or revision</p>
              <p>• Preferred batch timing (morning or evening slots)</p>
              <p>• A phone number where you can be reached</p>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
            
            {submitted ? (
              <div className="space-y-6 py-2">
                <div className="flex items-center gap-3 text-emerald-600">
                  <CheckCircle2 className="w-8 h-8 shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Your enquiry is ready
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Review your details below. You can send them directly on WhatsApp for an immediate response.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-md border border-slate-200 text-xs sm:text-sm space-y-2">
                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">Student Name:</span>
                    <span className="col-span-2 font-semibold text-slate-900">{formData.studentName}</span>
                  </div>
                  {formData.parentName && (
                    <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/80">
                      <span className="text-slate-500 font-medium">Parent/Guardian:</span>
                      <span className="col-span-2 text-slate-800">{formData.parentName}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">Class:</span>
                    <span className="col-span-2 text-slate-800">{formData.classLevel}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">Subject / Program:</span>
                    <span className="col-span-2 text-slate-800">{formData.subjectProgram}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">Phone Number:</span>
                    <span className="col-span-2 text-slate-800 font-mono">{formData.phone}</span>
                  </div>
                  {formData.message && (
                    <div className="grid grid-cols-3 gap-2 py-1">
                      <span className="text-slate-500 font-medium">Message:</span>
                      <span className="col-span-2 text-slate-700">{formData.message}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp (+92 309 7153253)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md border border-slate-300 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Edit Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-md">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Abdullah Khan"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Tariq Khan"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.classLevel}
                      onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                    >
                      {classOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Program
                    </label>
                    <input
                      type="text"
                      value={formData.subjectProgram}
                      onChange={(e) => setFormData({ ...formData, subjectProgram: e.target.value })}
                      placeholder="e.g. Mathematics, Physics, or Full Board Prep"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300-1234567"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Anything the academy should know, such as topics that need extra help or questions on fee structures..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>

                  <span className="text-xs text-slate-500">
                    Fields marked * are required.
                  </span>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
