import Image from 'next/image'
import TopMenu from '@/components/TopMenu'

import banner from '../assets/test_cinepolis.png';

export default function Home() {
  return (
    <>
      <div className='h-screen bg-ui-background'>
        <TopMenu />
        <div className='py-20 px-[30%] text-center'>
          <span className='text-4xl'>
            Hi! Im a UX/UI designer strongly focused
            on creating beautiful, functional UIs.
            Happy to see you here!  
          </span>
        </div>
          <Image className='w-full' alt='banner-portfolio' src={banner} />
      </div>
    </>
  )
}
