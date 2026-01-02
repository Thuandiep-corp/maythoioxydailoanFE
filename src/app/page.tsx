import React from 'react';
import { CategorySignature } from '@/components/homepage/category-signature';
import { categories } from '@/moocs/categories';

export default function HomePage() {

  return (
    <article className="bg-gray-50 min-h-screen pb-10">
      <section className="w-full">
        <div className="w-full h-50 md:h-100 bg-linear-to-r from-[#408ebd] to-[#2b6cb0] flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">BANNER QUẢNG CÁO</h2>
            <p className="opacity-80">Hình ảnh và nội dung khuyến mãi sẽ được đặt tại đây</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 mt-8">
      {categories.map((cat) => (
           <CategorySignature key={cat.slug} cat={cat}/>))}
      </section>
    </article>
  );
}