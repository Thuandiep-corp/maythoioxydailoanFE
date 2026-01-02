import ProductCard from "@/components/commons/product-card";
import { productList } from "@/moocs/catalog";

export default function Page() {
    return <article>
        <section className="grid grid-cols-4 gap-4">
            { 
                productList.map((item, index) => <ProductCard key={'product-item-'+ item.id + '-' + index} data={item} />)
            }
        </section>
    </article>;
}