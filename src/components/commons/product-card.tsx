'use client';

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    data: Record<string, any>
}

export function ProductCard({ data }:Props) {
    return (
        <section className="flex flex-col gap-2 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-md">
            <div className="mb-4 aspect-square overflow-hidden rounded-md bg-slate-50">
                <Link href={`/catalog/${data.category}/${data.slug}`} className="overflow-hidden rounded-lg mb-2 block relative">
                    <Image
                        width={200} height={200}
                        src={data.image}
                        alt={data.name}
                        className="h-full w-full object-cover mix-blend-multiply opacity-90 transition group-hover:scale-105"
                    />
                </Link>
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div>
                <p className="text-[10px] text-slate-400">{data.category}</p>
                <h3 className="mt-1 line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-blue-600">
                    {data.name}
                </h3>
                </div>
                <div className="mt-4 flex items-center justify-end border-t border-slate-50 pt-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white">
                    <Plus className="h-3 w-3" />
                </div>
                </div>
            </div>
        </section>
    );
}