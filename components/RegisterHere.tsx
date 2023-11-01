import Image from 'next/image'
import Link from "next/link"


export default function RegisterHere() {
  return (
      <Link href="https://tally.so/r/wQRJ5G" target="_blank">
        <div className="btn2 relative sm:hidden bg-transparent top-[-20px] right-[-30px] ">
          <Image src="/assets/svg/btn2.svg" height={1000} width={0} alt="" className='w-full bg-transparent h-full z-0' />
          <Image src="/assets/svg/registerHere.svg" height={1} width={1} alt="" className='absolute z-3 bottom-6 right-12 h-1/2 w-1/2 ' />
        </div>
        <div className="btn2 hidden sm:block bg-transparent top-[-20px] right-[-30px] ">
          <Image src="/assets/svg/btn2.svg" height={10} width={0} alt="" className='w-full bg-transparent h-full z-0' />
          <Image src="/assets/svg/registerHere.svg" height={1} width={1} alt="" className='absolute z-3 bottom-6 right-12 h-1/2 w-1/2' />
        </div>
      </Link>

    )
}