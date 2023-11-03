import { ButtonCTABlack } from "../button-cta/button-cta";
import { Icon } from "../icon/icon";

export function FaqHeader() {
  return (
    <header className="lg:max-w-md">
      <h2 className="text-2xl font-extrabold text-black mb-1 lg:text-5xl lg:mb-3">
        Perguntas mais frequentes
      </h2>

      <p className="text-base mb-3 lg:text-2xl lg:mb-8">
        A nossa equipe separou as perguntas mais frequentes, enviadas por nossos
        clientes.
      </p>

      <ButtonCTABlack href="/" className="w-full lg:max-w-sm">
        <Icon name={"whatsapp-white"} />
        <span>Fale conosco</span>
      </ButtonCTABlack>
    </header>
  );
}
