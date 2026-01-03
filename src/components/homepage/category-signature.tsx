import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { productList } from '@/moocs/catalog';
import { ProductCard } from '@/components/catalog/product-card';
type Props = {
  cat: Record<string, any>;
}

export function CategorySignature({ cat }: Props) {
  return (
        <section key={'category-slug-'+ cat.slug} className="flex flex-col gap-4">
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
              href={`/catalog/${cat.slug}`}
              className="inline-flex items-center gap-2 border border-[#408ebd] text-[#408ebd] px-8 py-2.5 rounded-full font-medium hover:bg-[#408ebd] hover:text-white transition-all text-sm uppercase tracking-wide"
             >
               Xem tất cả sản phẩm <ChevronRight size={16} />
             </Link>
          </div>
        </section>
  );
}