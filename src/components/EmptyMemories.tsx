export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="max-w-[360px] text-center leading-relaxed">
        You haven't recorded anything just yet, start{' '}
        <a className="underline hover:text-gray-50" href="/">creating memories</a>.
      </p>
    </div>
  )
}