import Image from "next/image";
import Link from "next/link";

type Props = {
    data: Record<string, any>;
}

export function CategoryCard({ data }: Props) {
  return (
      <section className="rounded-lg relative shadow p-4">
        <Link href={`/catalog/${data.slug}`} className="rounded-lg block overflow-hidden">
            <Image src={data.img} alt={data.title} width={720} height={590} className="w-full rounded-lg hover:scale-105 transition-all aspect-720/590 object-contain"/>
        </Link>
        <h3 className="mt-3 text-lg">{data.title}</h3>
        <p className="text-gray-500">{data?.productCount ?? 0} sản phẩm</p>
        <Link href={`/catalog/${data.slug}`} className="absolute bottom-4 right-4 text-blue-500">Xem chi tiết</Link>
    </section>
  );
}