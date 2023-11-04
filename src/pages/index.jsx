import { Faq } from "../components/faq/faq";
import { IconsCarousel } from "../components/icons-carousel/icons-carousel";

export default function Index({ title }) {
  return (
    <>
      <IconsCarousel />
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
