import { getPost, getPostSlugs } from '@/lib/content'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getPostSlugs('changelog').map(slug => ({ version: slug }))
}

export default async function ChangelogEntryPage({ params }: { params: Promise<{ version: string }> }) {
  const { version } = await params
  try {
    const entry = await getPost('changelog', version)
    return (
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-farm-green text-white text-xs px-2 py-1 rounded">
              {version}
            </span>
            <span className="text-farm-tan text-sm">{entry.date}</span>
          </div>
          <h1 className="font-serif text-4xl text-farm-brown">{entry.title}</h1>
        </div>
        <div
          className="prose prose-stone max-w-none"
          dangerouslySetInnerHTML={{ __html: entry.contentHtml }}
        />
      </main>
    )
  } catch {
    notFound()
  }
}
