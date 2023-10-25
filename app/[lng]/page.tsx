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
    <section className="h-screen bg-black">
      <div
        className="relative z-0 bg-cover bg-center h-[1261px]"
        style={{ backgroundImage: "url('/assets/images/homeBg.png')" }}
      >
        {/* Content goes herefddgfdg */}
        <Link
          href="/second-page"
          className="absolute top-[425px] right-[70px] text-3xl text-white z-3"
        >
          يلا !
        </Link>
      </div>

      {/* Content goes herefddgfdg */}
      <Link
        href="/workshops"
        className="h-full w-full bg-white"
      >
        <div className="absolute top-[580px] bg-transparent w-60 right-[30px] h-60 text-3xl text-white z-3">
       sad
        </div>

      </Link>
    

    </section>
  );
}
