import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { lng: string }
}

export default function workshops({ params: { lng } }: Props) {
  return (
    <div className="h-[900px] sm:h-full bg-[#FCD2D1]">
      <Link href={`/${lng}/workshops`}>
        <Image
          src="/assets/svg/arrow.svg"
          height={10}
          width={100}
          alt=""
          className="hidden lg:block absolute left-0"
        />
      </Link>
      <div className="top relative h-2/5 pt-10 sm:hidden">
        <div className="left relative ontheback h-full w- z-0">
          <Image
            src="/assets/svg/handBuilding1.svg"
            height={363}
            width={225}
            alt=""
            className="absolute sm:right-[100px]"
          />
        </div>
        <div className="right onthetop z-10 absolute bg-transparent pt-12 pr-6 h-full w-1/2 top-0 left-0 top-[-10px]">
          <Image
            src="/assets/svg/byHand.svg"
            height={500}
            width={100}
            alt=""
            className=""
          />
          <Image
            src="/assets/svg/text1.svg"
            height={172}
            width={152}
            alt=""
            className="mt-5"
          />
          <Link href="https://airtable.com/appioMft3okdtHit4/shrh9oE7RNEooQHOK" target="_blank">
            <div className='registerBtn relative'>
              <Image
                src="/assets/images/btn2.png"
                alt=""
                height={251}
                width={125}
                className="cursor-pointer text-center mt-6"
              />
              <h1 className='cairo absolute top-[23%] right-[20px] text-xl text-white font-bold'>سجل هنا</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="divider relative h-1/5 sm:hidden">
        <Image
          src="/assets/svg/vasesLine.svg"
          height={100}
          width={10}
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="hidden md sm:grid bg-[#FCD2D1] px-10 lg:px-40 pt-2 pb-10">
        <div className="1">
          <Image
            src="/assets/svg/md/handBuilding.svg"
            alt=""
            height={30}
            width={40}
            className="w-full h-full pt-10"
          />
        </div>
        <div className="2 col-span-2 flex justify-center items-center flex-col">
          <div className="grid gap-10 pt-14 lg:pt-22">
            <div className="col-2">
              <Image
                src="/assets/svg/md/byHand.svg"
                alt=""
                height={30}
                width={40}
                className="w-full h-full"
              />
            </div>
            <div className="col-span-2 row-start-2">
              <Image
                src="/assets/svg/md/text1.svg"
                alt=""
                height={30}
                width={40}
                className="w-full h-full"
              />
            </div>

          </div>
          <div className='relative'>
            <Link href="https://airtable.com/appioMft3okdtHit4/shrh9oE7RNEooQHOK" target="_blank">

              <Image
                src="/assets/images/btn2.png"
                alt=""
                height={271}
                width={176}
                className="cursor-pointer text-center mt-6"
              />
              <h1 className='cairo absolute top-[45%] w-full right-[20%] text-3xl text-white font-bold'>سجل هنا</h1>
            </Link>

          </div>
        </div>
        <div className="3 divider col-span-3 col-start-1 row-start-2">
          <Image
            src="/assets/svg/vasesLine.svg"
            alt=""
            height={30}
            width={40}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="absolute w-full py-5 text-center bg-[#f5c6c1] text-sm">
        <p className="text-gray-500 text-sm">
          A project by{" "}
          <a
            className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline text-sm"
            href="https://www.imayce.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAYS AL-AZZAWI
          </a>
        </p>
      </div>
    </div>
  );
}
