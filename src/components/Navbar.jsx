import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 mt-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 shadow-lg shadow-orange-500/30" />
            <span className="text-white font-semibold tracking-tight">AeroPay</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#faq">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-white to-orange-300 px-4 py-2 text-black font-medium shadow-lg shadow-orange-400/20">
              Get started
            </a>
          </div>

          <button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl px-4 py-3 text-white/80">
            <a className="block py-2" href="#features">Features</a>
            <a className="block py-2" href="#pricing">Pricing</a>
            <a className="block py-2" href="#faq">FAQ</a>
            <div className="h-px my-2 bg-white/10" />
            <a className="block py-2" href="#">Sign in</a>
            <a className="block py-2 text-black font-medium rounded-lg bg-gradient-to-r from-white to-orange-300 text-center mt-2">Get started</a>
          </div>
        )}
      </div>
    </header>
  )
}
