import { documentList } from "@/moocs/news-and-document";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Document() { 
    return (
        <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">TÀI LIỆU KỸ THUẬT</span>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">Thông số & Hướng dẫn sử dụng</h2>
                </div>
                <a href="#" className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                Xem tất cả bài viết
                </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documentList.map((post, i) => (
                <section
                    key={'document-item' + i}
                    className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-lg"
                >
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            width={400} height={225}
                            src={post.img}
                            alt={post.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <p className="absolute top-3 left-3 rounded bg-blue-600 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                        {post.category}
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-slate-400">
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h3 className="mb-3 line-clamp-2 text-base font-bold text-slate-900 group-hover:text-blue-600">
                        <Link href={`/news/documents/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-auto pt-4 border-t border-slate-50">
                        <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-wider"
                        >
                        Đọc chi tiết <ChevronRight className="h-3 w-3" />
                        </Link>
                    </div>
                    </div>
                </section>
                ))}
            </div>
            </div>
        </section>
    )
}