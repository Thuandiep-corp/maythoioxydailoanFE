import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    images?: string[];
    image?: string; // Hỗ trợ cả 2 kiểu dữ liệu cũ và mới
    description: string;
    spec?: string;
    price: number;
}

interface RelatedProductsProps {
    currentProductId: number;
    category: string;
    allProducts: Product[];
}

export function RelatedProducts({ currentProductId, category, allProducts }: RelatedProductsProps) {
  
  // Lọc sản phẩm cùng danh mục, trừ sản phẩm hiện tại, lấy tối đa 4 cái
  const related = allProducts
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-slate-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Sản phẩm tương tự</h2>
        <Link href={`/catalog/${category}`} className="text-sm font-medium text-[#408ebd] hover:underline flex items-center gap-1">
          Xem tất cả <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {related.map((product) => {
            // Xử lý lấy ảnh đại diện
            const thumb = product.images?.[0] || product.image || "/logo.png";
            
            return (
                <Link key={product.id} href={`/catalog/${product.category}/${product.slug}`} className="group block bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-[4/3] bg-slate-50 overflow-hidden relative">
                    <div
                        className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${thumb}')` }}
                    />
                    </div>
                    <div className="p-4 flex flex-col">
                        <h3 className="font-bold text-slate-900 group-hover:text-[#408ebd] transition-colors mb-2 line-clamp-2 min-h-[48px]">
                            {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                             <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                {product.spec || "Tiêu chuẩn"}
                            </span>
                            <span className="text-sm font-bold text-[#408ebd]">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                            </span>
                        </div>
                    </div>
                </Link>
            )
        })}
      </div>
    </section>
  )
}