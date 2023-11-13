import Link from "next/link";
// import { useTranslation } from "../i18n"
// import HomeBg from "../../public/assets/images/homeBg.jpg";
// import Button from "../../public/assets/images/button.png";

// type Props = {
//   params: { lng: string }
// }
// { params: { lng } }: Props
export default async function page() {
  // const { t } = await useTranslation(lng, "translations")
  return (
    <>
      <div
        className="lg:hidden relative z-0 bg-cover bg-center h-[1261px] md:h-[2379px]"
        style={{ backgroundImage: "url('/assets/images/two.png')" }}
      >
        <Link href="#workshops" className="absolute top-[430px] text-xl text-white font-semibold right-[40px]">كـمل مـن هـنا</Link>
        <Link
          id="workshops"
          href="/workshops"
          className="absolute top-[630px] right-[10px] h-[190px] w-[200px]"
        ></Link>
        <Link
          href="/InteriorDesign"
          className="absolute top-[620px] left-[10px] h-[160px] w-[150px]"
        ></Link>
      </div>
      <div className="lg:hidden footer absolute w-full py-5 text-center bg-[#cfecf0] text-sm">
        <p className="text-gray-500">
          A project by {" "}
          <a
            className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
            href="https://imayce.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAYS AL-AZZAWI
          </a>
        </p>
      </div>
      <div
        className="hidden lg:block relative h-[1117px] w-[1728px]"
        style={{ backgroundImage: "url('/assets/images/twoMd.png')" }}
      >
        <Link
          href="/workshops"
          className="absolute bottom-12 right-28 h-[315px] w-[350px]"
        ></Link>
        <Link
          href="/InteriorDesign"
          className="absolute bottom-8 right-[800px] h-[315px] w-[350px]"
        ></Link>
      </div>
      
    </>
  );
}

//  {/* <div
//     className="relative z-0 bg-cover bg-center h-[1261px]"
//     style={{ backgroundImage: "url('/assets/svg/md/bgMd.svg')" }}
//   >
//     {/* Content goes herefddgfdg
//     <Link
//       href="/second-page"
//       className="absolute top-[425px] right-[70px] text-3xl text-white z-3"
//     >
//       يلا !
//     </Link> */}

//       {/* Content goes here*/}
//       <Link
//       href="/workshops"
//       className="h-full w-full bg-white"
//     >
//       <div className="absolute top-[580px] bg-transparent w-[450px] right-[30px] h-[500px] text-3xl text-white z-3">

//       </div>
//     </Link>
//     </div> */}
