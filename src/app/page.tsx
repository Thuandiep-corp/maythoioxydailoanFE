import { CategorySignature } from '@/components/homepage/category-signature';
import { categories } from '@/moocs/categories';
import { BestSeller, Carousel, Categories} from '@/components';

export default function HomePage() {

  return (
    <article className="bg-gray-50 min-h-screen pb-10">
      <Carousel />
      <Categories />
      <BestSeller/>
      <section className="container mx-auto px-4 mt-8">
      {categories.map((cat) => (
           <CategorySignature key={cat.slug} cat={cat}/>))}
      </section>
    </article>
  );
}