import { categories } from "@/moocs/categories";
import Image from "next/image";
import Link from "next/link";

export function Categories() { 
    return       (<section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">DANH MỤC SẢN PHẨM</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Giải pháp cho mọi nhu cầu</h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((cat, i) => (
              <Link href={`/catalog/${cat.slug}`}
                key={i}
                className="flex flex-col items-center gap-4 rounded-md border border-slate-100 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              > <Image src={cat.img} alt={cat.slug} width={80} height={60} className="aspect-video max-w-25"></Image>
                <p className="text-sm font-semibold text-slate-700 line-clamp-1">{cat.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>)
}