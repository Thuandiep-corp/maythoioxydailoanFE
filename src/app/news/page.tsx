import { getNewsData } from '@/action/pages.action';
import { DocumentSignature, EventSignature } from '@/components/news';
import { VideoSignature } from '@/components/news/video-signature';

export default async function TinTucPage() {
  const responseDataNewsList = await getNewsData();
  const newsDataList = responseDataNewsList?.data?.[0]
  const PageContent = newsDataList?.PageContent?.filter((item: any) => item.__component === 'sections.hero-section');
  const eventSection = newsDataList?.PageContent?.filter((item: any) => item.__component === 'sections.news-events')?.[0];
  const documentSection = newsDataList?.PageContent?.filter((item: any) => item.__component === 'sections.blog-highlight')?.[0];
  const videoSection = newsDataList?.PageContent?.filter((item: any) => item.__component === 'sections.videos')?.[0];
  const PageContentData = PageContent?.[0] || null;
  return (
    <article className="container mx-auto px-4 w-full py-6 sm:py-10 space-y-10">
      <section className="">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
              {PageContentData?.title || 'Tin tức & Tài liệu kỹ thuật'}
          </h1>
          <p className="text-gray-500 text-lg">
              {PageContentData?.excerpt || 'Cập nhật tin tức mới nhất về máy thổi oxy Đài Loan, cùng các tài liệu kỹ thuật hữu ích giúp bạn hiểu rõ hơn về sản phẩm và ứng dụng trong thực tế.'}
          </p>
      </section>
      <EventSignature data={eventSection}/>
      <DocumentSignature data={ documentSection} />
      <VideoSignature data={videoSection}/>
    </article>
  );
}