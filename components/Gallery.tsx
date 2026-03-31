const screenshots = [
  { src: '/screenshots/fields.png', alt: 'Fields view' },
  { src: '/screenshots/animals.png', alt: 'Animals tab' },
  { src: '/screenshots/economy.png', alt: 'Economy overview' },
]

export default function Gallery() {
  return (
    <section id="screenshots" className="py-16 px-6 bg-farm-cream">
      <h2 className="font-serif text-3xl text-farm-brown text-center mb-8">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {screenshots.map(s => (
          <div
            key={s.src}
            className="rounded overflow-hidden border border-farm-border bg-farm-cream-dark aspect-video"
          >
            <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <p className="text-center text-farm-tan text-sm mt-4">
        Add your screenshots to <code className="bg-farm-cream-dark px-1 rounded">public/screenshots/</code>
      </p>
    </section>
  )
}
