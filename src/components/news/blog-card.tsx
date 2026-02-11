import { IMAGE_URL } from "@/const"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
     data: Record<string, any>
}

export function BlogCard({ data }: Props) { 
    return (
        <Link 
            href={`/news/events/${data.slug}`} 
            className="group relative h-100 rounded-2xl overflow-hidden cursor-pointer block"
        >
            <Image
                height={300}
                width={600}
                src={data?.thumbnail?.url ? `${IMAGE_URL}${data?.thumbnail?.url}` : '/logo.png'}
                loading="eager"
                fetchPriority="high"
                alt={data?.thumbnail?.alternativeText || ''}
                title={ data?.thumbnail?.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white/60 via-white/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-3 leading-tight transition-colors line-clamp-1">
                        { data.title}
                </h3>
                <p className="text-sm line-clamp-2 mb-6 opacity-90 leading-relaxed" dangerouslySetInnerHTML={{
                    __html: data?.content || ""
                }}/>
                <p className="flex items-center gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                        {data.created_date}
                    </span>
                </p>
            </div>
        </Link>
    )
}