import Link from "next/link"; // 1. Thêm import Link
import { ArrowRight } from "lucide-react"; // 2. Thêm import Icon
import { productList } from "@/moocs/catalog";
import { ProductCard } from "@/components";

interface BestSellerProps {
  data: {
    title?: string;
    subtitle?: string;
  } | null;
  products: any[];
}
export function BestSeller({ data, products = [] }: BestSellerProps) {
  const title = data?.title || "Thiết bị bán chạy nhất";
  const subTitle = data?.subtitle || "SẢN PHẨM NỔI BẬT";
  return (
     <section className="py-16 w-full bg-white">
       <div className="container mx-auto px-4 lg:px-8">
         
         {/* HEADER */}
         <div className="flex items-end justify-between mb-8">
           <div>
             <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
               {subTitle}
             </span>
             <h2 className="mt-1 text-2xl font-bold text-slate-900">
               {title}
             </h2>
           </div>

           {/* Nút Xem tất cả (Desktop) */}
           <Link 
             href="/catalog" 
             className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors mb-1"
           >
             Xem tất cả sản phẩm <ArrowRight size={18} />
           </Link>
         </div>

         {/* LIST PRODUCT */}
         {/* Nếu có products truyền vào thì map, nếu không thì hiển thị thông báo hoặc skeleton */}
         {products && products.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.slice(0, 8).map((prod, i) => (
                    <ProductCard key={prod.id || i} data={prod} />
                ))}
            </div>
         ) : (
            <div className="text-center py-10 text-gray-500">
                Đang cập nhật sản phẩm...
            </div>
         )}

         {/* Nút Xem tất cả (Mobile) */}
         <div className="mt-8 sm:hidden">
            <Link href="/catalog" className="block w-full">
                <button className="w-full h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-all text-sm">
                Xem tất cả sản phẩm
                </button>
            </Link>
         </div>

       </div>
     </section>
   )
}