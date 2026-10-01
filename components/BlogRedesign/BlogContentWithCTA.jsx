"use client";

import BlogCTA from "./BlogCTA";

export default function BlogContentWithCTA({ content, ctas }) {

    return (
        <>
            {content}

            {ctas?.filter(
                item => item.position === "bottom"
            ).map((item,index)=>(
                <BlogCTA 
                    key={index}
                    cta={item}
                />
            ))}

        </>
    );

}