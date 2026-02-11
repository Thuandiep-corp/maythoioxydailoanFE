import { ArrowRight } from "lucide-react";
import { DocumentCard } from "../news";
import Link from "next/link";

interface Props {
  data?: {
    Title?: string;
    SubTitle?: string;
    blogs: any[];
  }
}

export function DocumentSignature({ data }: Props) { 
    const subTitle = data?.SubTitle || 'TÀI LIỆU KỸ THUẬT'
    const title = data?.Title || 'Thông số & Hướng dẫn sử dụng'
    const blogs = data?.blogs || []
    if (blogs?.length === 0) return <></>
    return (
     <section className="py-8 pt-6 pb-8 bg-white">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="text-center mb-10">
             <span className="text-[13px] font-bold tracking-widest text-blue-500 uppercase underline">
               {subTitle}
             </span>
             <h2 className="mt-2 text-3xl font-bold text-slate-900">
               {title}
             </h2>
          </div>
          <div className="flex justify-end mb-6">
            <Link
              href="/news/documents"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem kho tài liệu <ArrowRight size={18} />
            </Link>
          </div>
          <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((data, i) => (
              <DocumentCard key={'document-item' + i} data={data} />
            ))}
          </section>
        </div>
      </section>
    )
}