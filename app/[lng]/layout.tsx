import {dir} from "i18next";
import { languages } from "../i18n/settings";
import "app/globals.css";

// type Params= {
//   params: {lng: any}
// }
// const languages = ["en", "ar"];

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}))
}
// {params: {lng}} : Params
export default function RootLayout({children}: { children: React.ReactNode}, lng:any) { // eslint-disable-line
  return (
    <html lang={lng} dir={dir(lng)} >
      <body>{children}</body>
    </html>
  )
}