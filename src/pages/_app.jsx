import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="p:domain_verify"
          content="d05755a8836d70784fd0af4daf55071d"
        />

        <link rel="canonical" href="https://lilly-new-site.vercel.app" />

        {/* Primary Meta Tags */}
        <title>Lilly Estética - Clínica de Estética Avançada</title>
        <meta
          name="title"
          content="Lilly Estética - Clínica de Estética Avançada"
        />
        <meta
          name="description"
          content="Lilly Estética é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas."
        />
        <meta
          name="keywords"
          content="lilly estética, clínica de estética, alta tecnologia, tratamentos estéticos, preços acessíveis, atendimento personalizado, depilação a laser"
        />
        <meta name="referrer" content="always" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Associate this page to Lilly brand */}
        <link href="https://www.lillyestetica.com.br" rel="author" />
        <link href="https://www.lillyestetica.com.br" rel="publisher" />

        {/* Open Graph / Facebook */}
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lilly Estética" />
        <meta property="og:url" content="https://www.lillyestetica.com.br/" />
        <meta
          property="og:title"
          content="Lilly Estética - Clínica de Estética Avançada"
        />
        <meta
          property="og:description"
          content="Lilly Estética é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas."
        />
        <meta
          property="og:image"
          content="https://www.lillyestetica.com.br/images/tratamentos/cover-criofrequencia.jpg"
        />
        <meta property="og:image:alt" content="Lilly Estética" />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="500" />

        {/* Twitter */}
        <meta name="twitter:site" content="@lilly_estetica" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lillyestetica.com.br" />
        <meta
          name="twitter:title"
          content="Lilly Estética - Clínica de Estética Avançada"
        />
        <meta
          name="twitter:description"
          content="Lilly Estética é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas."
        />
        <meta
          property="twitter:url"
          content="https://www.lillyestetica.com.br/"
        />
        <meta
          name="twitter:image"
          content="https://www.lillyestetica.com.br/images/tratamentos/cover-criofrequencia.jpg"
        />

        {/* Apps */}
        <meta name="apple-itunes-app" content="app-id=1607382354" />
        <meta
          name="google-play-app"
          content="app-id=br.com.lillyestetica.app"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="/images/icons/favicon.png"
          type="image/gif"
          sizes="48x48"
        />
      </Head>

      <style jsx global>{`
        html,
        body,
        input,
        button,
        textarea {
          font-family: ${plusJakartaSans.style.fontFamily};
          color: #656565;
        }

        html,
        body {
          background-color: #f4f4f4;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
