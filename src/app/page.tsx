import React from 'react';
import { CategorySignature } from '@/components/homepage/category-signature';
import { categories } from '@/moocs/categories';
import Image from 'next/image';
export default function HomePage() {

  return (
    <article className="bg-gray-50 min-h-screen pb-10">
      <section className="w-full">
        <Image src="/banner.png" alt="Banner" width={1200} height={400} className="w-full h-[200px] md:h-[500px]" />
      </section>
      <section className="container mx-auto px-4 mt-8">
      {categories.map((cat) => (
           <CategorySignature key={cat.slug} cat={cat}/>))}
      </section>
    </article>
  );
}
