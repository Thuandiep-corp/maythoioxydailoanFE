import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

type Props = {
    data: Record<string, any>
}

export function ProductCard({ data }:Props) {
    return (
        <section className="flex flex-col gap-2 bg-white rounded-lg shadow-md p-4 hover:shadow-lg group">
            <Link href={`/catalog/${data.slug}`}>
                <div className="flex justify-center items-center mb-4 aspect-square overflow-hidden rounded-md select-none">
                    <div className="h-full w-full rounded-lg block relative transition duration-500 group-hover:scale-110">
                        <Image
                            width={200} height={200}
                            src={data.images[0]}
                            alt={data.name}
                            className="h-full w-full object-contain"
                            />
                    </div>
                </div>
                <div>
                    <p className="text-[10px] text-slate-400">{data.category}</p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        {data.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3">{data.excerpt}</p>
                </div>
            </Link>
            <div className="flex flex-1 flex-col justify-between select-none">
                <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
                    <p className="text-sm font-semibold text-blue-500">Liên hệ</p>
                    <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white cursor-pointer">
                        <Plus className="h-3 w-3" />
                    </div>
                </div>
            </div>
        </section>
    );
}