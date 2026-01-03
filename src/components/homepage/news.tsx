import { newsList } from "@/moocs/news-and-document";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function News() { 
    return(
        <section className="py-16 w-full bg-white">
            <section className="container mx-auto px-4 lg:px-8">
                <section className="grid gap-12 lg:grid-cols-2">
                    <section>
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-900">Tin tức & Sự kiện</h2>
         
                        </div>
                        <div className="flex flex-col gap-6">
                        { 
                            newsList.slice(0, 3).map((post) => (
                                <div key={'news-item' + post.slug}>
                                    <Link href={`/blog/news/${post.slug}`} className="flex gap-4 group">
                                        <Image src={post.img} width={128} height={80} alt="News" className="aspect-video rounded-md object-cover" />
                                        <div>
                                            <p className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.category}</span>
                                            </p>
                                            <h3 className="mt-1 line-clamp-1 font-bold text-slate-900 group-hover:text-blue-600">
                                            {post.title}
                                            </h3>
                                            <p className="mt-1 line-clamp-2 text-xs text-slate-500">
                                            {post.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        <Link href="/blog/news" className="text-sm font-semibold text-blue-600 hover:underline mx-auto">
                            Xem tin cũ hơn
                            </Link>
                        </div>
                    </section>
                    <section>
                        <h2 className="mb-8 text-2xl font-bold text-slate-900">Video Nổi bật</h2>
                        <div className="group relative aspect-video w-full overflow-hidden rounded-lg">
                            <iframe width="580" height="327" src="https://www.youtube.com/embed/b4JxtKSNpBY?si=-Efe9_rrRA3XRIt6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"/>
                        </div>
                    </section>
                </section>
            </section>
        </section>
)
}