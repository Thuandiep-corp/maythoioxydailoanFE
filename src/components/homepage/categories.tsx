import { getProductCategoryList } from "@/action/product.action";
import { IMAGE_URL } from "@/const";
import Image from "next/image";
import Link from "next/link";

export async function Categories() { 
  const response = await getProductCategoryList()
  if (!response) return null
  const categories = response?.data || []
  if (categories.length === 0) return null
  console.log(categories);
  
  return (
    <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">DANH MỤC SẢN PHẨM</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Giải pháp cho mọi nhu cầu</h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat: any) => {
            const imgInfor = cat?.image || {};
            return(
              <Link href={`/catalog?category=${cat?.slug}`}
                key={cat?.slug}
                className="flex flex-col items-center gap-4 rounded-md border border-slate-100 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video max-w-25">
                  <Image src={`${IMAGE_URL}${imgInfor?.url}`} alt={cat?.alternativeText || 'Category image'} title={imgInfor?.title || cat.name} width={imgInfor?.width || 96} height={imgInfor?.height || 70} className="w-full h-full object-contain"/>
                </div>
                <p className="text-sm font-semibold text-slate-700 line-clamp-1">{cat.name}</p>
              </Link>
            )})}
          </div>
        </div>
    </section>
  )
}