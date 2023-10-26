import Image from 'next/image'
import RegisterHere from "@/components/RegisterHere"
export default function s() {
  return (

    <div className='h-screen bg-[#FCD2D1]'>
      <div className="top relative h-2/5 pt-10 sm:hidden">
        <div className="left relative ontheback h-full w-3/3 z-0">
          <Image src="/assets/svg/handBuilding1.svg" height={363} width={225} alt="" className='absolute sm:right-[100px]' />
        </div>
        <div className="right onthetop z-10 absolute bg-transparent pt-12 pr-6 h-full w-1/2 top-0 left-0">
          <Image src="/assets/svg/byHand.svg" height={500} width={100} alt="" className='' />
          <Image src="/assets/svg/text1.svg" height={172} width={152} alt="" className='mt-5' />
          <RegisterHere />
        </div>
      </div>
      <div className="divider relative h-1/5 sm:hidden">
        <Image src="/assets/svg/vasesLine.svg" height={100} width={10} alt="" className='w-full h-full' />
      </div>
      <div className="bottom relative h-2/5 sm:hidden">
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

      {/* md */}
      <div className="hidden sm:flex justify-between h-screen">
       <div className="one flex flex-col w-2/5 justify-around items-center h-full ">
        <div className="a w-full relative right-[45%]">
        <Image src="/assets/svg/md/handBuilding.svg" height={193} width={262} alt="" />
        <div className="absolute top-[270px] right-[-37px]">
        <Image src="/assets/svg/md/byHand.svg" height={193} width={110} alt="w-full h-full " />
        <div className="mt-4">
        <Image src="/assets/svg/md/text1.svg" height={571} width={301} alt="w-full h-full mt-[4px]" />
        </div>
        </div>
        </div>
        
        <div className="a bottom-0  ">
         dsfd
        </div>
       </div>
        <div className="divider h-full">
          <Image src="/assets/svg/md/divider.svg" height={1002} width={10} alt="" className='h-full' />
        </div>
        <div className="one flex flex-col w-2/5 justify-around items-center h-full ">
        <div className="a w-full relative">
        <Image src="/assets/svg/md/wheel.svg" height={508} width={262} alt="" className='w-[400px] right-[-10px]' />
        <div className="absolute top-[230px] right-[37px]">
        <Image src="/assets/svg/md/buildingWheel.svg" height={78} width={145} alt="w-full h-full " />
        <div className="mt-4">
        <Image src="/assets/svg/md/text2.svg" height={571} width={301} alt="w-full h-full mt-[4px]" />
        </div>
        </div>
        </div>
        
        <div className="a bottom-0  ">
         dsfd
        </div>
       </div>
      </div>
    </div>

  )
}
