import Link from "next/link";
import { ButtonCTAWhite } from "../../components/button-cta/button-cta";
import { Container } from "../../components/container/container";
import { Divider } from "../../components/divider/divider";
import { Icon } from "../../components/icon/icon";
import { Logo } from "../../components/logo/logo";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-52 rounded-t-2xl text-base lg:text-xl lg:pt-24 lg:pb-28">
      <Container>
        <div className="mb-7 flex flex-col items-center gap-9 lg:mb-12 lg:flex-row lg:gap-0 lg:justify-between">
          <Link href="/">
            <Logo
              type="white"
              width={68}
              height={36}
              desktopHeight={43}
              desktopWidth={85}
            />
          </Link>

          <div className="flex flex-row items-center justify-center gap-3 lg:gap-6 lg:order-2">
            <Icon
              name="instagram-white"
              width={32}
              desktopWidth={44}
              height={32}
              desktopHeight={44}
            />
            <Icon
              name="facebook-white"
              width={32}
              desktopWidth={44}
              height={32}
              desktopHeight={44}
            />
            <Icon
              name="whatsapp-white"
              width={32}
              desktopWidth={44}
              height={32}
              desktopHeight={44}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-6">
            <Link href="/">Home</Link>

            <Link href="/">Sobre nós</Link>

            <Link href="/">Nossos Clubes</Link>

            <Link href="/">Promoções</Link>

            <Link href="/">Tratamentos</Link>

            <Link href="/">Unidades</Link>

            <Link href="/">Blog</Link>

            <Link href="/">Catálogo</Link>

            <Link href="/">Lilly App</Link>
          </div>
        </div>

        <Divider className="mb-7 lg:mb-12" />

        <div className="mb-7 flex flex-col items-center gap-9 lg:mb-12 lg:flex-row lg:gap-0 lg:justify-around">
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-6">
            <Link href="/">Fale Conosco (SAC)</Link>

            <Link href="/">Dúvidas</Link>

            <Link href="/">Reclamações</Link>

            <Link href="/">Cancelamento</Link>

            <Link href="/">Ouvidoria</Link>
          </div>

          <ButtonCTAWhite href={"/"} className="max-w-xs">
            <Icon
              name="whatsapp"
              width={16}
              height={16}
              desktopHeight={19}
              desktopWidth={19}
            />
            <span>Saiba mais</span>
          </ButtonCTAWhite>
        </div>

        <Divider className="mb-7 lg:mb-12" />

        <div className="text-center">
          {new Date().getFullYear()} &copy; Lilly Estética S.A.
        </div>
      </Container>
    </footer>
  );
}
