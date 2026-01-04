import Link from "next/link"; // 1. Thêm import Link
import { ArrowRight } from "lucide-react"; // 2. Thêm import Icon
import { productList } from "@/moocs/catalog";
import { ProductCard } from "@/components";

export function BestSeller() {
   return (
     <section className="py-16 w-full bg-white">
       <div className="container mx-auto px-4 lg:px-8">
         
         {/* HEADER: Tiêu đề bên trái, Link bên phải */}
         <div className="flex items-end justify-between mb-8"> {/* Thêm items-end để căn chân chữ, mb-8 để tách grid */}
           <div>
             <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">SẢN PHẨM NỔI BẬT</span>
             <h2 className="mt-1 text-2xl font-bold text-slate-900">Thiết bị bán chạy nhất</h2>
           </div>

           {/* Nút Xem tất cả (Desktop) */}
           <Link 
             href="/san-pham" 
             className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors mb-1"
           >
             Xem tất cả sản phẩm <ArrowRight size={18} />
           </Link>
         </div>

         {/* GRID: Giới hạn 4 sản phẩm */}
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
           {/* Sửa slice(0, 12) thành slice(0, 4) */}
           {productList.slice(0, 4).map((prod, i) => (
             <ProductCard key={i} data={prod} />
           ))}
         </div>

         {/* Nút Xem tất cả (Mobile - Hiện dưới cùng) */}
         <div className="mt-8 sm:hidden">
            <Link href="/san-pham" className="block w-full">
                <button className="w-full h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-all text-sm">
                Xem tất cả sản phẩm
                </button>
            </Link>
         </div>

       </div>
     </section>
   )
}