import { Clock } from "lucide-react"
import Image from "next/image"

type Props = {
     data: Record<string, any>
}

export function BlogCard({ data }: Props) { 
    return (
        <section className="group relative h-100 rounded-2xl overflow-hidden cursor-pointer">
            <Image
                height={300}
                width={600}
                src={data.featuredImage}
                loading="eager"
                fetchPriority="high"
            alt="Expo Hall"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-sky-300 transition-colors line-clamp-1">
                        { data.title}
                </h3>
                <p className="text-slate-300 text-sm line-clamp-2 mb-6 opacity-90 leading-relaxed">
                        { data.excerpt}
                </p>
                <p className="flex items-center gap-4 text-slate-400 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                    <Clock />
                        { data.publishedDate}
                    </span>
                </p>
            </div>
        </section>
    )
}