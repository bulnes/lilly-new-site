import Link from "next/link";
import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";

const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Clínicas",
    href: "/",
  },
  {
    name: "Clubes",
    href: "/",
    subitems: [
      {
        name: "Lilly Laser Club",
        href: "/",
      },
      {
        name: "Lilly Boto Club",
        href: "/",
      },
      {
        name: "Lilly Club",
        href: "/",
      },
    ],
  },
  {
    name: "Tratamentos",
    href: "/",
    subitems: [
      {
        name: "Mais Vendidos",
        href: "/",
      },
      {
        name: "Especiais para Você",
        href: "/",
      },
      {
        name: "Tratamentos Faciais",
        href: "/",
      },
      {
        name: "Tratamentos Corporais",
        href: "/",
      },
      {
        name: "Tratamentos Injetáveis",
        href: "/",
      },
      {
        name: "Tratamentos à Laser",
        href: "/",
      },
    ],
  },
  {
    name: "Fale Conosco",
    href: "/",
  },
  {
    name: "Lilly App",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
];

export function Menu() {
  return (
    <nav className="hidden peer-checked/mainmenu:block fixed top-0 left-0 right-0 bottom-0 w-full h-screen min-h-full z-30 bg-black bg-opacity-70">
      <div className="bg-white rounded-tr-3xl rounded-br-3xl py-11 pr-7 h-full w-5/6 animate-slideinleft">
        {/* Menu's header */}
        <div className="flex items-center justify-between pl-9 mb-14">
          <Logo type="black" width={68} height={36} />

          <label for="mainmenu" className="cursor-pointer">
            <Icon name={"close"} width={19} height={19} />
            <span className="sr-only">Fechar</span>
          </label>
        </div>

        <ul>
          {items.map((item, key) => (
            <li key={item.name} className="py-3 border-t-2 last:border-b-2">
              {/* Solo menu item */}
              {!item.subitems && (
                <Link
                  href={item.href}
                  title={`Ir para ${item.name}`}
                  className="flex items-center justify-between pl-9"
                >
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {item.name}
                  </span>
                </Link>
              )}

              {/* Menu item with subitems */}
              {item.subitems && (
                <div className="flex items-center justify-between flex-wrap">
                  <input
                    type="checkbox"
                    id={`menu-${key}`}
                    name="q"
                    class="hidden peer/subitem"
                  />

                  <label
                    for={`menu-${key}`}
                    className="flex items-center justify-between cursor-pointer grow pl-9"
                  >
                    <span className="text-sm font-bold uppercase tracking-wide ">
                      {item.name}
                    </span>
                  </label>

                  <Icon
                    name="arrow-down"
                    width={16}
                    height={8}
                    className="peer-checked/subitem:rotate-180"
                    isResponsive={false}
                  />

                  <ul className="basis-full hidden peer-checked/subitem:block">
                    {item.subitems.map((subitem) => (
                      <li
                        key={subitem.name}
                        className="py-3 border-t-2 first:mt-3 last:border-b-0 last:-mb-3 pl-14"
                      >
                        <Link
                          href={subitem.href}
                          title={`Ir para ${subitem.name}`}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm font-normal tracking-wide">
                            {subitem.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
