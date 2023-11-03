import { ButtonCTABlack } from "../button-cta/button-cta";
import { Container } from "../container/container";
import { Icon } from "../icon/icon";
import faqQuestions from "./faq-data.json";

export function Faq() {
  return (
    <section className="pt-7 pb-9 -mb-3 rounded-t-2xl bg-white lg:pt-12 lg:pb-16">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-40">
          <header className="lg:max-w-md">
            <h2 className="text-2xl font-extrabold text-black mb-1 lg:text-5xl lg:mb-3">
              Perguntas mais frequentes
            </h2>

            <p className="text-base mb-3 lg:text-2xl lg:mb-8">
              A nossa equipe separou as perguntas mais frequentes, enviadas por
              nossos clientes.
            </p>

            <ButtonCTABlack href="/" className="w-full lg:max-w-sm">
              <Icon name={"whatsapp-white"} />
              <span>Fale conosco</span>
            </ButtonCTABlack>
          </header>

          <main className="lg:w-3/5">
            {faqQuestions.map((faqQuestion, index) => (
              <div
                key={index}
                className="py-3 border-b last:border-none border-[#E8E8E8] border-solid lg:py-5"
              >
                <input
                  type="checkbox"
                  id={`faq-${index}`}
                  name={`faq-${index}`}
                  className="peer/faq hidden"
                />

                <label
                  for={`faq-${index}`}
                  className="flex items-center justify-between gap-1 cursor-pointer"
                >
                  <h3 className="text-base font-semibold lg:text-xl">
                    <span>{faqQuestion.question}</span>
                  </h3>

                  <Icon
                    name={"plus"}
                    width={18}
                    height={18}
                    isResponsive={false}
                  />
                </label>

                <p
                  className="hidden peer-checked/faq:block transition-transform text-base mt-3 lg:text-xl lg:mt-5"
                  dangerouslySetInnerHTML={{ __html: faqQuestion.answer }}
                ></p>
              </div>
            ))}
          </main>
        </div>
      </Container>
    </section>
  );
}
