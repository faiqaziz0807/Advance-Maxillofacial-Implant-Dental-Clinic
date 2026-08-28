import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  X,
  Share2,
  Calendar,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/clinicData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenAppointment: (topic?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenAppointment }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-[#F4F6F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#328CC1]" />
            <span>Patient Education • Clinical Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] tracking-tight">
            Oral Health Tips & Patient Guides
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Educational insights by Dr. Ali Akhtar Khan to help you understand implant care, surgical recovery, and maintaining optimal oral hygiene.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:border-[#328CC1] hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Post Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B3C5D]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Post Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#328CC1]" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#0B3C5D] group-hover:text-[#328CC1] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#328CC1] group-hover:text-[#0B3C5D] transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden animate-scaleUp">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-2.5 py-0.5 rounded bg-white/20 text-teal-200 text-xs font-semibold uppercase">
                {selectedPost.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-2 pr-8 leading-snug">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-200 mt-3">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="rounded-xl overflow-hidden mb-4 max-h-60">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {selectedPost.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-[#0B3C5D] font-medium space-y-1">
                <div className="font-bold">Have questions about your dental health?</div>
                <p>
                  Schedule a thorough clinical examination with Dr. Ali Akhtar Khan at Advance Maxillofacial Implant & Dental Clinic in Saddar, Rawalpindi.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  const title = selectedPost.title;
                  setSelectedPost(null);
                  onOpenAppointment(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0B3C5D] hover:bg-[#328CC1] text-white font-bold text-xs transition-colors shadow-sm"
              >
                Book Dental Consultation
              </button>

              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
