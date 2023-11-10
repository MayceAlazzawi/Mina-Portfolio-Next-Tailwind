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
    <div className="hidden md:block relative h-[1117px] w-[1728px]" style={{ backgroundImage: "url('/assets/svg/md/bgMd.svg')" }}>
      <Link href="/workshops" className="absolute bottom-12 right-28 h-[315px] w-[350px]"></Link>
      <Link href="/InteriorDesign" className="absolute bottom-8 right-[800px] h-[315px] w-[350px]"></Link>
    </div>
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