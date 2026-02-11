import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { DocumentCard } from "./document-card";
interface Props {
  data?: {
    Title?: string;
    SubTitle?: string;
    blogs: any[];
  }
}

export function DocumentSignature({ data }: Props) { 
    const title = data?.Title || 'Tin tức mới nhất'
    const blogs = data?.blogs || []
    
    if (blogs?.length === 0) return <></>
    return (
        <section>
            <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="text-[#408ebd]" size={28} />
                {title}
            </h2>
            <Link 
                href="/news/documents" 
                className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
                Xem kho tài liệu <ArrowRight size={18} />
            </Link>
            </div>
            <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((data, i) => ( <DocumentCard key={'document-item' + i} data={data} /> ))}
            </section>
      </section>
    )
}