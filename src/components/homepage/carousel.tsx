import Image from "next/image";

export function Carousel() {
    return (
        <section className="w-full">
            <Image width={1920} height={958} src="/banner.png" alt="banner" className="w-full max-h-[calc(100vh-122px)] h-fit object-fill"/>
        </section>
    )
}