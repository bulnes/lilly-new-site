import { Head, Html, Main, NextScript } from "next/document";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { ToolBar } from "../components/toolbar/toolbar";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="h-full">
        <Header />
        <Main />
        <ToolBar />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
