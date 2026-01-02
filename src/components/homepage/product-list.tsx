"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { productList } from '@/moocs/catalog';
import { categories } from '@/moocs/categories';

export function ProductList() {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  return (
    <div className="flex flex-col gap-12">
      {categories.map((cat, index) => (
        <section key={index} className="flex flex-col gap-4">
          <div className="border-b-2 border-[#408ebd] pb-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">
              {cat.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productList.slice(0, 5).map((product, pIndex) => (
              <div key={pIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <Link href={`/san-pham/${product.id}`} className="block">
                      <h3 className="text-sm font-medium text-gray-700 line-clamp-2 min-h-[40px] mb-2 group-hover:text-[#408ebd] transition-colors" title={product.name}>
                      {product.name}
                      </h3>
                  </Link>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2 hidden md:block">
                      {product.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-red-600 font-bold text-sm md:text-base">
                      {formatPrice(product.price)}
                    </span>
                    <div className="bg-[#408ebd] text-white p-1.5 rounded-full hover:bg-[#2b6cb0] transition-colors cursor-pointer" title="Thêm vào giỏ">
                      <ShoppingCart size={16} />
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
}