import { getPost, getPostSlugs } from '@/lib/content'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getPostSlugs('devlog').map(slug => ({ slug }))
}

export default async function DevlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const post = await getPost('devlog', slug)
    return (
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="text-farm-tan text-sm mb-2">{post.date}</div>
          <h1 className="font-serif text-4xl text-farm-brown">{post.title}</h1>
        </div>
        <div
          className="prose prose-stone max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
    )
  } catch {
    notFound()
  }
}
