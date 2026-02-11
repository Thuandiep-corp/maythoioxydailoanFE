import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "./blog-card";
interface Props {
  data?: {
    Title?: string;
    SubTitle?: string;
    blogs: any[];
  }
}

export function EventSignature({ data }: Props) { 
    const title = data?.Title || 'Tin tức mới nhất'
    const blogs = data?.blogs || []
    
    if (blogs?.length === 0) return <></>
    return (
        <section className="mb-16">
          <section className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
                <Calendar />
              </div>
            <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <Link href="/news/events" className="flex items-center text-sm font-bold text-sky-600 hover:underline">
              Xem tất cả tin tức  <ArrowRight size={18} />
            </Link>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.slice(0, 2).map((data, index) => <BlogCard data={data} key={'news-item-card-'+ index} />) }
          </section>
      </section>  
    )
}