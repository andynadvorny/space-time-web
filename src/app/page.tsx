import Image from 'next/image';
import { User } from 'lucide-react'

import spaceTimeLogo from '../assets/space-time-logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-2/3 rounded-full bg-purple-700 opacity-50 blur-full" />
        
        <div className="absolute right-1 top-0 bottom-0 w-2 bg-stripes" />

        
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="text-sm leading-snug max-w-[140px]">
            <span className="underline">Create an account</span> and record your memories!
          </p>
        </a>

        <div className="space-y-5">
          <Image src={spaceTimeLogo} alt="" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">Your personal time capsule</h1>
            <p className="text-lg leading-relaxed">Collect important moments from your journey e share them (if you want) with the world!</p>
          </div>

          <a href="/" className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase text-black leading-none hover:bg-green-600">
            Register memory
          </a>
        </div>

        <footer className="text-sm leading-relaxed text-gray-200">
          Developed with ❤ at Rocketseat's NLW
        </footer>

      </div>
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="max-w-[360px] text-center leading-relaxed">
            You haven't recorded anything just yet, begin{' '}
            <a className="underline hover:text-gray-50" href="/">creating memories</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
