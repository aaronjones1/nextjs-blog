import Link from 'next/link';

export default function AppHeader() {
  return (
    <div className="sticky top-0 left-0 right-0 backdrop-blur-sm bg-neutral-100/30 p-10 h-20 flex flex-row items-center border-b border-black shadow-md">
      <Link className="text-lg font-black text-neutral-900 hover:no-underline" href='/'>Muze</Link>
    </div>
  )
}