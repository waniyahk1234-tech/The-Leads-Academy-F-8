import React, { useState } from 'react';
import { AUTHENTIC_FAQS } from '../data/academyData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Everything parents and students need to know.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear, transparent answers about our F-8/1 campus, coaching methods, home tutor verification, and admissions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {AUTHENTIC_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-1 text-slate-500 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-amber-600" /> : <Plus className="w-4 h-4" />}
                  </div>
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

        {/* Bottom prompt */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have a question not listed here? Call our desk directly at{' '}
          <a href="tel:+923097153253" className="font-semibold text-slate-900 underline hover:text-amber-600">
            0309-7153253
          </a>{' '}
          or message us on WhatsApp.
        </div>

      </div>
    </section>
  );
};
