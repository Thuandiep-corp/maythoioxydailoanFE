import { getHomepageSeo } from "@/action/pages.action";
import { IMAGE_URL } from "@/const";
import { Metadata } from "next";


export const revalidate = 3600; // 1 hour


export async function generateMetadata(): Promise<Metadata> {
  const response = await getHomepageSeo();
  if (!response || !response?.data || response?.data?.length === 0) {
    return {};
  }

  const homepageData = response.data[0];
  const seo = homepageData?.seo || {};

  const title = seo?.metaTitle || 'Máy Thổi Oxy Đài Loan ';
  const description = seo?.metaDescription || 'Cung cấp máy thổi oxy Đài Loan chính hãng, chất lượng cao với giá tốt. Hỗ trợ tư vấn và dịch vụ sau bán hàng tận tâm cho khách hàng toàn quốc.';
  const keywords = seo?.metaKeywords || seo?.keywords || ['maythoioxydailoan', 'thanhdat', 'thoi khi'];
  const metaImageUrl = seo?.metaImage?.url? IMAGE_URL + seo?.metaImage?.url : '/logo.png'
  const og = seo.openGraph || {};

  return {
    title,
    description,
    keywords,
    robots: seo?.metaRobots || 'index,follow',
    applicationName: 'Catalog Page - Máy Thổi Oxy Đài Loan',
    openGraph: {
      title: og?.ogTitle || title,
      description: og?.ogDescription || description,
      url: og?.ogUrl || 'https://maythoioxydailoan.com',
      siteName: 'Máy Thổi Oxy Đài Loan',
      images: {
        url: metaImageUrl,
        width: og?.ogImageWidth || 800,
        height: og?.ogImageHeight || 600,
        alt: og?.ogImageAlt || title,
        type: og?.ogImageType || 'image/png',
      },
      locale: 'vi_VN',
      type: og?.ogType || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: og?.ogTitle || title,
      description: og?.ogDescription || description,
      images: [metaImageUrl],
    },
  };
}  

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}