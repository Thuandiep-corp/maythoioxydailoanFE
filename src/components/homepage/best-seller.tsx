import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components";

interface BestSellerProps {
  data?: {
    title?: string;
    subtitle?: string;
    products: any[];
  }
}

export function BestSeller({ data }: BestSellerProps) {
  const title = data?.title || "Thiết bị bán chạy nhất";
  const subTitle = data?.subtitle || "SẢN PHẨM NỔI BẬT";
  const products = data?.products || [];

  return (
     <section className="py-8 pt-6 pb-8 bg-white">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="text-center mb-10">
             <span className="text-[13px] font-bold tracking-widest text-blue-500 uppercase underline">
               {subTitle}
             </span>
             <h2 className="mt-2 text-3xl font-bold text-slate-900">
               {title}
             </h2>
          </div>
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
         <div className="mt-10 flex justify-center">
            <Link href="/catalog">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all text-sm shadow-sm hover:shadow-md">
                   Xem tất cả sản phẩm
                   <ArrowRight size={16} />
                </button>
            </Link>
         </div>

       </div>
     </section>
   )
}