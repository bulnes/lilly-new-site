import Image from "next/image";

export function Logo({ white, width = 100, height = 100, className = "" }) {
  if (white) {
    return (
      <Image
        src={"/images/logos/logo-white.svg"}
        alt="Logo Lilly Estética"
        title="Lilly Estética"
        width={width}
        height={height}
        loading="lazy"
        className={className}
      />
    );
  }

  return <div>Logo</div>;
}
