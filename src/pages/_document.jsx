import { Head, Html, Main, NextScript } from "next/document";
import { usePathname } from "next/navigation";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { ToolBar } from "../components/toolbar/toolbar";

export default function Document() {
  const pathname = usePathname();

  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <ToolBar />
        <NextScript />
      </body>
    </Html>
  );
}
