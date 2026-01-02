import React from 'react';
import { ProductList } from '@/components/homepage/product-list';

export default function HomePage() {

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <section className="w-full">
        <div className="w-full h-[200px] md:h-[400px] bg-gradient-to-r from-[#408ebd] to-[#2b6cb0] flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">BANNER QUẢNG CÁO</h2>
            <p className="opacity-80">Hình ảnh và nội dung khuyến mãi sẽ được đặt tại đây</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 mt-8">
         <ProductList />
      </div>
    </div>
  );
}