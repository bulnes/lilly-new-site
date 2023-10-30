import { Container } from "../container/container";
import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";
import { Menu } from "../menu/menu";

export function Header() {
  return (
    <header className="border-b-2">
      <Container className="border-b-2">
        <div className="pt-10 pb-2 flex items-end justify-between">
          <input
            type="checkbox"
            id="mainmenu"
            name="mainmenu"
            class="peer/mainmenu hidden"
          />

          <label for="mainmenu" className="cursor-pointer">
            <Icon
              name="burger"
              width={31}
              height={31}
              className="mb-1 block lg:hidden"
              isResponsive={false}
            />
            <span className="sr-only">Abrir menu</span>
          </label>

          <Logo type="black" width={68} height={36} />

          <Menu />

          <Icon name="cart" width={31} height={31} className="mb-1" />
        </div>
      </Container>
    </header>
  );
}
