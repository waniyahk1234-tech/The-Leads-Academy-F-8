import React, { useState } from 'react';
import { SAMPLE_RESOURCES, ResourceListing } from '../data/academyData';
import { Search, Download, Eye, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const categories = [
    'All',
    'Notes',
    'Practice Papers',
    'Guess Papers',
    'Revision Material',
    'Tests',
    'Important Questions'
  ];

  const filteredResources = SAMPLE_RESOURCES.filter((res) => {
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      res.title.toLowerCase().includes(q) ||
      res.subject.toLowerCase().includes(q) ||
      res.classLevel.toLowerCase().includes(q) ||
      res.board.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const triggerAction = (type: 'view' | 'download', item: ResourceListing) => {
    const msg =
      type === 'view'
        ? `Viewing sample preview for: "${item.title}". Once uploaded, this opens the verified PDF.`
        : `Simulated download: "${item.title}" (${item.fileSize}). Real files will be hosted by the academy.`;

    setFeedbackToast(msg);
    setTimeout(() => {
      setFeedbackToast(null);
    }, 4000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Student Portal &amp; Library
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Academic Resources
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured repository where students can access chapter notes, formula sheets, practice papers, and revision summaries.
          </p>
        </div>

        {/* Clear Sample Notice */}
        <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200/80 rounded-md text-xs text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Portal Demonstration:</strong> These cards illustrate the student resource portal structure for The Leads Academy. They are sample listings rather than officially released materials. Authentic revision packages can be uploaded directly by the academy.
          </span>
        </div>
      </section>

      {/* Filter Chips & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by subject or class..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-colors"
            />
          </div>

        </div>

        {/* Count */}
        <div className="text-xs text-slate-500 pt-3">
          Showing <span className="font-semibold text-slate-900">{filteredResources.length}</span> sample listings
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredResources.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-500">
            No resources found for &ldquo;{searchQuery}&rdquo;. Try another category or search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <article
                key={item.id}
                className="bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-blue-900">{item.category}</span>
                    <span>{item.classLevel}</span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.board}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px]">{item.fileSize}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => triggerAction('view', item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Resource</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerAction('download', item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Floating Feedback Toast */}
      {feedbackToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 max-w-md text-xs leading-relaxed flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{feedbackToast}</span>
        </div>
      )}

    </div>
  );
};
