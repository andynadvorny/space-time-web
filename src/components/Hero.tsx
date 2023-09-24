import Image from 'next/image';
import spaceTimeLogo from '../assets/space-time-logo.svg'

export function Hero() {
  return (
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
  )
}