import Link from "next/link";
import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";
import items from "./menu-data.json";
import { SubItems } from "./menu-subitems";

export function Menu() {
  return (
    <nav className="hidden peer-checked/mainmenu:block fixed top-0 left-0 right-0 bottom-0 w-full h-screen min-h-full z-30 bg-black bg-opacity-70 lg:block lg:static lg:h-auto lg:min-h-0 lg:z-auto lg:bg-transparent lg:w-2/3">
      {/* Menu content */}
      <div className="bg-white rounded-tr-3xl rounded-br-3xl py-11 pr-7 h-full w-5/6 animate-slideinleft overflow-x-hidden overflow-y-scroll lg:overflow-x-visible lg:overflow-y-visible lg:py-0 lg:pr-0 lg:animate-none lg:w-full lg:h-auto">
        {/* Menu's header */}
        <div className="flex items-center justify-between pl-9 mb-14 lg:hidden">
          <Logo type="black" width={68} height={36} />

          <label htmlFor="mainmenu" className="cursor-pointer">
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
                <SubItems key={key} itemKey={key} item={item} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
