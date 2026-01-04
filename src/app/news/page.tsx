
import { BlogCard, DocumentCard, VideoCard } from '@/components';
import { newsList, videoList } from '@/moocs/news-and-document';
import { ArrowRight, FileText, MonitorPlay } from 'lucide-react';
import Link from 'next/link';

export default function TinTucPage() {
  return (
    <article className="container mx-auto px-4 w-full py-6 sm:py-10 space-y-10">
      <section className="">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Tin tức & Tài nguyên
          </h1>
          <p className="text-gray-500 text-lg">
              Tổng hợp các bài viết chuyên ngành, tài liệu kỹ thuật và video hướng dẫn sử dụng sản phẩm.
          </p>
      </section>
      <section className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Filter:</span>
            <div className="relative">
              <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-slate-100 transition-colors whitespace-nowrap">
                ALL TOPICS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="flex p-1 bg-slate-50 rounded-lg border border-slate-100">
              <div className="px-4 py-1.5 text-xs font-semibold rounded-md bg-white shadow-sm text-sky-600">
                NEWS
              </div>
              <div className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-700">
                DOCS
              </div>
              <div className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-700">
                VIDEOS
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search content..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
      </section>
      <section className="mb-16">
          <section className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Tin tức mới nhất</h2>
            </div>
            <Link href="/news/blogs" className="flex items-center text-sm font-bold text-sky-600 hover:underline">
              Xem tất cả tin tức  <ArrowRight size={18} />
            </Link>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsList.slice(0, 2).map((data, index) => <BlogCard data={data} key={'news-item-card-'+ index} />) }
          </section>
      </section>     
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-[#408ebd]" size={28} />
            Tài liệu kỹ thuật
          </h2>
          <Link 
            href="/news/documents" 
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
          >
            Xem kho tài liệu <ArrowRight size={18} />
          </Link>
        </div>
          <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsList.slice(5,8).map((data, i) => ( <DocumentCard key={'document-item' + i} data={data} /> ))}
          </section>
      </section>
      <section>     
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MonitorPlay className="text-[#408ebd]" size={28} />
            Video & Hướng dẫn
          </h2>        
            <Link 
              href="/news/video" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem tất cả video <ArrowRight size={18} />
            </Link>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {videoList.map((data, index) => {
            return (
              <VideoCard data={data}
               key={'video-list-item-'+index}/>
            );
          })}
        </div>
      </section>
    </article>
  );
}