import { NewsDetail } from '@/components/news/news-detail';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <NewsDetail slug={slug} />
  );
}