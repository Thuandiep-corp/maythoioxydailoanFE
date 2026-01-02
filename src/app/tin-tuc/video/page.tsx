"use client";
import React from 'react';
import Link from 'next/link';
import { Newspaper, ArrowRight, Calendar, FileText, FileType, Download, MonitorPlay, Play, Table } from 'lucide-react';

export function Video() {
  
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
  const documents = [
    {
      title: "Catalogue Tổng hợp 2024",
      desc: "Danh sách đầy đủ các sản phẩm và phụ kiện cơ khí.",
      type: "PDF",
      size: "4.5 MB",
      icon: <FileText size={32} className="text-red-500" />,
      bg: "bg-red-50"
    },
    {
      title: "Hướng dẫn vận hành Máy Tiện CNC",
      desc: "Quy trình an toàn và bảo dưỡng định kỳ.",
      type: "DOCX",
      size: "2.1 MB",
      icon: <FileType size={32} className="text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Thông số kỹ thuật Thép S45C",
      desc: "Bảng tra cứu độ cứng và thành phần hóa học.",
      type: "PDF",
      size: "1.2 MB",
      icon: <FileText size={32} className="text-red-500" />,
      bg: "bg-red-50"
    },
    {
      title: "Báo giá Vật tư Tháng 10",
      desc: "Cập nhật giá thép tấm, thép hình và phụ kiện.",
      type: "XLS",
      size: "850 KB",
      icon: <Table size={32} className="text-green-600" />,
      bg: "bg-green-50"
    }
  ];
  const videos = [
    {
      title: "Quy trình Hàn TIG chuyên nghiệp",
      desc: "Hướng dẫn kỹ thuật hàn cơ bản cho người mới bắt đầu.",
      duration: "04:25",
      image: "https://placehold.co/600x400/222/fff?text=Han+TIG" // Ảnh mẫu
    },
    {
      title: "Demo: Robot Cánh tay đòn V5",
      desc: "Trình diễn khả năng tự động hóa trong dây chuyền lắp ráp.",
      duration: "08:10",
      image: "https://placehold.co/600x400/222/fff?text=Robot+Arm" // Ảnh mẫu
    },
    {
      title: "An toàn lao động tại công xưởng",
      desc: "Các quy tắc an toàn bắt buộc khi vận hành máy móc hạng nặng.",
      duration: "12:30",
      image: "https://placehold.co/600x400/222/fff?text=Safety" // Ảnh mẫu
    }
  ];

  return (
    <article className="bg-white min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Newspaper className="text-[#408ebd]" size={28} />
              Tin tức mới
            </h2>
            <Link href="/tin-tuc/bai-viet" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors">
              Xem tất cả tin tức <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-4 border border-gray-200">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" />
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
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/tin-tuc/bai-viet" className="block w-full">
               <button className="w-full h-10 px-4 bg-gray-50 text-gray-900 text-sm font-bold border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">Xem tất cả tin tức</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="text-[#408ebd]" size={28} />
              Tài liệu kỹ thuật
            </h2>
            <Link href="/tin-tuc/tai-lieu" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors">
              Xem kho tài liệu <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="group bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md hover:border-[#408ebd]/30 transition-all cursor-pointer flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${doc.bg} flex items-center justify-center flex-shrink-0`}>{doc.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 truncate group-hover:text-[#408ebd] transition-colors">{doc.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3 line-clamp-1">{doc.desc}</p>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{doc.type}</span>
                    <span>{doc.size}</span>
                    <span className="ml-auto flex items-center text-[#408ebd] group-hover:underline">Tải về <Download size={16} className="ml-1" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/tin-tuc/tai-lieu" className="block w-full">
                <button className="w-full h-10 px-4 bg-white text-gray-900 text-sm font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Xem kho tài liệu</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <MonitorPlay className="text-[#408ebd]" size={28} />
              Video & Hướng dẫn
            </h2>
            <Link 
              href="/tin-tuc/video" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem tất cả video <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-gray-200 mb-3">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#408ebd] group-hover:scale-110 transition-all duration-300">
                      <Play className="text-white ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-[#408ebd] transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {video.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/tin-tuc/video" className="block w-full">
                <button className="w-full h-10 px-4 bg-gray-50 text-gray-900 text-sm font-bold border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                Xem tất cả video
                </button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
