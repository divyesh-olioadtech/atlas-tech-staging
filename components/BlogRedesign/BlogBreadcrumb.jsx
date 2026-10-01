"use client";

import Link from "next/link";

export default function BlogBreadcrumb({ title }) {

    return (
        <div className="flex items-center justify-center gap-3 text-[#606370] text-[15px] mb-10">

            <Link 
                href="/"
                className="hover:text-[#1A1D2D]"
            >
                Home
            </Link>


            <span>/</span>


            <Link
                href="/blog"
                className="hover:text-[#1A1D2D]"
            >
                Blog
            </Link>


            <span>/</span>


            <span className="max-w-[600px] truncate">
                {title}
            </span>


        </div>
    );
}