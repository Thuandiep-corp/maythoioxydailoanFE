import { ProductCard } from "@/components";
import { productList } from "@/moocs/catalog";

export default function Page() {
    return (
        <article>
            <section className=" mt-5 mb-10">
                <h1 className="text-[36px] font-bold text-gray-900 mb-2">Home Decor</h1>
                <p className="text-[15px] text-gray-500 mb-2">Curated collection for a stylish home.</p>
                <span className="text-[14px]">45 products</span>
            </section>
            <section className="max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid grid-cols-4 gap-4">
                { 
                    productList.map((item, index) => <ProductCard key={'product-item-'+ item.id + '-' + index} data={item} />)
                }
            </section>
        </article>
    );
}