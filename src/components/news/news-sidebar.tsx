"use client";
import React from 'react';
import Link from 'next/link';
import { FileText, Calendar, ArrowRight, Mail } from 'lucide-react';
import { news } from '@/moocs/news'; 

export function NewsSidebar() {
  const recentDocs = news.filter(item => item.type === 'docs').slice(0, 3);
  const recentNews = news.filter(item => item.type === 'news').slice(0, 5);

  return (
    <aside className="space-y-8">
      
      <div className="rounded-2xl bg-[#0ea5e9] p-6 text-white shadow-md">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
           <Mail size={20} /> Stay Updated
        </h3>
        <p className="mb-6 text-sm text-sky-100">
            Get the latest industry news and tips delivered to your inbox.
        </p>
        <div className="flex gap-2">
            <input 
                type="email" 
                placeholder="Your email" 
                className="w-full rounded-lg bg-white/20 px-4 py-2 text-sm text-white placeholder-sky-100 outline-none backdrop-blur-sm focus:bg-white/30 border border-white/20"
            />
            <Link href="/contact">
                <button className="rounded-lg bg-white px-5 py-2 text-sm font-bold text-[#0ea5e9] transition hover:bg-sky-50 whitespace-nowrap h-full">
                    Join
                </button>
            </Link>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
          <FileText size={18} className="text-[#0ea5e9]" />
          Tài liệu kỹ thuật
        </h3>
        <div className="space-y-4">
          {recentDocs.map((doc, prefix) => (
            <Link key={prefix} href={`/news/blogs/${doc.slug}`} className="group flex gap-3 items-start">
              <div className="w-24 aspect-video shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                <img 
                    src={doc.featuredImage} 
                    alt={doc.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-[#0ea5e9] transition-colors leading-snug">
                  {doc.title}
                </h4>
                <span className="text-[11px] text-gray-400 mt-1 block">{doc.publishedDate}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
          <Calendar size={18} className="text-[#0ea5e9]" />
          Bài viết mới
        </h3>
        <div className="space-y-3">
          {recentNews.map((item, idx) => (
            <Link key={idx} href={`/news/blogs/${item.slug}`} className="group block py-2 border-b border-gray-50 last:border-0">
              <h4 className="text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-[#0ea5e9] transition-colors mb-1">
                {item.title}
              </h4>
              <span className="text-[11px] text-gray-400 flex items-center gap-1">
                {item.publishedDate}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}