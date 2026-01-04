import { NewsList } from '@/components/news/news-list';
import { DocumentList } from '@/components/news/document-list';
import { VideoList } from '@/components/news/video-list';

export default function TinTucPage() {
  return (
    <article className="min-h-screen bg-white py-6 sm:py-10">
      <div className="container mx-auto px-4 lg:px-8">
          <section className="mb-10 pb-6 border-b border-dashed border-gray-200">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                  Tin tức & Tài nguyên
              </h1>
              <p className="text-gray-500 text-lg">
                  Tổng hợp các bài viết chuyên ngành, tài liệu kỹ thuật và video hướng dẫn sử dụng sản phẩm.
              </p>
          </section>
      </div>
      <NewsList limit={2} />
      <DocumentList limit={3} />     
      <VideoList limit={3} />
    </article>
  );
}