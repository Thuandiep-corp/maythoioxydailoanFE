"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Eye, Clock } from 'lucide-react';
import { news } from '@/moocs/news';
import { BlogCard } from '@/components/news/blog-card';

type SortOption = 'newest' | 'views';

export function NewsListing() {
  const [filter, setFilter] = useState<SortOption>('newest');
  const sortedNews = useMemo(() => {
    const data = [...news]; 
    
    if (filter === 'newest') {
      return data.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
    } else {
      return data.sort((a, b) => (b.views || 0) - (a.views || 0));
    }
  }, [filter]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
             <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Link href="/" className="hover:text-[#408ebd]">Trang chủ</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Tin tức & Sự kiện</span>
             </div>
             <h1 className="text-3xl font-bold text-gray-900">Tin tức tổng hợp</h1>
             <p className="text-gray-500 mt-2">Cập nhật những thông tin công nghệ và thị trường mới nhất.</p>
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
             <button 
                onClick={() => setFilter('newest')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === 'newest' ? 'bg-[#408ebd] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                }`}
             >
                <Clock size={16} /> Mới nhất
             </button>
             <button 
                onClick={() => setFilter('views')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === 'views' ? 'bg-[#408ebd] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                }`}
             >
                <Eye size={16} /> Xem nhiều
             </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.map((item) => (
              <BlogCard key={'news-listing-' + item.id} data={item} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
            <button className="px-6 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-[#408ebd] hover:text-[#408ebd] transition-colors font-medium">
                Xem thêm tin cũ hơn
            </button>
        </div>
      </div>
    </div>
  );
}