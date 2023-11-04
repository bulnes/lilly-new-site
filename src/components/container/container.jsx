export function Container({ children, className = "" }) {
  return (
    <div className={`px-5 mx-auto lg:px-0 lg:max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
