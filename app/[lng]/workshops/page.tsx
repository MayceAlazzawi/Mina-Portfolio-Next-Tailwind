import Image from "next/image";
import RegisterHere from "@/components/RegisterHere";
export default function s() {
  return (
    <div className="h-screen sm:h-full bg-[#FCD2D1]">
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
          <RegisterHere />
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

      <div className="bottom relative h-2/5 sm:hidden">
        <div
          className="right onthetop z-10
         absolute bg-transparent pr-6 h-full w-1/2 top-0"
        >
          <Image
            src="/assets/svg/wheelBuilding.svg"
            height={500}
            width={100}
            alt=""
            className=""
          />
          <Image
            src="/assets/svg/text2.svg"
            height={172}
            width={152}
            alt=""
            className="my-5"
          />
          <RegisterHere />
        </div>
        <div className="left relative ontheback h-full w-3/3 z-0">
          <Image
            src="/assets/svg/wheel.svg"
            height={453}
            width={232}
            alt=""
            className="absolute h-full left-0 w-2/3"
          />
        </div>
      </div>

      {/* md */}
      {/* <div className="hidden sm:flex justify-around items-center h-screen pt-10">
        <div className="one flex flex-col w-1/2 pl-10 flex-col items-center justify-around bg- h-screen">
          <div className="w-full h-1/3 relative mb-[100px]">
            <Image
              src="/assets/svg/md/handBuilding.svg"
              height={0}
              width={0}
              alt=""
              className="w-full h-full z-0"
            />
            <div className="bywheel top-[235px] pr-[10px] absolute z-10 top-[65%]">
              <Image
                src="/assets/svg/md/byHand.svg"
                height={78}
                width={245}
                alt="w-full h-full"
              />
              <div className="text2 mt-4 pr-[40px]">
                <Image
                  src="/assets/svg/md/text1.svg"
                  height={571}
                  width={401}
                  alt="w-full h-full mt-[4px]"
                />
              </div>
            </div>
          </div>
          <div className="button bottom-0 m-8 text-center">
            <button>button</button>
          </div>
        </div>

        <div className="divider h-full">
          <Image
            src="/assets/svg/md/divider.svg"
            height={1002}
            width={10}
            alt=""
            className="h-full"
          />
        </div>

        <div className="two flex flex-col w-1/2 pl-10 flex-col items-center justify-around bg- h-screen">
          <div className="w-full h-1/3 relative mb-[100px]">
            <Image
              src="/assets/svg/md/wheel.svg"
              height={1}
              width={1}
              alt=""
              className="w-full h-full z-0"
            />
            <div className="bywheel top-[235px] pr-[20px] absolute z-10 top-[80%]">
              <Image
                src="/assets/svg/md/buildingWheel.svg"
                height={78}
                width={245}
                alt="w-full h-full"
              />
              <div className="text2 mt-4 pr-[40px]">
                <Image
                  src="/assets/svg/md/text1.svg"
                  height={571}
                  width={401}
                  alt="w-full h-full mt-[4px]"
                />
              </div>
            </div>
          </div>

          <div className="button text-center">
            <button>button</button>
          </div>
        </div>

      </div> */}

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
            <Image
              src="/assets/images/btn2.png"
              alt=""
              height={271}
              width={176}
              className="cursor-pointer text-center mt-6"
            />
            <h1 className='cairo absolute top-[45%] w-full right-[20%] text-3xl text-white font-bold'>سجل هنا</h1>
          </div>
        </div>
        <div className="5 divider col-span-3 col-start-1 row-start-2">
          <Image
            src="/assets/svg/vasesLine.svg"
            alt=""
            height={30}
            width={40}
            className="w-full h-full"
          />
        </div>
        <div className="3 col-start-3 row-start-3">
          <Image
            src="/assets/svg/md/wheel.svg"
            alt=""
            height={30}
            width={40}
            className="w-full h-full"
          />
        </div>
        <div className="4 col-span-2 col-start-1 row-start-3  flex justify-center items-center flex-col">
          <div className="grid gap-10 lg:pt-22">
            <div className="col-2">
              <Image
                src="/assets/svg/md/buildingwheel.svg"
                alt=""
                height={30}
                width={40}
                className="w-full h-full"
              />
            </div>
            <div className="col-span-2 row-start-2">
              <Image
                src="/assets/svg/md/text2.svg"
                alt=""
                height={30}
                width={40}
                className="w-full h-full"
              />
            </div>
          </div>
          {/* <Link href="#" target="_blank" className="cursor-pointer text-center mt-10 col-span-2 row-start-3 place-items-center rounded-full text-white w-1/2 bg-[#4b8692] font-bold text-2xl py-1">
              سجل هنا 
          </Link> */}
          <div className='relative'>
            <Image
              src="/assets/images/btn2.png"
              alt=""
              height={271}
              width={176}
              className="cursor-pointer text-center mt-6"
            />
            <h1 className='cairo absolute top-[45%] w-full right-[20%] text-3xl text-white font-bold'>سجل هنا</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
