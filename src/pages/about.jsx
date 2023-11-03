import { ButtonCTABlack } from "../components/button-cta/button-cta";
import { Container } from "../components/container/container";

export default function About() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-4xl font-bold text-black underline mb-6">
          Sobre nós
        </h1>

        <ButtonCTABlack href="/" className="lg:w-96">
          Voltar para home
        </ButtonCTABlack>
      </Container>
    </div>
  );
}
