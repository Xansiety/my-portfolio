export const Presentation = () => {
  return (
    <div className="z-50 flex flex-col flex-wrap gap-4 px-10 py-24 sm:items-center sm:justify-center md:w-1/2 md:items-start lg:w-3/5">
      <h2 className="text-sm font-light text-white md:text-2xl">
        Welcome to my site, <span className=" text-xl  font-semibold uppercase md:text-3xl">My name is Fernando</span>
      </h2>
      <p className="md:text-md mt-4 text-sm leading-relaxed text-gray-200 md:block md:text-xl">
        I'm a Web Developer with 3 years of experience, located in México, coding is my passion and my new professional career focus. Developing
        applications for the web has become my drive.
      </p>
      <a
        href="media/cv_no_sense.pdf"
        download="CV_Luis+Fernando+Hernandez+Jimenez+Web+Developer.pdf"
        className="text-md my-4 cursor-pointer border-0 bg-white px-8 py-2 font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:-skew-x-12 hover:scale-125 hover:bg-gray-300"
      >
        Download CV
      </a>

      <p className="bg-gradient-to-r from-white via-indigo-500 to-blue-500  bg-clip-text text-xl text-transparent font-semibold">
        Yup, I'm working in this site <span className="text-white">🫥</span>
      </p>
    </div>
  );
};
