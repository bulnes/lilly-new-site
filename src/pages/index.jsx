import Link from "next/link";

export default function Index({ title }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">{title}</h1>

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
