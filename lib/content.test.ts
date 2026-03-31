/**
 * @jest-environment node
 */
import { getPostSlugs, getAllPostsMeta, getPost } from './content'

describe('getPostSlugs', () => {
  it('returns slugs for devlog posts', () => {
    const slugs = getPostSlugs('devlog')
    expect(slugs.length).toBeGreaterThan(0)
    expect(slugs).toContain('2026-03-31-week-one')
  })

  it('returns slugs for changelog entries', () => {
    const slugs = getPostSlugs('changelog')
    expect(slugs).toContain('v0-2-1')
  })
})

describe('getAllPostsMeta', () => {
  it('returns posts sorted newest first', () => {
    const posts = getAllPostsMeta('devlog')
    expect(posts[0]).toMatchObject({
      slug: '2026-03-31-week-one',
      title: 'Week One — Getting Started',
      date: '2026-03-31',
      excerpt: 'Building the core farming loop and going public.',
    })
  })
})

describe('getPost', () => {
  it('returns post with parsed HTML content', async () => {
    const post = await getPost('devlog', '2026-03-31-week-one')
    expect(post.title).toBe('Week One — Getting Started')
    expect(post.contentHtml).toContain('<h1>')
    expect(post.contentHtml).toContain('Getting Started')
  })
})
