import React from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { news } from '@/moocs/news';
import { NewsSidebar } from '@/components/news/news-sidebar';

interface NewsDetailProps {
  slug: string;
}

export function NewsDetail({ slug }: NewsDetailProps) {
  const post = news.find(n => n.slug === slug);
  if (!post) return notFound();
  const relatedPosts = news
    .filter(n => n.id !== post.id && n.type === post.type)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#408ebd]">Trang chủ</Link>
            <span>/</span>
            <Link href="/news/blogs" className="hover:text-[#408ebd]">
                {post.type === 'docs' ? 'Tài liệu' : 'Tin tức'}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-50">{post.title}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 order-last lg:order-first">
             <div className="sticky top-24">
                <NewsSidebar />
             </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                <div className="mb-8 border-b border-gray-100 pb-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-blue-50 text-[#408ebd] px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.publishedDate}</span>
                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>

                    <p className="text-lg text-gray-600 italic border-l-4 border-[#408ebd] pl-4">
                        {post.excerpt}
                    </p>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-sm">
                    <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div 
                    className="prose prose-lg max-w-none prose-blue text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Tag size={18} className="text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200 cursor-pointer transition capitalize">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors">
                        <Share2 size={18} /> <span className="text-sm font-semibold">Chia sẻ</span>
                    </button>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-1 h-8 bg-[#408ebd] rounded-full"></span>
                    Bài viết liên quan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map((item, idx) => (
                        <Link key={idx} href={`/news/blogs/${item.slug}`} className="group flex flex-col h-full bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                            <div className="aspect-16/10 overflow-hidden bg-gray-100">
                                <img 
                                    src={item.featuredImage} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="text-xs text-[#408ebd] font-bold mb-2 uppercase">{item.category}</div>
                                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#408ebd] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}