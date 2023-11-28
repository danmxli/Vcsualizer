import Image from 'next/image'
import Navbar from '@/components/navbar'
import MainCard from '@/components/home/main-card'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-neutral-900">
      <Navbar />
      <MainCard />
    </main>
  )
}
