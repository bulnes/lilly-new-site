export function NavDots({ dataList = [], focusIndex = 0, handleOnClick }) {
  return (
    <div className="flex justify-center gap-2 lg:gap-4">
      {dataList.map((data, key) => (
        <button
          type="button"
          key={key}
          className={`h-2 rounded-full focus:outline-none lg:h-3 ${
            focusIndex === key
              ? "bg-black w-8 lg:w-12"
              : "bg-[#D7D6D6] w-2 lg:w-3"
          }`}
          onClick={() => handleOnClick(key)}
        >
          <span className="sr-only">Ir para o slide {key + 1}</span>
        </button>
      ))}
    </div>
  );
}
