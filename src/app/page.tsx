import { BestSeller, Carousel, Categories, Document, News} from '@/components';

export default function HomePage() {

  return (
    <article className="bg-gray-50 min-h-screen">
      <Carousel />
      <Categories />
      <BestSeller />
      <Document/>
      <News/>
    </article>
  );
}