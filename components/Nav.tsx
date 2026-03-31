'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/devlog', label: 'Devlog' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/feedback', label: 'Feedback' },
  { href: '/#roadmap', label: 'Roadmap' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="bg-farm-brown px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-serif text-xl text-farm-text hover:text-farm-tan transition-colors">
        🌾 Last Acre
      </Link>
      <div className="flex gap-6">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors hover:text-farm-tan ${
              pathname === link.href ? 'text-farm-tan' : 'text-farm-text'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
