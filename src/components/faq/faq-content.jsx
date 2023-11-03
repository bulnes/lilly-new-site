import { Icon } from "../icon/icon";

export function FaqContent({ faqQuestions = [] }) {
  return (
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
            className="flex items-start justify-between gap-3 cursor-pointer"
          >
            <h3 className="text-base font-semibold lg:text-xl">
              <span>{faqQuestion.question}</span>
            </h3>

            <Icon name={"plus"} width={18} height={18} isResponsive={false} />
          </label>

          <p
            className="hidden peer-checked/faq:block transition-transform text-base mt-3 lg:text-xl lg:mt-5"
            dangerouslySetInnerHTML={{ __html: faqQuestion.answer }}
          ></p>
        </div>
      ))}
    </main>
  );
}
