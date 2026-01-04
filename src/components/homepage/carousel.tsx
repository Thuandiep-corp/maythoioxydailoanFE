import Image from "next/image";

export function Carousel() {
    return (
        <section className="w-full">
            <Image width={2542} height={1271} src="/banner.png" loading="eager" priority={true} alt="banner" className="w-full max-h-[calc(100vh-122px)] h-fit object-fill"/>
        </section>
    )
}