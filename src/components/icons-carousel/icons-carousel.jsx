import Image from "next/image";
import { Container } from "../container/container";
import iconsData from "./icons-carousel.json";

export function IconsCarousel() {
  return (
    <section className="mb-3 lg:mb-9">
      <Container>
        <h2 className="max-w-sm mx-auto mb-5 lg:max-w-none lg:mx-0 lg:mb-10">
          <span className="text-3xl font-extrabold text-black text-center block lg:text-6xl">
            O que você deseja tratar na Lilly Estética?
          </span>
        </h2>
      </Container>

      <div className="px-0 mx-auto lg:px-0 lg:max-w-7xl">
        <div className="overflow-x-auto overflow-y-hidden no-scrollbar flex items-start gap-2 pt-2 pb-3 before:block before:w-5 after:block after:w-5 lg:before:hidden lg:after:hidden lg:overflow-x-auto lg:pb-0 lg:gap-4">
          {iconsData.map((icon, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-1 relative"
            >
              <div className="w-16 h-0 lg:hidden"></div>

              <picture className="w-14 h-14 lg:w-20 lg:h-20">
                <source
                  media="(min-width: 768px)"
                  srcSet={icon.image}
                  width={78}
                  height={78}
                />

                <Image
                  src={icon.image}
                  alt={icon.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </picture>

              <span className="text-[10px] text-center lg:text-base">
                {icon.name}
              </span>

              {icon.new && (
                <span className="text-white text-[10px] font-bold italic text-center bg-[#A23978] rounded py-0.5 px-1.5 inline-block absolute -top-2">
                  Novo
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
