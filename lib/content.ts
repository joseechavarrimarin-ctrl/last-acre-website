import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt?: string
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getPostSlugs(type: 'devlog' | 'changelog'): string[] {
  const dir = path.join(contentDir, type)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

export function getPostMeta(type: 'devlog' | 'changelog', slug: string): PostMeta {
  const filePath = path.join(contentDir, type, `${slug}.md`)
  const { data } = matter(fs.readFileSync(filePath, 'utf8'))
  return { slug, title: data.title, date: data.date, excerpt: data.excerpt }
}

export function getAllPostsMeta(type: 'devlog' | 'changelog'): PostMeta[] {
  return getPostSlugs(type)
    .map(slug => getPostMeta(type, slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(type: 'devlog' | 'changelog', slug: string): Promise<Post> {
  const filePath = path.join(contentDir, type, `${slug}.md`)
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  const processed = await remark().use(html).process(content)
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    contentHtml: processed.toString(),
  }
}
