import { Container } from "../container/container";

export function Contact() {
  return (
    <section className="mb-10 lg:mb-14">
      <Container>
        <div className="bg-gradient-to-b from-[#F1F1F1] to-[#EDEDED] rounded-2xl p-6 lg:py-10 lg:px-32">
          <h2 className="text-2xl font-extrabold text-black mb-1 lg:text-5xl lg:mb-3 lg:text-center">
            Ganhe 15% OFF na sua primeira compra
          </h2>

          <p className="text-base lg:text-2xl lg:text-center">
            Cadastre-se, receba informações sobre o mundo da estética e ainda{" "}
            <em className="text-black font-normal not-italic lg:block lg:font-extrabold">
              ganhe 1 avaliação <span className="uppercase">grátis</span>!
            </em>
          </p>
        </div>
      </Container>
    </section>
  );
}
