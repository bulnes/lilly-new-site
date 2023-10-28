import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Index({ title }) {
  return (
    <>
      <Title>{title}</Title>

      <Link href="/about">About</Link>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: "Hello, Lilly!",
    },
  };
}
