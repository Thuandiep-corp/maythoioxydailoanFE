import Link from "next/link";

export default function Page() {
    return (
        <article>
            <div className="flex items-center gap-2 my-5 text-md">
                <Link className="text-gray-500" href="/">Trang chủ</Link> / <p className="text-blue-500">Danh mục sản phẩm</p>
            </div>
            <h2 className="text-4xl">Danh mục máy móc</h2>
            <section className="grid grid-cols-4 gap-4">
            </section>
        </article>
    );
}