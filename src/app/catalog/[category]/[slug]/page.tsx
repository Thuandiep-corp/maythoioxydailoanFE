import Link from 'next/link';
import { productList } from '@/moocs/catalog';
import { ProductGallery } from '@/components/catalog/product-gallery';
import { ProductInfo } from '@/components/catalog/product-info';
import { RelatedProducts } from '@/components/catalog/related-products';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>
}

export default async function ProductDetailPage(props: PageProps) {
  const params = await props.params;
  const { category, slug } = params;

  const product = productList.find((p) => p.slug === slug);

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
          <Link className="text-gray-500 hover:text-[#408ebd] transition-colors" href="/san-pham">
            Sản phẩm
          </Link>
          <span className="text-gray-400">/</span>
          <Link className="text-gray-500 hover:text-[#408ebd] transition-colors capitalize" href={`/catalog/${category}`}>
             {category}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#408ebd] truncate max-w-[200px] sm:max-w-none font-semibold">
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

        <RelatedProducts 
            currentProductId={product.id}
            category={product.category}
            allProducts={productList}
        />

      </div>
    </article>
  );
}