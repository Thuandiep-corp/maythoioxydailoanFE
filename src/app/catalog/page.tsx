'use client';

import { ProductCard } from "@/components";
import { productList } from "@/moocs/catalog";
import { categories } from "@/moocs/categories";
import { ArrowRight, Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") ?? "all")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [activeCategory, pageNumber])
  return (
      <article className="container mx-auto px-4 w-full py-6 sm:py-10 flex flex-col lg:flex-row gap-8">
      <div
        className="lg:hidden flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg mb-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Filter size={18} />
        {isSidebarOpen ? "Đóng bộ lọc" : "Danh mục sản phẩm"}
      </div>
      <aside className={`lg:w-72 shrink-0 space-y-6 ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4 px-2">Danh mục sản phẩm</h2>
          <ul className="space-y-1 select-auto">
                      {[{
                          title: "Tất cả",
                          slug: "all",
                          count: 100
                      },...categories].map((cat) => (
              <li key={cat.slug} onClick={() => {
                    setActiveCategory(cat.slug)
                    setIsSidebarOpen(false)
                  }} className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors cursor-pointer ${
                    (activeCategory === cat.slug)
                      ? "bg-brand-light text-brand-blue font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}>
                  <span className="flex items-center gap-2">
                    {cat.title}
                    {(activeCategory === cat.slug) && (
                      <ArrowRight size={14} className="-rotate-45" />
                    )}
                  </span>
                  {<span className="text-xs text-slate-400">{cat?.count || 0}</span>}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="flex-1">
        <section className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight">
            Máy thổi oxi đài loan
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
            Phân phối chính hãng các thiết bị xử lý nước, máy nén khí, động cơ giảm tốc từ các thương hiệu hàng đầu
            Đài Loan.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          { 
              productList.map((item, index) => <ProductCard key={'product-item-'+ item.id + '-' + index} data={item} />)
          }
        </div>
        <div className="mt-12 flex justify-center items-center gap-2 select-none">
          <div className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:border-brand-blue hover:bg-slate-50 transition-colors" onClick={() => setPageNumber(pre => pre - 1)}>
            <ArrowRight className="rotate-180" size={18} />
                  </div>
                  { 
                      Array(3).fill(null).map((_, index) => (
                          <div key={'prudct-list-paging-item-' + index} className={`flex items-center justify-center w-10 h-10 border border-slate-200 rounded-xl font-bold text-slate-600 ${pageNumber === index + 1 ? 'bg-blue-900 text-white shadow-md' : 'bg-white hover:bg-slate-50 shadow-none'}`} onClick={()=> setPageNumber(index+1)}>{index + 1}</div>
                      ))
                  }
          <div className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:border-brand-blue hover:bg-slate-50 transition-colors">
            <ArrowRight size={18} />
          </div>
        </div>
      </section>
    </article>
  );
}