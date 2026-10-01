"use client";

import React from "react";
import BlogCTA from "./BlogCTA";
import BlogCTAPlaceholder from "./BlogCTAPlaceholder";


export default function BlogContent({ content, ctas = [] }) {


    const renderNode = (node, index) => {

        if (!React.isValidElement(node)) {
            return node;
        }


        // Replace CTA placeholder
        if (
            node.type === BlogCTAPlaceholder
        ) {

            const position = node.props.position;


            const cta = ctas.find(
                item => item.position === position
            );


            return cta ? (
                <BlogCTA 
                    key={index}
                    cta={cta}
                />
            ) : null;
        }


        // Render children recursively
        if (node.props?.children) {

            return React.cloneElement(
                node,
                {
                    key:index
                },
                React.Children.map(
                    node.props.children,
                    renderNode
                )
            );
        }


        return node;

    };


    return (

        <article className="blog-content">

            {
                React.Children.map(
                    content.props?.children || content,
                    renderNode
                )
            }

        </article>

    );

}