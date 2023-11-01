import Image from "next/image";

export default function page() {
    return (
        <div className="grid bg-[#FCD2D1] h-screen sm:h-full">
            <div>
                <Image
                    src="/assets/svg/md/handBuilding.svg"
                    alt=""
                    height={30}
                    width={40}
                    className="w-full h-full"
                />
            </div>
            <div className="col-span-2 md:p-8">
                <div className="grid gap-4 ">
                    <div className="col-2 right-[-10px]">
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
                    <div className="text-center col-span-2 row-start-3 place-items-cente bg-white">
                        Button
                    </div>
                </div>
            </div>
            <div className="col-start-3 row-start-3 md:p-8">
                <Image
                    src="/assets/svg/md/wheel.svg"
                    alt=""
                    height={30}
                    width={40}
                    className="w-full h-full"
                />
            </div>
            <div className="col-span-2 col-start-1 row-start-3 md:p-8">
                <div className="grid gap-4 ">
                    <div className="col-2 right-[-10px]">
                        <Image
                            src="/assets/svg/md/buildingWheel.svg"
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
                    <div className="text-center col-span-2 row-start-3 place-items-cente bg-white">
                       سجل هنا
                    </div>
                </div>
            </div>
            <div className="col-span-3 col-start-1 row-start-2 5 md:p-8">
                <Image
                    src="/assets/svg/vasesLine.svg"
                    alt=""
                    height={30}
                    width={40}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
