import { IMAGE_URL } from "@/const";
import Image from "next/image";
import Link from "next/link";

interface Props {
  newsData?: {
    Title?: string;
    SubTitle?: string;
    blogs: any[];
  }
  videoData?: {
    title: string,
    videos: any[]
  }
}

export function NewsSignature({ newsData, videoData }: Props) { 
    const title = newsData?.Title || 'Tin tức & Sự kiện'
    const blogs = newsData?.blogs || []
    const video = videoData?.videos?.[0]
    
    return(
        <section className="pt-8 pb-18 w-full bg-white">
            <section className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-8">
                    <span className="text-[13px] font-bold tracking-widest text-blue-500 uppercase underline block mb-2">
                        CẬP NHẬT MỚI NHẤT
                    </span>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                        {title}
                    </h2>
                </div>

                <section className="grid gap-12 lg:grid-cols-2 items-start">
                    <section>
                        <div className="flex flex-col gap-6">
                        { 
                            blogs.map((post) => (
                                <div key={'news-item' + post.slug}>
                                    <Link href={`/blog/news/${post.slug}`} className="flex gap-4 group items-start">
                                        <div className="shrink-0 relative w-32 h-20">
                                            <Image 
                                                src={post?.thumbnail?.url ? `${IMAGE_URL}${post?.thumbnail?.url}` : '/logo.png'}
                                                alt={post?.thumbnail?.alternativeText || ''}
                                                title={post?.thumbnail?.caption} 
                                                fill
                                                className="rounded-md object-cover" 
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="flex items-center gap-2 text-[10px] font-medium text-slate-400 mb-1">
                                                {post.created_date}
                                            </p>
                                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2 leading-snug mb-1">
                                                {post.title}
                                            </h3>
                                            <div className="line-clamp-2 text-xs text-slate-500 overflow-hidden" 
                                                 dangerouslySetInnerHTML={{ __html: post?.content || "" }} 
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        </div>
                        <div className="mt-6 text-center lg:text-left">
                            <Link href="/news/events" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                                Xem tất cả tin tức &rarr;
                            </Link>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-center lg:text-left mb-4 text-xl font-bold text-slate-900">
                            Video nổi bật
                        </h2>
                        <div className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-md bg-black">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                loading="lazy" 
                                src={video?.url}
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen 
                                className="w-full h-full" 
                            />
                        </div>
                        {video?.title && (
                             <h3 className="mt-4 text-base font-bold text-slate-900 text-center lg:text-left">{video.title}</h3>
                        )}
                    </section>
                </section>
            </section>
        </section>
    )
}