import Link from 'next/link';
import { FileText, ArrowRight, Eye, Calendar, ArrowLeft } from 'lucide-react';
import { documents } from '@/moocs/document';

interface DocumentListProps {
  limit?: number;
  showViewAll?: boolean;
}

export function DocumentList({ limit, showViewAll = true }: DocumentListProps) {

  const displayItems = limit ? documents.slice(0, limit) : documents;

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-[#408ebd]" size={28} />
            Tài liệu kỹ thuật
          </h2>
          {showViewAll ? (
            <Link 
              href="/tin-tuc/tai-lieu" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem kho tài liệu <ArrowRight size={18} />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayItems.map((doc, index) => (
            <article key={index} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <Link href={doc.link} target="_blank" className="relative aspect-[4/3] w-full overflow-hidden block">
                <img 
                  alt={doc.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                  src={doc.image}
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  <Calendar size={14} /> {doc.date}
                </div>
                <Link href={doc.link} target="_blank" className="block">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#408ebd] transition-colors line-clamp-2">
                    {doc.title}
                    </h3>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                  {doc.desc}
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
                    <Link 
                        href={doc.link} 
                        target="_blank"
                        className="text-sm font-semibold text-[#408ebd] flex items-center gap-1 hover:underline"
                    >
                        Đọc tài liệu <Eye size={16} />
                    </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}