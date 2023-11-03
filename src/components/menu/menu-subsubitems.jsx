import Link from "next/link";
import { Icon } from "../icon/icon";

export function SubSubItems({ itemKey, subitemKey, subitem }) {
  return (
    <div className="flex items-center justify-between flex-wrap lg:relative group/level2">
      <input
        type="checkbox"
        id={`subitem-${itemKey}-${subitemKey}`}
        name="q"
        className="hidden peer/subsubitem"
      />

      <label
        htmlFor={`subitem-${itemKey}-${subitemKey}`}
        className="flex items-center justify-between cursor-pointer grow py-3 pl-14 lg:px-3 peer/menudropdown"
      >
        <span className="text-sm font-bold tracking-wide">{subitem.name}</span>
      </label>

      <Icon
        name="arrow-down"
        width={16}
        height={8}
        className="peer-checked/subsubitem:rotate-180 lg:absolute lg:right-2 lg:w-3 lg:-rotate-90 group-hover/level2:lg:rotate-90"
        isResponsive={false}
      />

      <ul className="basis-full hidden peer-checked/subsubitem:block group-hover/level2:lg:block lg:absolute lg:top-0 lg:-right-52 lg:bg-[#F0F0F0] lg:rounded lg:rounded-tl-none">
        {subitem.subitems.map((subitem) => (
          <li
            key={subitem.name}
            className="border-t-2 last:border-b-0 lg:first:mt-0 lg:last:mb-0 lg:border-none lg:w-52 lg:hover:bg-[#d8d8d8] first:lg:hover:rounded-tr last:lg:hover:rounded-b"
          >
            <Link
              href={subitem.href}
              title={`Ir para ${subitem.name}`}
              className="py-3 pl-20 flex items-center justify-between lg:px-3"
            >
              <span className="text-sm font-normal tracking-wide">
                {subitem.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <span className="hidden group-hover/level2:lg:block bg-transparent h-5 w-full absolute top-4"></span>
    </div>
  );
}
