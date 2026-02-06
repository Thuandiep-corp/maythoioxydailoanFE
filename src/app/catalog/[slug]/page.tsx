import Link from 'next/link';
import { productList } from '@/moocs/catalog';
import { ProductCard, ProductGallery, ProductInfo } from '@/components';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>
}

export default async function ProductDetailPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const product = productList.find((p) => p.slug === slug) ?? productList[0];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <h1 className="text-2xl font-bold text-slate-800">Không tìm thấy sản phẩm</h1>
        <p className="text-slate-600">
          Sản phẩm có mã <span className="font-mono font-bold text-red-500">"{slug}"</span> không tồn tại trong hệ thống.
        </p>
        <Link 
          href="/" 
          className="px-6 py-2 bg-[#408ebd] text-white rounded-lg hover:bg-[#357abd] transition-colors"
        >
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  const productImages = product.images || (product.images ? [product.images] : ["/logo.png"]);

  return (
    <article className="min-h-screen bg-white pb-20 pt-5">
      <div className="container mx-auto px-4 lg:px-8">
        
        <section className="flex items-center gap-2 mb-8 text-sm font-medium overflow-x-auto whitespace-nowrap">
          <Link className="text-gray-500 hover:text-[#408ebd] transition-colors" href="/">
            Trang chủ
          </Link>
          <span className="text-gray-400">/</span>
          <Link className="text-gray-500 hover:text-[#408ebd] transition-colors" href="/catalog">
            Sản phẩm
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#408ebd] truncate max-w-50 sm:max-w-none font-semibold">
            {product.name}
          </span>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <aside className="lg:col-span-5">
               <ProductGallery images={productImages} />
            </aside>
            <div className="lg:col-span-7">
               <ProductInfo product={product} />
            </div>
        </section>
      <section className="mt-16 pt-16 border-t border-slate-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Sản phẩm tương tự</h2>
        <Link href={`/catalog`} className="text-sm font-medium text-[#408ebd] hover:underline flex items-center gap-1">
          Xem tất cả <ArrowRight size={16} />
        </Link>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            { 
              productList
                .slice(0, 4)
                .map((item, index) => <ProductCard key={'related-product-'+ item.id + '-' + index} data={item} />)
            }
      </div>
    </section>
      </div>
    </article>
  );
}