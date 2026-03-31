const links = [
  { label: 'Twitter / X', href: 'https://twitter.com/YOUR_HANDLE' },
  { label: 'Discord', href: 'https://discord.gg/9sfzXrt6r' },
  { label: 'GitHub', href: 'https://github.com/YOUR_USERNAME/last-acre' },
]

export default function SocialLinks() {
  return (
    <section className="py-12 px-6 bg-farm-brown text-center">
      <h2 className="font-serif text-2xl text-farm-text mb-6">Follow Along</h2>
      <div className="flex gap-8 justify-center flex-wrap">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-farm-tan hover:text-farm-text transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
