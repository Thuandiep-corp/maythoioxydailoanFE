import React from 'react';
import { NewsList } from '@/components/news/news-list';
import { DocumentList } from '@/components/news/document-list';
import { VideoList } from '@/components/news/video-list';

export default function TinTucPage() {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-white pt-8 pb-4 border-b border-dashed border-gray-200">
          <div className="max-w-[960px] mx-auto px-4">
              <nav className="flex items-center text-sm text-gray-500 mb-6">
                  <a href="/" className="hover:text-[#408ebd] transition-colors">Trang chủ</a>
                  <p className="mx-2">/</p>
                  <p className="text-blue-500">Tin tức & Tài nguyên</p>
              </nav>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                  Tin tức & Tài nguyên
              </h1>
          </div>
      </div>

      <NewsList limit={3} />
      <DocumentList limit={2} />
      <VideoList limit={3} />
    </div>
  );
}