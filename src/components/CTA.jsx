export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-orange-500/10 p-8">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/20 to-orange-400/20 blur-3xl opacity-30 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Launch your travel fintech in days, not months</h3>
            <p className="mt-2 text-white/80">Get sandbox keys instantly and start building with our step-by-step guides.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center rounded-lg bg-gradient-to-r from-white to-orange-300 px-5 py-3 text-black font-medium shadow-lg shadow-orange-400/20">Create account</a>
              <a href="#" className="inline-flex justify-center rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">Read docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
