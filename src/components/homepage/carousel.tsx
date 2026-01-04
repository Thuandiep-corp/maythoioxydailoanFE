import Image from "next/image";

export function Carousel() {
    return (
        <section className="w-full">
            <Image width={1600} height={800} src="/banner.png" loading="eager" fetchPriority="high" priority={true} alt="banner" className="w-full max-h-[calc(100vh-122px)] h-fit object-fill"/>
        </section>
    )
}