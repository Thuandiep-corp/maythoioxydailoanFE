import { productList } from "@/moocs/catalog";
import { ProductCard } from "@/components";

export function BestSeller() {
    return (
      <section className="py-16 w-full bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">SẢN PHẨM NỔI BẬT</span>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">Thiết bị bán chạy nhất</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productList.slice(0, 12).map((prod, i) => (
              <ProductCard key={i} data={prod} />
            ))}
          </div>
        </div>
      </section>
    )
 }