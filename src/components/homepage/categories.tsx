import { IMAGE_URL } from "@/const";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data?: {
    categories?: string;
    title?: string;
    category_products: any[];
  }
}

export async function Categories({ data }: Props) { 
  const title = data?.title || "Giải pháp cho mọi nhu cầu"
  const subTitle = data?.categories || 'DANH MỤC SẢN PHẨM'
  const categories = data?.category_products || []
  
  if (categories?.length === 0) return <></>

  return (
    <section className="bg-slate-50 pt-6 pb-8 ">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-[13px] font-bold tracking-widest text-blue-500 uppercase underline">
            {subTitle}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{title}</h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat: any) => {
            const imgInfor = cat?.image || {};
            return(
              <Link href={`/catalog?category=${cat?.slug}`}
                key={cat?.slug}
                className="flex flex-col items-center gap-4 rounded-md border border-slate-100 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1 
                           last:col-span-2 last:w-[calc(50%-0.5rem)] last:mx-auto 
                           md:last:col-span-1 md:last:w-auto md:last:mx-0"
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