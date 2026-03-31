import FeedbackForm from '@/components/FeedbackForm'

export default function FeedbackPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl text-farm-brown mb-2">Feedback</h1>
      <p className="text-farm-tan mb-8">Help shape what gets built next in Last Acre.</p>
      <FeedbackForm />
    </main>
  )
}
