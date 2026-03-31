type Status = 'done' | 'in-progress' | 'planned'

interface RoadmapItem {
  version: string
  title: string
  status: Status
  items: string[]
}

const roadmap: RoadmapItem[] = [
  {
    version: 'v0.1',
    title: 'Core Farming Loop',
    status: 'done',
    items: ['Fields & crops', 'Basic economy', 'Weather system', 'Loan system'],
  },
  {
    version: 'v0.2',
    title: 'Animals & Genetics',
    status: 'in-progress',
    items: ['Animal genetics engine', 'Breeding system', 'Gene display on cards', 'Auction house'],
  },
  {
    version: 'v0.3',
    title: 'Processing & Industry',
    status: 'planned',
    items: ['Food processing', 'Machinery upgrades', 'Supply chains', 'Contracts'],
  },
]

const cardStyles: Record<Status, string> = {
  done: 'bg-farm-green text-white',
  'in-progress': 'bg-farm-tan text-white',
  planned: 'bg-farm-cream border border-farm-border text-farm-brown',
}

const statusLabel: Record<Status, string> = {
  done: '✅ Done',
  'in-progress': '🔨 In Progress',
  planned: '📋 Planned',
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 px-6 bg-farm-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-farm-brown text-center mb-8">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmap.map(item => (
            <div key={item.version} className={`rounded p-5 ${cardStyles[item.status]}`}>
              <div className="text-xs font-semibold mb-1 opacity-70 uppercase tracking-wide">
                {item.version}
              </div>
              <div className="font-serif text-xl mb-1">{item.title}</div>
              <div className="text-xs mb-4 opacity-80">{statusLabel[item.status]}</div>
              <ul className="text-sm space-y-1">
                {item.items.map(i => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
