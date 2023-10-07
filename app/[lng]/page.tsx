import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "../i18n"
import HomeBg from "../../public/assets/images/homeBg.jpg";
import Button from "../../public/assets/images/button.png";

type Props = {
  params: { lng: string }
}

export default async function page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, "translations")
  return (
    <div className="">
      <div className="relative z-0 bg-cover bg-center h-[1261px]" style={{ backgroundImage: "url('/assets/images/homeBg.jpg')" }}>
        {/* Content goes herefddgfdg */}
        <Link href="/second-page" className="absolute top-[425px] right-[70px] text-3xl text-white z-3">يلا !</Link>

      </div>
    </div>

    // <div className="homeBg" >
    //   {/* <Image src={HomeBg} alt=""  /> */}
    //   <Image src={Button} alt="" className="absolute"/>
    //   {/* <h1>{t('working')}</h1>
    //   <Link href={`/${lng}/second-page`}>
    //   {t('back-to-home')}
    //   </Link> */}
    // </div>
  )
}
