import Link from "next/link";
import { Icon } from "../icon/icon";
import { SubSubItems } from "./menu-subsubitems";

export function SubItems({ itemKey, item }) {
  return (
    <div className="flex items-center justify-between flex-wrap lg:relative group/level1">
      <input
        type="checkbox"
        id={`menu-${itemKey}`}
        name="q"
        className="hidden peer/subitem"
      />

      <label
        htmlFor={`menu-${itemKey}`}
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
        {item.subitems.map((subitem, subitemKey) => (
          <li
            key={subitem.name}
            className="border-t-2 first:mt-3 last:border-b-0 last:-mb-3 lg:first:mt-0 lg:last:mb-0 lg:border-none lg:w-52 lg:hover:bg-[#d8d8d8]"
          >
            {/* Solo subitem */}
            {!subitem.subitems && (
              <Link
                href={subitem.href}
                title={`Ir para ${subitem.name}`}
                className="py-3 pl-14 flex items-center justify-between lg:px-3"
              >
                <span className="text-sm font-normal tracking-wide">
                  {subitem.name}
                </span>
              </Link>
            )}

            {/* Menu subitem with subitems */}
            {subitem.subitems && (
              <SubSubItems
                key={itemKey}
                itemKey={itemKey}
                subitemKey={subitemKey}
                subitem={subitem}
              />
            )}
          </li>
        ))}
      </ul>

      <span className="hidden group-hover/level1:lg:block bg-transparent h-5 w-full absolute top-4"></span>
    </div>
  );
}
