import Link from "next/link";
import { Container } from "../container/container";
import { Icon } from "../icon/icon";

const items = [
  {
    href: "/",
    title: "home",
    icon: "home",
    label: "Home",
    checked: false,
  },
  {
    href: "/about",
    title: "sobre nós",
    icon: "heart",
    label: "Sobre nós",
    checked: true,
  },
  {
    href: "/tratamentos",
    title: "tratamentos",
    icon: "lotus",
    label: "Tratamentos",
    checked: false,
  },
  {
    href: "/unidades",
    title: "unidades",
    icon: "point",
    label: "Unidades",
    checked: false,
  },
  {
    href: "/promocoes",
    title: "promoções",
    icon: "tag",
    label: "Promoções",
    checked: false,
  },
  {
    href: "/busca",
    title: "busca",
    icon: "search",
    label: "Buscar",
    checked: false,
  },
];

export function ToolBar() {
  return (
    <section className="block lg:hidden py-3 fixed bottom-0 left-0 right-0 z-20 bg-white shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)]">
      <Container>
        <div className="flex flex-row items-center justify-evenly max-w-md mx-auto">
          {/* Show all toolbar items */}
          {items.map((item, key) => (
            <Link
              key={key}
              href={item.href}
              title={`Ir para ${item.title}`}
              className="flex flex-col gap-1 items-center justify-center data-[checked=true]:text-black data-[checked=true]:font-bold"
              data-checked={item.href === "/"}
            >
              <span className="inline-block w-4 h-4">
                <Icon
                  name={item.icon}
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  isResponsive={false}
                />
              </span>
              <span className="text-xxl">{item.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
