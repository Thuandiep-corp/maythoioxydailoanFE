import { getHomepageData } from '@/action/pages.action';
import { getProductCategoryList, getProductList } from '@/action/product.action';
import { BestSeller, Carousel, Categories, DocumentCard, News } from '@/components';
import { newsList } from '@/moocs/news-and-document'; 
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 3600; 

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function HomePage({ searchParams }: Props) {
  const responseCategories = await getProductCategoryList();
  const categories = responseCategories?.data || [];

  const homeResponse = await getHomepageData();
  const homePageData = homeResponse?.data?.[0]; 

  const productHighlightSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.product-highlight');
  const blogHighlightSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.blog-highlight');
  const productListResponse = await getProductList({ page: 1, pageSize: 8 });
  const bestSellerProducts = productListResponse?.data || [];

  return (
    <article className="bg-gray-50 min-h-screen">
      <Carousel />
      <Categories categories={categories} />
      <BestSeller 
        data={productHighlightSection} 
        products={bestSellerProducts} 
      />
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                {blogHighlightSection?.SubTitle || 'TÀI LIỆU KỸ THUẬT'}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {blogHighlightSection?.Title || 'Thông số & Hướng dẫn sử dụng'}
              </h2>
            </div>
            <Link
              href="/news/documents"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem kho tài liệu <ArrowRight size={18} />
            </Link>
          </div>
          
          <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsList.slice(5, 8).map((data, i) => (
              <DocumentCard key={'document-item' + i} data={data} />
            ))}
          </section>
        </div>
      </section>
      <News />
    </article>
  );
}