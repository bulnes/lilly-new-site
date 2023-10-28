import Link from "next/link";
import { ButtonCTAWhite } from "../../components/button-cta/button-cta";
import { Container } from "../../components/container/container";
import { Divider } from "../../components/divider/divider";
import { Icon } from "../../components/icon/icon";
import { Logo } from "../../components/logo/logo";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-52 rounded-t-2xl text-base">
      <Container>
        <div className="mb-7 flex flex-col items-center gap-9">
          <Link href="/">
            <Logo white />
          </Link>

          <div className="flex flex-row items-center justify-center gap-3">
            <Icon name="instagram-white" width={31} height={31} />
            <Icon name="facebook-white" width={31} height={31} />
            <Icon name="whatsapp-white" width={31} height={31} />
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
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

        <Divider className="mb-7" />

        <div className="mb-7 flex flex-col items-center gap-9">
          <div className="flex flex-col items-center justify-center gap-3">
            <Link href="/">Fale Conosco (SAC)</Link>

            <Link href="/">Dúvidas</Link>

            <Link href="/">Reclamações</Link>

            <Link href="/">Cancelamento</Link>

            <Link href="/">Ouvidoria</Link>
          </div>

          <ButtonCTAWhite href={"/"}>
            <Icon name="whatsapp" width={16} height={16} />
            <span>Saiba mais</span>
          </ButtonCTAWhite>
        </div>

        <Divider className="mb-7" />

        <div className="text-center">
          {new Date().getFullYear()} &copy; Lilly Estética S.A.
        </div>
      </Container>
    </footer>
  );
}
