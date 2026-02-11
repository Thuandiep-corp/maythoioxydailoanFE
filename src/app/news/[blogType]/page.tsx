import { getNews } from '@/action/news.action';
import { DocumentCard } from '@/components/news';
import { BlogCard } from '@/components/news/blog-card';
import Link from 'next/link';

type Props = {
  params: Promise<{
    blogType: string;
  }>;
}

export default async function BlogListingPage({ params }: Props) {
    const { blogType = "" } = await params;
    const response = await getNews({ blogType })
    const posts = response?.data || []
    
    return (
        <div className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
             <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Link href="/" className="hover:text-[#408ebd]">Trang chủ</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Tin tức & Sự kiện</span>
             </div>
             <h1 className="text-3xl font-bold text-gray-900">Tin tức tổng hợp</h1>
             <p className="text-gray-500 mt-2">Cập nhật những thông tin công nghệ và thị trường mới nhất.</p>
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {
              blogType === 'events' ?
            posts.map((item:any) => (
              <BlogCard key={'news-listing-' + item.id} data={item} />
          )) : posts.map((item:any) => (
            <DocumentCard key={'news-listing-' + item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}