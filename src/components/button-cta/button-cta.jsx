import Link from "next/link";

export function ButtonCTAWhite({ children, className = "", ...props }) {
  return (
    <Link
      className={`bg-white flex items-center justify-center gap-2 w-full p-3 text-base text-black font-bold rounded-full ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonCTABlack({ children, className = "", ...props }) {
  return (
    <Link
      className={`bg-black flex items-center justify-center gap-2 w-full p-3 text-base text-white font-bold rounded-full ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
