import Image from "next/image";

export function Icon({ name, width = 24, height = 24, className = "" }) {
  return (
    <Image
      src={`/images/icons/${name}.svg`}
      alt=""
      width={width}
      height={height}
      loading={"lazy"}
      className={className}
    />
  );
}
