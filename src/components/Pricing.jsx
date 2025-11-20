export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, usage‑based pricing</h2>
          <p className="mt-3 text-white/70">Start free. Scale with transparent fees and volume discounts.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="text-4xl font-semibold text-white mt-2">$0</p>
            <p className="text-white/60 text-sm">+ processing fees</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Up to 1,000 transactions/mo</li>
              <li>• Virtual cards</li>
              <li>• Basic fraud tools</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full rounded-lg bg-gradient-to-r from-white to-orange-300 px-5 py-3 text-black font-medium shadow-lg shadow-orange-400/20">Start free</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 ring-1 ring-white/10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Most popular</div>
            <h3 className="text-white font-medium mt-3">Growth</h3>
            <p className="text-4xl font-semibold text-white mt-2">$99</p>
            <p className="text-white/60 text-sm">+ lower fees</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Unlimited transactions</li>
              <li>• Advanced fraud models</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full rounded-lg bg-gradient-to-r from-white to-orange-300 px-5 py-3 text-black font-medium shadow-lg shadow-orange-400/20">Choose Growth</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Enterprise</h3>
            <p className="text-4xl font-semibold text-white mt-2">Custom</p>
            <p className="text-white/60 text-sm">Tailored pricing</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li>• Dedicated infrastructure</li>
              <li>• Compliance support</li>
              <li>• Solutions engineering</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
