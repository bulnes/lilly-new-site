import Image from "next/image";

export function Icon({
  name,
  className = "",
  width = 24,
  height = 24,
  desktopWidth = 24,
  desktopHeight = 24,
}) {
  return (
    <picture>
      {/* Desktop image */}
      <source
        media="(min-width: 1024px)"
        srcSet={`/images/icons/${name}.svg`}
        width={desktopWidth}
        height={desktopHeight}
      />

      {/* Default image (mobile first) */}
      <Image
        src={`/images/icons/${name}.svg`}
        alt=""
        width={width}
        height={height}
        loading={"lazy"}
        className={className}
      />
    </picture>
  );
}
