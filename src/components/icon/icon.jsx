import Image from "next/image";

export function Icon({ name, className = "" }) {
  return (
    <Image
      src={`/images/icons/${name}.svg`}
      alt=""
      width={24}
      height={24}
      loading={"lazy"}
      className={className}
    />
  );
}
