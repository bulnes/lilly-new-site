import Link from "next/link";

export function ButtonCTAWhite({ children, className = "", ...props }) {
  return (
    <Link
      className={`bg-white flex items-center justify-center gap-2 w-full p-4 text-base text-black font-bold rounded-full lg:text-lg ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
