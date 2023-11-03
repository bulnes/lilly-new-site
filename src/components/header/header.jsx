import { ButtonCTABlack } from "../button-cta/button-cta";
import { Container } from "../container/container";
import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";
import { Menu } from "../menu/menu";

export function Header() {
  return (
    <header className="border-b-2 lg:rounded-b-3xl">
      <Container className="border-b-2">
        <div className="pt-10 pb-2 flex items-end justify-between lg:items-center lg:py-4 lg:gap-6">
          <input
            type="checkbox"
            id="mainmenu"
            name="mainmenu"
            class="peer/mainmenu hidden"
          />

          <label for="mainmenu" className="cursor-pointer lg:hidden">
            <Icon
              name="burger"
              width={31}
              height={31}
              className="mb-1 block"
              isResponsive={false}
            />
            <span className="sr-only">Abrir menu</span>
          </label>

          <Logo type="black" width={68} height={36} />

          <Menu />

          <Icon
            name="cart"
            width={31}
            height={31}
            desktopWidth={36}
            desktopHeight={36}
            className="mb-1 lg:mb-0"
          />

          <ButtonCTABlack href="/" className="hidden lg:flex lg:w-52">
            <Icon
              name="whatsapp-white"
              width={16}
              height={16}
              desktopWidth={16}
              desktopHeight={16}
            />
            <span>Fale Conosco</span>
          </ButtonCTABlack>

          <div class="hidden lg:block relative w-56">
            <input
              type="search"
              id="search"
              className="w-full pl-6 pr-10 py-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors bg-[#F0F0F0] text-xs"
              placeholder="Buscar"
            />

            <button
              type="button"
              className="block w-6 h-6 text-center text-xl leading-0 absolute top-3 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"
            >
              <Icon name="search" width={24} height={24} isResponsive={false} />
              <span className="sr-only">Pesquisar</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
