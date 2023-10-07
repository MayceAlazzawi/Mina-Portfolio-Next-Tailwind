import Link from "next/link";
import { useTranslation } from '../../i18n'
type Props= {
    params: {lng: string}
}
export default async function page({params: {lng}}: Props) {
    const { t } = await useTranslation(lng, "translations")
    return (
    <>
    <h1 className="bg-black underline">{t('title')}</h1>
    <Link href={`/${lng}`}>{t('back-to-home')}</Link>
    </>
    )
}