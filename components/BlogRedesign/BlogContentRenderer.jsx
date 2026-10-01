"use client";

import BlogCTA from "./BlogCTA";

export default function BlogContentRenderer({
    content,
    ctas = []
}) {

    const middleCTA = ctas.find(
        item => item.position === "middle"
    );


    return (

        <article className="blog-content">

            {content}


            {middleCTA && (
                <BlogCTA 
                    cta={middleCTA}
                />
            )}

        </article>

    );

}