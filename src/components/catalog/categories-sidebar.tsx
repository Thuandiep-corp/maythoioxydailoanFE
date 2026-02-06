"use client"

import { ArrowRight, Filter } from "lucide-react";
import {useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
    categories: Array<Record<string, any>>
}

export function CategorySidebar({ categories }: Props) { 
    const searchParams = useSearchParams()
    const activeCategory = searchParams.get("category") || "all"
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
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
                name: "Tất cả",
                slug: "all",
                count: 100
              }, ...categories].map((cat) => (
                <li key={cat.slug} onClick={() => {
                  window.history.pushState({}, "", `/catalog${cat.slug === 'all' ? '' : `?category=${cat.slug}`}`);
                }} className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors cursor-pointer ${
                  (activeCategory === cat.slug)
                    ? "bg-brand-light text-brand-blue font-medium"
                    : "text-slate-600 hover:bg-slate-50"
                }`}>
                  <span className="flex items-center gap-2 uppercase">
                    {cat.name}
                    {(activeCategory === cat.slug) && (
                      <ArrowRight size={14} className="-rotate-45" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
        </div>
      </aside></>
    )
}