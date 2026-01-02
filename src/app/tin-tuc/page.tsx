import React from 'react';
import Link from 'next/link';
import { NewsPost } from './bai-viet/page';
import { Document } from './tai-lieu/page';
import { Video } from './video/page';

export default function Page() {
    return (
        <article>
            <div className="flex items-center gap-2 my-5 text-md">
            <Link className="text-gray-500" href="/">Trang chủ</Link> / <p className="text-blue-500">Tin tức, tài liệu và video</p>
            </div>
            <NewsPost />
            <Document />
            <Video />
        </article>
    );
}