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
        <section className="py-16 w-full bg-white">
            <section className="container mx-auto px-4 lg:px-8">
                <section className="grid gap-12 lg:grid-cols-2">
                    <section>
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                        </div>
                        <div className="flex flex-col gap-6">
                        { 
                            blogs.map((post) => (
                                <div key={'news-item' + post.slug}>
                                    <Link href={`/blog/news/${post.slug}`} className="flex gap-4 group">
                                        <Image  width={128} height={80}
                                                            src={post?.thumbnail?.url ? `${IMAGE_URL}${post?.thumbnail?.url}` : '/logo.png'}
                                                            alt={post?.thumbnail?.alternativeText || ''}
                                                            title={ post?.thumbnail?.caption} className="aspect-video rounded-md object-cover" />
                                        <div>
                                            <p className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                                                {post.created_date}
                                            </p>
                                            <h3 className="mt-1 line-clamp-1 font-bold text-slate-900 group-hover:text-blue-600">
                                            {post.title}
                                            </h3>
                                            <p className="mt-1 line-clamp-2 text-xs text-slate-500"  dangerouslySetInnerHTML={{
                    __html: post?.content || ""
                }}/>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        <Link href="/news/events" className="text-sm font-semibold text-blue-600 hover:underline mx-auto">
                            Xem tin cũ hơn
                        </Link>
                        </div>
                    </section>
                    <section>
                        <h2 className="mb-8 text-2xl font-bold text-slate-900">Video Nổi bật</h2>
                        <div className="group relative aspect-video w-full overflow-hidden rounded-lg">
                            <iframe width="580" height="327" loading="lazy" src={video?.url}
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
                        </div>
                    </section>
                </section>
            </section>
        </section>
)
}