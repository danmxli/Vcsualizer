import Image from 'next/image'
import Navbar from '@/components/navbar'
import MainCard from '@/components/home/main-card'
import FeaturesCard from '@/components/home/current-features'

export default function Home() {
  return (
    <main className="flex bg-neutral-900">
      <Navbar />
      <div className='flex-1'>
        <div className='h-screen overflow-y-scroll scrollbar-hide grid gap-6 p-6'>
          <MainCard />
          <FeaturesCard />
        </div>
      </div>
    </main>
  )
}
