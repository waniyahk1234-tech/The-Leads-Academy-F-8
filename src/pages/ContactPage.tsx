import React, { useState } from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Assalam o Alaikum The Leads Academy F-8/1,
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message || 'I would like to contact the academy.'}`;
    return `https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Get In Touch
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Contact The Leads Academy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Visit our campus, call our administration desk, or message us on WhatsApp. We are located in F-8/1, Johar Road, Islamabad.
          </p>
        </div>
      </section>

      {/* 2-Col: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academy Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 space-y-5">
              
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
                  Academy Name
                </div>
                <div className="font-serif text-xl font-bold text-slate-900 mt-0.5">
                  {ACADEMY_CONFIG.name}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
                  Physical Address
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">
                  {ACADEMY_CONFIG.specificAddress}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  F-8/1, Johar Road, Islamabad, Pakistan
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
                  Direct Telephone
                </div>
                <a
                  href={`tel:${ACADEMY_CONFIG.phoneTel}`}
                  className="text-base font-bold text-blue-900 hover:underline block mt-0.5 font-mono"
                >
                  {ACADEMY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase text-slate-500 tracking-wide">
                  Operating Hours
                </div>
                <div className="text-xs sm:text-sm text-slate-700 mt-0.5">
                  {ACADEMY_CONFIG.hours}
                </div>
              </div>

            </div>

            {/* Quick Actions Stack */}
            <div className="space-y-2.5">
              <a
                href={`tel:${ACADEMY_CONFIG.phoneTel}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us ({ACADEMY_CONFIG.phoneDisplay})</span>
              </a>

              <a
                href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalam%20o%20Alaikum%20The%20Leads%20Academy%2C%20I%20would%20like%20to%20connect.`}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Message</span>
              </a>

              <a
                href={ACADEMY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              Send a Message
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Have a question about admissions, subject availability, or timings? Leave your details below.
            </p>

            {submitted ? (
              <div className="space-y-4 py-4">
                <div className="flex items-center gap-3 text-emerald-600">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="font-serif text-lg font-bold text-slate-900">
                    Message summary ready
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  To reach the academy immediately, dispatch this message to our desk on WhatsApp:
                </p>

                <div className="bg-slate-50 p-4 rounded border border-slate-200 text-xs font-mono text-slate-700">
                  <div>Name: {formData.name}</div>
                  <div>Phone: {formData.phone}</div>
                  <div>Message: {formData.message || 'General Inquiry'}</div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-medium text-slate-700 hover:underline"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                  />
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
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can the academy assist you?"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Map & Directions Embed Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 sm:p-10 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-900">
            The Leads Academy Location
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            House 2-A, Street 47, Johar Road, Sector F-8/1, Islamabad. Easily accessible from all central sectors of Islamabad.
          </p>

          <div className="pt-2">
            <a
              href={ACADEMY_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md transition-colors shadow-xs"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Open in Google Maps / Get Directions</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
