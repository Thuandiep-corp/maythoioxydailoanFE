"use client"

import { useState } from "react"
import { ZoomIn } from "lucide-react"

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const safeImages = images && images.length > 0 ? images : ["https://placehold.co/600x600?text=No+Image"];
  const [selectedImage, setSelectedImage] = useState(0);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-4/3 bg-white rounded-2xl border border-slate-100 overflow-hidden relative group">
        <div
          className="w-full h-full bg-center bg-cover bg-no-repeat transition-all duration-500"
          style={{ backgroundImage: `url('${safeImages[selectedImage]}')` }}
        />
        <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-lg shadow-sm text-slate-600 hover:text-[#408ebd] transition-colors opacity-0 group-hover:opacity-100">
          <ZoomIn size={24} />
        </div>
      </div>
      {safeImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {safeImages.map((image, index) => (
            <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`size-20 shrink-0 rounded-lg border-2 ${
                selectedImage === index
                    ? "border-[#408ebd]"
                    : "border-slate-100 hover:border-slate-300"
                } overflow-hidden transition-colors`}
            >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
            </div>
            ))}
        </div>
      )}
    </div>
  )
}