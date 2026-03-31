import Link from 'next/link'
import type { PostMeta } from '@/lib/content'

interface Props {
  post: PostMeta
  type: 'devlog' | 'changelog'
}

export default function PostCard({ post, type }: Props) {
  return (
    <Link
      href={`/${type}/${post.slug}`}
      className="block border-l-4 border-farm-green pl-4 py-2 hover:border-farm-tan transition-colors group"
    >
      <div className="font-serif text-lg text-farm-brown group-hover:text-farm-brown-light transition-colors">
        {post.title}
      </div>
      <div className="text-sm text-farm-tan mb-1">{post.date}</div>
      {post.excerpt && (
        <div className="text-sm text-farm-brown-light">{post.excerpt}</div>
      )}
    </Link>
  )
}
