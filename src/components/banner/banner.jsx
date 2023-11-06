import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "../container/container";
import bannerData from "./banner-data.json";

export function Banner() {
  const bannerRef = useRef(null);
  const [bannerFocusIndex, setBannerFocusIndex] = useState(0);

  useEffect(() => {
    if (bannerRef.current) {
      // Update the banner focus index when the user changes the slide
      bannerRef.current.splide.on("move", (newIndex) => {
        setBannerFocusIndex(newIndex);
      });
    }
  });

  return (
    <section className="mb-10 lg:mb-14">
      <Container className="lg:relative">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            perPage: 1,
            speed: 500,
            arrows: false,
            pagination: false,
          }}
          ref={bannerRef}
          className="mb-5 lg:mb-0"
        >
          {bannerData.map((banner, key) => (
            <SplideSlide key={key} className="">
              <Link
                href={banner.href}
                title={banner.title}
                target={banner.target}
              >
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet={banner.desktopImage}
                    width={1455}
                    height={532}
                  />

                  <Image
                    src={banner.mobileImage}
                    alt={banner.title}
                    width={350}
                    height={360}
                    loading={"lazy"}
                    className="rounded-3xl"
                  />
                </picture>
              </Link>
            </SplideSlide>
          ))}
        </Splide>

        <div className="flex justify-center gap-2 lg:gap-4 lg:absolute lg:w-full lg:bottom-8">
          {bannerData.map((banner, key) => (
            <button
              type="button"
              key={key}
              className={`h-2 rounded-full focus:outline-none lg:h-3 ${
                bannerFocusIndex === key
                  ? "bg-black w-8 lg:w-12"
                  : "bg-[#D7D6D6] w-2 lg:w-3"
              }`}
              onClick={() => bannerRef.current.splide.go(key)}
            >
              <span className="sr-only">Ir para {banner.title}</span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
