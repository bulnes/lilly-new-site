import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Page() {
  return (
    <>
      <Title>Hello, Next.js!</Title>

      <Link href="/about">About</Link>
    </>
  );
}
