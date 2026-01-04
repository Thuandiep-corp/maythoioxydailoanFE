
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    data: Record<string,any>
}

export function DocumentCard({data }: Props) { 
    return (
        <section className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-lg" >
            <div className="relative aspect-video overflow-hidden">
                <Image
                    width={400} height={225}
                    src={data.featuredImage}
                    alt={data.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <p className="absolute top-3 left-3 rounded bg-blue-600 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                {data.category}
                </p>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-slate-400">
                    <time dateTime={data.publishedDate}>{data.publishedDate}</time>
                </div>
                <h3 className="mb-3 line-clamp-2 text-base font-bold text-slate-900 group-hover:text-blue-600">
                    <Link href={`/news/documents/${data.slug}`}>{data.title}</Link>
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-slate-500 leading-relaxed">{data.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-slate-50">
                    <Link
                    href={`/news/documents/${data.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-wider"
                    >
                    Đọc chi tiết <ChevronRight className="h-3 w-3" />
                    </Link>
                </div>
            </div>
        </section>
    )
}