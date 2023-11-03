import { Container } from "../container/container";
import { FaqContent } from "./faq-content";
import faqQuestions from "./faq-data.json";
import { FaqHeader } from "./faq-header";

export function Faq() {
  return (
    <section className="pt-7 pb-9 -mb-3 rounded-t-2xl bg-white lg:pt-12 lg:pb-16">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-40">
          <FaqHeader />
          <FaqContent faqQuestions={faqQuestions} />
        </div>
      </Container>
    </section>
  );
}
