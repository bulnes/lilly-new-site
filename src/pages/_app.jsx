import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="robots" content="index, follow" />
        <meta
          name="title"
          content="Suposto autor do massacre que deixou 18 mortos no Maine (EUA) é encontrado morto - Notícias - R7 Internacional"
        />
        <meta
          name="description"
          content="Informação foi confirmada pela governadora do estado, após divulgação por parte da imprensa americana"
        />

        <meta
          name="keywords"
          content="suspeito, autor, tiroteio, massacre, maine, eua, morto"
        />
        <meta name="referrer" content="always" />

        <title>Lilly Estética</title>
      </Head>

      <style jsx global>{`
        html,
        body,
        input,
        button,
        textarea {
          font-family: ${plusJakartaSans.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
