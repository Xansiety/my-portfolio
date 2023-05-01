export const Header = () => {
  return (
    <header className="absolute top-0 z-50 flex w-full items-center justify-center px-4 py-10 text-white sm:mt-10 md:left-0 md:px-24">
      <h1 className="flex items-center justify-center">
        <p className="ml-3 cursor-default text-xl  font-light tracking-widest text-white md:text-2xl">
          Hi everyone it's me <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 font-bold">XANSIETY</span>
          <span className="-me-24 -mt-1 hidden items-end justify-end text-sm md:flex -skew-x-12" style={{ opacity: 1 }}>
            Yeah, this is my nickname 😅
          </span>
        </p>
      </h1>
    </header>
  );
};
