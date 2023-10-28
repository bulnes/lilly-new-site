import Image from "next/image";

export function Logo({
  type = "dark",
  width = 100,
  height = 100,
  desktopWidth = 100,
  desktopHeight = 100,
  ...props
}) {
  return (
    <picture>
      {/* Desktop image */}
      <source
        media="(min-width: 1024px)"
        srcSet={`/images/logos/logo-${type}.svg`}
        width={desktopWidth}
        height={desktopHeight}
      />

      {/* Default image (mobile first) */}
      <Image
        src={`/images/logos/logo-${type}.svg`}
        alt="Logo Lilly Estética"
        title="Lilly Estética"
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </picture>
  );
}
