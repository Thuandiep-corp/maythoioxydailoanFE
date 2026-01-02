'use client';

import Image from "next/image";

type Props = {
    data: Record<string, any>
}

export default function ProductCard({ data }:Props) {
    return (
        <section className="flex flex-col gap-2 bg-white rounded-lg shadow-md p-4">
            <Image src={data.image} alt={data.name} width={200} height={200} className="w-full aspect-square" />
            <h3 className="text-lg font-semibold">{data.name}</h3>
            <p className="text-red-500 font-bold">{data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
            <p className="text-sm w-full min-w-0 line-clamp-2">{data.description}</p>
        </section>);
}