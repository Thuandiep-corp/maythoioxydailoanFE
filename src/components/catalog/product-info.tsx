"use client";

import Link from "next/link"
import { ArrowRight, Phone, Share2, CheckCircle2 } from "lucide-react"

type Props = {
    product: Record<string, any>
}

export function ProductInfo({ product }: Props) {
  const contactUrl = `/contact?content=${encodeURIComponent("Báo giá sản phẩm: " + product.name)}`;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
            SKU: {product.sku || 'N/A'}
          </span>
          <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
            <CheckCircle2 size={16} fill="currentColor" className="text-green-100" />
            Còn hàng
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          {product.name}
        </h1>
        {product.excerpt && (
            <p className="text-slate-600 leading-relaxed mb-6 text-base">
                {product.excerpt}
            </p>
        )}
 
        <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Giá bán tham khảo:</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold italic text-red-500">
                Liên hệ báo giá
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <Link 
            href={contactUrl}
            className="w-full bg-[#408ebd] hover:bg-[#357abd] text-white font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
          >
            <span>Liên hệ báo giá ngay</span>
            <ArrowRight size={24} />
          </Link>          
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100">
            <Link
              href="tel:0903123456"
              className="flex items-center gap-2 text-slate-500 hover:text-[#408ebd] transition-colors text-sm font-medium"
            >
              <Phone size={18} />
              Hotline: 0903 123 456
            </Link>
            <span className="text-slate-300">|</span>
            <div
              className="flex items-center gap-2 text-slate-500 hover:text-[#408ebd] transition-colors text-sm font-medium cursor-pointer" // Thêm cursor-pointer
              onClick={() => {
                if (typeof window !== "undefined" && navigator.share) {
                  navigator.share({
                    title: document.title,
                    text: product?.name || "Xem sản phẩm này",
                    url: window.location.href
                  });
                } else {
                  alert("Trình duyệt của bạn không hỗ trợ chức năng chia sẻ trực tiếp.");
                }
              }}
            >
              <Share2 size={18} />
              Chia sẻ
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 block">
            Thông số nổi bật
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
              {product.spec || "Công suất lớn"}
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
              Chính hãng
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
               Bảo hành 12 tháng
            </span>
            <div dangerouslySetInnerHTML={{ __html: product.description }} className="w-full text-sm text-slate-600 mt-2" />
          </div>
        </div>
      </div>
    </div>
  )
}