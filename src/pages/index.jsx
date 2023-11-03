import { ButtonCTABlack } from "../components/button-cta/button-cta";
import { Container } from "../components/container/container";
import { Faq } from "../components/faq/faq";

export default function Index({ title }) {
  return (
    <>
      <div className="py-10">
        <Container>
          <h1 className="text-4xl font-bold text-black underline mb-6">
            {title}
          </h1>

          <ButtonCTABlack href="/about" className="lg:w-96">
            Acessar página sobre nós
          </ButtonCTABlack>
        </Container>
      </div>

      <Faq />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: "Estou na home!",
    },
  };
}
