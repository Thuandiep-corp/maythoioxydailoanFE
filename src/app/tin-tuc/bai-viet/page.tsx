import React from 'react';
import Link from 'next/link';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';

export function NewsPost() {
  
  const newsItems = [
    {
      title: "Xu hướng gia công CNC chính xác cao năm 2024",
      date: "12 Tháng 10, 2023",
      category: "Công nghệ",
      image: "https://placehold.co/600x400/png?text=CNC+Machining", 
      desc: "Khám phá những tiến bộ mới nhất trong công nghệ gia công kim loại và cách chúng tối ưu hóa quy trình sản xuất của bạn."
    },
    {
      title: "Cơ Khí Việt tại Triển lãm Công nghiệp Quốc tế",
      date: "05 Tháng 10, 2023",
      category: "Sự kiện",
      image: "https://placehold.co/600x400/png?text=Event",
      desc: "Nhìn lại những khoảnh khắc đáng nhớ và các giải pháp đột phá được chúng tôi giới thiệu tại triển lãm vừa qua."
    },
    {
      title: "Cách lựa chọn vật liệu thép không gỉ phù hợp",
      date: "28 Tháng 09, 2023",
      category: "Kiến thức",
      image: "https://placehold.co/600x400/png?text=Steel",
      desc: "Hướng dẫn chi tiết về các loại thép không gỉ 304, 316 và ứng dụng của chúng trong môi trường khắc nghiệt."
    }
  ];

  return (
    <article>
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Newspaper className="text-[#408ebd]" size={28} />
              Tin tức mới
            </h2>
            <Link 
              href="/tin-tuc/bai-viet" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem tất cả tin tức <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-4 border border-gray-200">
                  <img 
                    alt={item.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                    src={item.image}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#408ebd] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/tin-tuc/bai-viet">
                <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-gray-50 text-gray-900 text-sm font-bold border border-gray-200 hover:bg-gray-100 transition-colors">
                Xem tất cả tin tức
                </button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
