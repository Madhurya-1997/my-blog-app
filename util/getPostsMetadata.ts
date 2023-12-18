import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '@/interfaces/PostMetadata';

export const getPostsMetadata = (): PostMetadata[] => {
    const files = fs.readdirSync('topics/');
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    const posts = markdownFiles.map(filename => {
        const fileContent = fs.readFileSync(`topics/${filename}`, 'utf8');
        const matterResults = matter(fileContent);

        const { data } = matterResults;

        return {
            title: data.title,
            date: data.date,
            subtitle: data.subtitle,
            slug: filename.replace(".md", "")
        }
    })

    return posts;
}