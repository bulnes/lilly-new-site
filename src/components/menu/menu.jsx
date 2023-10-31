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
    <nav className="hidden peer-checked/mainmenu:block fixed top-0 left-0 right-0 bottom-0 w-full h-screen min-h-full z-30 bg-black bg-opacity-70 lg:block lg:static lg:h-auto lg:min-h-0 lg:z-auto lg:bg-transparent lg:w-2/3">
      {/* Menu content */}
      <div className="bg-white rounded-tr-3xl rounded-br-3xl py-11 pr-7 h-full w-5/6 animate-slideinleft lg:py-0 lg:pr-0 lg:animate-none lg:w-full lg:h-auto">
        {/* Menu's header */}
        <div className="flex items-center justify-between pl-9 mb-14 lg:hidden">
          <Logo type="black" width={68} height={36} />

          <label for="mainmenu" className="cursor-pointer">
            <Icon name={"close"} width={19} height={19} />
            <span className="sr-only">Fechar</span>
          </label>
        </div>

        <ul className="block lg:flex lg:items-center lg:justify-center lg:gap-6">
          {items.map((item, key) => (
            <li
              key={item.name}
              className="py-3 border-t-2 last:border-b-2 lg:py-0 lg:border-none"
            >
              {/* Solo menu item */}
              {!item.subitems && (
                <Link
                  href={item.href}
                  title={`Ir para ${item.name}`}
                  className="flex items-center justify-between pl-9 lg:pl-0"
                >
                  <span className="text-sm font-bold uppercase tracking-wide lg:capitalize lg:text-base lg:font-normal">
                    {item.name}
                  </span>
                </Link>
              )}

              {/* Menu item with subitems */}
              {item.subitems && (
                <div className="flex items-center justify-between flex-wrap lg:relative group/level1">
                  <input
                    type="checkbox"
                    id={`menu-${key}`}
                    name="q"
                    class="hidden peer/subitem"
                  />

                  <label
                    for={`menu-${key}`}
                    className="flex items-center justify-between cursor-pointer grow pl-9 lg:pl-0 peer/menudropdown"
                  >
                    <span className="text-sm font-bold uppercase tracking-wide lg:capitalize lg:text-base lg:font-normal">
                      {item.name}
                    </span>
                  </label>

                  <Icon
                    name="arrow-down"
                    width={16}
                    height={8}
                    className="peer-checked/subitem:rotate-180 lg:pl-1 group-hover/level1:lg:rotate-180 group-hover/level1:lg:pr-1 group-hover/level1:lg:pl-0"
                    isResponsive={false}
                  />

                  <ul className="basis-full hidden peer-checked/subitem:block group-hover/level1:lg:block lg:absolute lg:top-9 lg:bg-[#F0F0F0] lg:rounded">
                    {item.subitems.map((subitem) => (
                      <li
                        key={subitem.name}
                        className="border-t-2 first:mt-3 last:border-b-0 last:-mb-3 lg:first:mt-0 lg:last:mb-0 lg:border-none lg:w-52 lg:hover:bg-[#d8d8d8]"
                      >
                        <Link
                          href={subitem.href}
                          title={`Ir para ${subitem.name}`}
                          className="py-3 pl-14 flex items-center justify-between lg:px-3"
                        >
                          <span className="text-sm font-normal tracking-wide">
                            {subitem.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <span className="hidden group-hover/level1:lg:block bg-transparent h-5 w-full absolute top-4"></span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
