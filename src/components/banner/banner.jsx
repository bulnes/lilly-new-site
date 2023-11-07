import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "../container/container";
import { NavDots } from "../nav-dots/nav-dots";
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

        <div className="lg:absolute lg:w-full lg:bottom-8">
          <NavDots
            dataList={bannerData}
            focusIndex={bannerFocusIndex}
            handleOnClick={(key) => bannerRef.current.splide.go(key)}
          />
        </div>
      </Container>
    </section>
  );
}
