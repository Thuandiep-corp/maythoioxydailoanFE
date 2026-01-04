import Link from 'next/link';
import { Newspaper, ArrowRight, Calendar, ArrowLeft } from 'lucide-react';
import { news } from '@/moocs/news';

interface NewsListProps {
  limit?: number;
  showViewAll?: boolean;
}

export function NewsList({ limit, showViewAll = true }: NewsListProps) {
  
  const displayItems = limit ? news.slice(0, limit) : news;

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Newspaper className="text-[#408ebd]" size={28} />
            Tin tức mới
          </h2>
          {showViewAll ? (
            <Link 
              href="/tin-tuc/bai-viet" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem tất cả tin tức <ArrowRight size={18} />
            </Link>
          ) : (
            <Link 
              href="/tin-tuc" 
              className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#408ebd] transition-colors"
            >
              <ArrowLeft size={18} /> Trở về trang Tin tức
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {displayItems.map((item, index) => (
            <article key={'news-item-index-'+index} className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={item.link} className="relative aspect-4/3 w-full overflow-hidden block">
                <img 
                  alt={item.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                  src={item.image}
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  <Calendar size={14} /> {item.date}
                </div>
                <Link href={item.link} className="block">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#408ebd] transition-colors line-clamp-2">
                    {item.title}
                    </h3>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}