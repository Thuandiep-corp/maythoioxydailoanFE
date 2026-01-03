import { CategoryCard } from "@/components";
import { categories } from "@/moocs/categories";
import Link from "next/link";

export default function Page() {
    return (
        <article>
            <div className="flex items-center gap-2 my-5 text-md">
                <Link className="text-gray-500" href="/">Trang chủ</Link> / <p className="text-blue-500">Danh mục sản phẩm</p>
            </div>
            <h2 className="text-4xl">Danh mục máy móc</h2>
            <section className="xl:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-x-4 gap-y-10 mt-5 mb-10">
                {
                    categories.map((cat, index) => <CategoryCard key={index} data={cat} />)
                }
            </section>
        </article>
    );
}