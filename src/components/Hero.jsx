import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-white to-orange-400 animate-pulse" />
            New: One-tap global wallet for travel
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            The modern fintech platform for travel commerce
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Accept payments, issue virtual cards, and reward your travelers — all in a single API. Designed for airlines, OTAs, and next‑gen travel apps.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex justify-center rounded-lg bg-gradient-to-r from-white to-orange-300 px-5 py-3 text-black font-medium shadow-lg shadow-orange-400/20">
              Start free
            </a>
            <a href="#features" className="inline-flex justify-center rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">
              Explore features
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/70">
            <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-70" />
            <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-70" />
            <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  )
}
