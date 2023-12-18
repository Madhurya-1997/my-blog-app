import PostPreview from '@/components/PostPreview';
import { PostMetadata } from '@/interfaces/PostMetadata';
import { getPostsMetadata } from '@/util/getPostsMetadata';
import Link from 'next/link';

export default function Home() {
  const postsMetadata = getPostsMetadata();
  const postsPreview = postsMetadata.map((post: PostMetadata) => (
    <PostPreview key={post.title} post={post} />
  ))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postsPreview}</div>
  )
}
