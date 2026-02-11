import { getHomepageData } from '@/action/pages.action';
import { BestSeller, Carousel, Categories, NewsSignature } from '@/components';
import { DocumentSignature } from '@/components/homepage';

export const revalidate = 3600; 

export default async function HomePage() {
  const homeResponse = await getHomepageData();
  const homePageData = homeResponse?.data?.[0]; 

  const categoriesSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.home-categories');
  const productSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.product-highlight');
  const blogSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.blog-highlight');
  const newsSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.news-events');
  const videoSection = homePageData?.PageContent?.find((item: any) => item.__component === 'sections.videos');
  
  return (
    <article className="bg-gray-50 min-h-screen">
      <Carousel /> 
      <Categories data={categoriesSection} />
      <BestSeller  data={productSection} />
      <DocumentSignature data={blogSection} />
      <NewsSignature newsData={newsSection} videoData={videoSection}/>
    </article>
  );
}