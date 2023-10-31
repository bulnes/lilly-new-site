import { ButtonCTABlack } from "../components/button-cta/button-cta";
import { Container } from "../components/container/container";

export default function Index({ title }) {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-4xl font-bold underline mb-6">{title}</h1>

        <ButtonCTABlack href="/about" className="w-96">
          Acessar página sobre nós
        </ButtonCTABlack>
      </Container>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: "Estou na home!",
    },
  };
}
