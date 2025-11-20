import { ShieldCheck, CreditCard, Plane, Globe2, Gift, Zap } from 'lucide-react'

const features = [
  {
    icon: Plane,
    title: 'Airline-ready payouts',
    desc: 'Automate refunds, ancillaries, and compensation with instant, trackable payouts.'
  },
  {
    icon: CreditCard,
    title: 'Virtual cards at scale',
    desc: 'Create single-use cards with dynamic spend limits for hotels, taxis, and more.'
  },
  {
    icon: ShieldCheck,
    title: 'Chargeback protection',
    desc: 'Advanced risk models tuned for travel patterns and seasonality.'
  },
  {
    icon: Globe2,
    title: 'Global acceptance',
    desc: '130+ currencies, local payment methods, and compliant cross‑border flows.'
  },
  {
    icon: Gift,
    title: 'Rewards & loyalty',
    desc: 'Issue branded rewards and status benefits that feel native to your product.'
  },
  {
    icon: Zap,
    title: 'Single API',
    desc: 'One integration for payments, issuing, and loyalty — with great docs.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to run travel fintech</h2>
          <p className="mt-3 text-white/70">Purpose‑built for booking flows, refunds, and real‑time expense controls.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-white to-orange-300 flex items-center justify-center text-black shadow-lg shadow-orange-400/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
