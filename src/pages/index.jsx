import { Banner } from "../components/banner/banner";
import { Faq } from "../components/faq/faq";
import { IconsCarousel } from "../components/icons-carousel/icons-carousel";

export default function Index({ title }) {
  return (
    <>
      <IconsCarousel />
      <Banner />
      <Faq />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: "Estou na home!",
    },
  };
}
