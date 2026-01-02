import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, FileType, Table, Download } from 'lucide-react';

interface DocumentListProps {
  limit?: number;
  showViewAll?: boolean;
}
export function DocumentList({ limit, showViewAll = true }: DocumentListProps) {

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

  const displayItems = limit ? documents.slice(0, limit) : documents;

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-[#408ebd]" size={28} />
            Tài liệu kỹ thuật
          </h2>
          {showViewAll && (
            <Link 
              href="/tin-tuc/tai-lieu" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem kho tài liệu <ArrowRight size={18} />
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayItems.map((doc, index) => (
            <div key={index} className="group bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md hover:border-[#408ebd]/30 transition-all cursor-pointer flex items-start gap-4">
              <div className={`w-12 h-12 rounded-lg ${doc.bg} flex items-center justify-center flex-shrink-0`}>
                {doc.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-900 truncate group-hover:text-[#408ebd] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-3 line-clamp-1">
                  {doc.desc}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{doc.type}</span>
                  <span>{doc.size}</span>
                  <span className="ml-auto flex items-center text-[#408ebd] group-hover:underline">
                    Tải về <Download size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}