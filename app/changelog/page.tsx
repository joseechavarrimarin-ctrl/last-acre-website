import { getAllPostsMeta } from '@/lib/content'
import PostCard from '@/components/PostCard'

export default function ChangelogPage() {
  const entries = getAllPostsMeta('changelog')
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl text-farm-brown mb-2">Changelog</h1>
      <p className="text-farm-tan mb-8">What changed in each version.</p>
      <div className="space-y-6">
        {entries.map(entry => (
          <PostCard key={entry.slug} post={entry} type="changelog" />
        ))}
      </div>
    </main>
  )
}
