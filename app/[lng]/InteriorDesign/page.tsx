import Link from "next/link";
import Image from "next/image";
import { useTranslation } from '../../i18n'
type Props = {
    params: { lng: string }
}
export default async function page({ params: { lng } }: Props) {
    // const { t } = await useTranslation(lng, "translations")
    return (
        <>
            <div className="h-screen bg-[#FFD576]">
                <Link href={`/${lng}`}>
                    <Image
                        src="/assets/svg/arrowPink.svg"
                        height={10}
                        width={100}
                        alt=""
                        className="absolute left-0"
                    />
                </Link>
                <div className="flex items-center justify-center">
                    <h1 className="absolute text-3xl font-bold text-white top-96">قريبا...</h1>
                </div>
            </div>

        </>
    )
}