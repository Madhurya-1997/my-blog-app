import React from 'react'
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getPostsMetadata } from '@/util/getPostsMetadata';

type ParamsType = {
    slug: string;
}

const getBlogContent = (slug: string) => {
    const folder = 'topics/'
    const file = `${folder}${slug}.md`;
    const fileContent = fs.readFileSync(file, 'utf8');
    return matter(fileContent);
}

export const generateStaticParams = async () => {
    const posts = getPostsMetadata();

    // to generate the routes statically
    return posts.map(post => ({
        slug: post.slug
    }))
}

const page = ({ params }: { params: ParamsType }) => {
    const { slug } = params;
    const { content, data } = getBlogContent(slug);

    return (
        <>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{data.title}</h1>
                <p className="text-slate-400 mt-2">{data.date}</p>
            </div>
            <article className="prose lg:prose-xl">
                <Markdown>{content}</Markdown>
            </article>
        </>
    )
}

export default page