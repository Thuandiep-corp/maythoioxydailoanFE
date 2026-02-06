'use client';

import { useEffect, useState } from "react";
import { ProductCard } from "./product-card";
import { getProductList } from "@/action/product.action";
import { useSearchParams } from "next/navigation";


export function ProductGrid() {
    const searchParams = useSearchParams()
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const activeCategory = searchParams.get("category") || "all"
    
    useEffect(() => { 
        (async () => { 
            setIsLoading(true);
            try { 

                const responseProducts = await getProductList({ categorySlug: activeCategory })
                const productsList = responseProducts?.data || [] 
                setProductsList(productsList)
            } catch (error) { 
                console.error("Error fetching products:", error);
                setProductsList([]);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [activeCategory]);
    if (isLoading) { 
        return (
            <div className="text-center py-10"> loading...</div>
        )
    }
    if (productsList.length === 0) { 
        return (
            <div className="text-center py-10"> Không có sản phẩm nào trong danh mục này.</div>
        )
    }
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                productsList.map((item:any, index: number) => <ProductCard key={'product-item-' + item.id + '-' + index} data={item} imgAtributes={{
                loading: index === 0 ? 'eager' : 'lazy',
                decoding: index === 0 ? 'async' : 'auto',
                fetchPriority: index === 0 ? 'high' : 'auto'
                }} />)
            }
        </section>
    )
}
