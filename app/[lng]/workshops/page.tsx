import Image from 'next/image'
import RegisterHere from "@/components/RegisterHere"
export default function s() {
  return (

    <div className='h-screen bg-[#FCD2D1]'>
      <div className="top relative h-2/5 pt-10">
        <div className="left relative ontheback h-full w-3/3 z-0  ">
          <Image src="/assets/svg/handBuilding1.svg" height={363} width={225} alt="" className='absolute' />
        </div>
        <div className="right onthetop z-10
         absolute bg-transparent pt-12 pr-6 h-full w-1/2 top-0 left-0">
          <Image src="/assets/svg/byHand.svg" height={500} width={100} alt="" className='' />
          <Image src="/assets/svg/text1.svg" height={172} width={152} alt="" className='mt-5' />
          <RegisterHere />
        </div>
      </div>
      <div className="divider relative h-1/5 ">
        <Image src="/assets/svg/vasesLine.svg" height={100} width={10} alt="" className='w-full h-full' />
      </div>
      <div className="bottom relative h-2/5">
        <div className="right onthetop z-10
         absolute bg-transparent pr-6 h-full w-1/2 top-0 pt-4">
          <Image src="/assets/svg/wheelBuilding.svg" height={500} width={100} alt="" className='' />
          <Image src="/assets/svg/text2.svg" height={172} width={152} alt="" className='my-5' />
          <RegisterHere />
        </div>
        <div className="left relative ontheback h-full w-3/3 z-0">
          <Image src="/assets/svg/wheel.svg" height={453} width={232} alt="" className='absolute h-full left-0 w-2/3' />
        </div>
      </div>
    </div>

  )
}
