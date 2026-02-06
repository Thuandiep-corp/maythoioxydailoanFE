import { CategorySidebar, ProductGrid } from "@/components";
import { getProductCategoryList } from "@/action/product.action";
import { getProductData } from '@/action/pages.action';
export const revalidate = 3600; // 1 hour

export default async function Page() {
  const responseCategories = await getProductCategoryList()
  const responseProductPage = await getProductData()
  const pageData = responseProductPage?.data?.[0];
  const heroSection = pageData?.PageContent?.filter((item: any) => item.__component === 'sections.hero-section')?.[0];
  const categories = responseCategories?.data || []
  return (
    <article className={`container mx-auto px-4 w-full py-6 sm:py-10 flex flex-col lg:flex-row gap-8`}>
      <CategorySidebar categories={categories} />
      <section className="flex-1">
        <section className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight">
            {heroSection?.title || 'Danh mục sản phẩm'}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
            {heroSection?.excerpt || 'Khám phá danh mục sản phẩm máy thổi oxy Đài Loan chính hãng, đa dạng về mẫu mã và công suất, phù hợp với mọi nhu cầu sử dụng.'}
          </p>
        </section>
        <ProductGrid/>
      </section>
    </article>
  );
}