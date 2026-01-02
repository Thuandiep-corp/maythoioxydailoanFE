'use client';

import Image from "next/image";
import Link from "next/link";

type Props = {
    data: Record<string, any>
}

export function ProductCard({ data }:Props) {
    return (
        <section className="flex flex-col gap-2 bg-white rounded-lg shadow-md p-4 hover:[&>img]:-top-2.5 cursor-pointer">
            <Link href={`/catalog/${data.category}/${data.slug}`} className="overflow-hidden rounded-lg mb-2 block relative">
                <Image src={data.image} alt={data.name} width={200} height={200} className="relative top-0 transition-all w-full aspect-square rounded" />
            </Link>
            <h3 className="text-lg font-medium">{data.name}</h3>
            <section className="grid grid-cols-[1fr_auto]">
                <p className="text-md font-bold text-blue-500 flex-1">Liên hệ</p>
                <div className="aspect-square w-fit flex items-center justify-center bg-gray-100 text-gray-500 text-2xl hover:bg-blue-500 hover:text-white transition-all rounded cursor-pointer select-none">+</div>
            </section>
        </section>
    );
}