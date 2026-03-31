import { getAllPostsMeta } from '@/lib/content'
import PostCard from '@/components/PostCard'

export default function DevlogPage() {
  const posts = getAllPostsMeta('devlog')
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl text-farm-brown mb-2">Devlog</h1>
      <p className="text-farm-tan mb-8">Progress updates from the field.</p>
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} type="devlog" />
        ))}
        {posts.length === 0 && (
          <p className="text-farm-tan">No posts yet. Check back soon.</p>
        )}
      </div>
    </main>
  )
}
