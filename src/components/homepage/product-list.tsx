"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { productList } from '@/moocs/catalog';
import { ProductCard } from '@/components/commons/product-card';

export const categories = [
  { id: 'may-thoi-khi-dai-loan', title: "Máy Thổi Khí Đài Loan" },
  { id: 'may-thoi-oxy-dai-loan', title: "Máy thổi Oxy Đài Loan" },
  { id: 'sieu-tiet-kiem-dien', title: "Siêu Tiết Kiệm Điện" },
  { id: 'dau-thoi-khi-dai-loan-rl', title: "Đầu thổi khí Đài Loan RL" },
  { id: 'hang-nhap-khau-nguyen-chiec', title: "Hàng nhập khẩu nguyên chiếc" },
  { id: 'gia-may-thoi-khi-dai-loan', title: "Giá Máy Thổi Khí Đài Loan" },
  { id: 'tim-gia-may-thoi-khi-dai-loan', title: "Tìm Giá Máy Thổi Khí Đài Loan" },
];

export function ProductList() {

  return (
    <article className="flex flex-col gap-12">
      {categories.map((cat, index) => (
        <section key={index} className="flex flex-col gap-4">
          <div className="border-b-2 border-[#408ebd] pb-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">
              {cat.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productList.slice(0, 5).map((item, pIndex) => (
              <ProductCard key={pIndex} data={item} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
             <Link 
              href={`/san-pham/${cat.id}`}
              className="inline-flex items-center gap-2 border border-[#408ebd] text-[#408ebd] px-8 py-2.5 rounded-full font-medium hover:bg-[#408ebd] hover:text-white transition-all text-sm uppercase tracking-wide"
             >
               Xem tất cả sản phẩm <ChevronRight size={16} />
             </Link>
          </div>
        </section>
      ))}
    </article>
  );
}