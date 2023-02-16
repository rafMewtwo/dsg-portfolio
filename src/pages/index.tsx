import Image from 'next/image'
import TopMenu from '@/components/TopMenu'

import rect7 from '../assets/rectangle7.svg';
import rect2 from '../assets/rectangle2.png';
import rect3 from '../assets/rectangle3.png';
import rect4 from '../assets/rectangle4.png';
import rect5 from '../assets/rectangle5.png';
import rect6 from '../assets/rectangle6.png';

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
        <div className='bg-first-background h-3/5 flex justify-between'>
          <div className='flex flex-col gap-4 items-center justify-center pl-[10%]'>
            <span className='text-6xl text-white'>Cinépolis</span>
            <span className='text-4xl text-white'>UX Design / UI Design</span>
          </div>
          <div className='flex relative pr-[5%]'>
            <Image width={400} alt='cellphone' src={rect7} />
            {/* <Image width={300} height={300} alt='cellphone' src={rect2} /> */}
            {/* <Image width={300} height={300} alt='cellphone' src={rect4} /> */}
            {/* <Image width={300} height={300} alt='cellphone' src={rect3} /> */}
            {/* <Image width={200} alt='cellphone' src={rect5} />
            <Image width={300} height={300} alt='cellphone' src={rect6} /> */}
          </div>
        </div>
      </div>
    </>
  )
}
