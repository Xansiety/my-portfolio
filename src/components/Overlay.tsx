export const Overlay = () => {
  return (
    <>
      <video autoPlay loop muted className="absolute left-0 top-0 -z-10 h-full w-full object-cover">
        <source src="media/pexels-free-videos-853750-1920x1080-25fps.mp4" type="video/mp4"></source>
      </video>
      <div className="absolute left-0 top-0 h-full w-full bg-black/60"></div>
    </>
  );
};
