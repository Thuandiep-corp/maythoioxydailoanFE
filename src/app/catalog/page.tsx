import { CategorySidebar, ProductCard } from "@/components";
import { getProductCategoryList, getProductList } from "@/action/product.action";
type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export const revalidate = 3600; // 1 hour

export default async function Page({ searchParams } : Props) {
  const responseCategories = await getProductCategoryList()
  const categories = responseCategories?.data || []
  const category = (await searchParams)?.category || "all"
  const responseProducts = await getProductList({ categorySlug: category })
  const productsList = responseProducts?.data || []

  return (
    <article className={`container mx-auto px-4 w-full py-6 sm:py-10 flex flex-col lg:flex-row gap-8`}>
      <CategorySidebar categories={categories} />
      <section className="flex-1">
        <section className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 leading-tight">
            Máy thổi oxi đài loan
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
            Phân phối chính hãng các thiết bị xử lý nước, máy nén khí, động cơ giảm tốc từ các thương hiệu hàng đầu
            Đài Loan.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {
            productsList.map((item:any, index: number) => <ProductCard key={'product-item-' + item.id + '-' + index} data={item} imgAtributes={{
              loading: index === 0 ? 'eager' : 'lazy',
              decoding: index === 0 ? 'async' : 'auto',
              fetchPriority: index === 0 ? 'high' : 'auto'
            }} />)
          }
        </div>
      </section>
    </article>
  );
}