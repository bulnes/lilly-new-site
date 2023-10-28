import { Head, Html, Main, NextScript } from "next/document";
import { Footer } from "../page-components/footer/footer";
import { Header } from "../page-components/header/header";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
