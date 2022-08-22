export const Image = ({ imageSrc, children }) => {
  return (
    <div className="mt-6 max-w-7xl mx-auto h-[630px] md:h-auto drop-shadow-2xl">
      <div className="rounded-lg overflow-hidden w-full sm:h-full h-full bg-slate-900 flex justify-center items-center">
        <div className="absolute w-[800px] sm:w-3/4 z-50 sm:flex sm:flex-col sm:items-center">
          {children}
        </div>
        <img
          src={imageSrc}
          alt="Table full of food"
          className="w-full h-full object-center object-cover opacity-[50%]"
        />
      </div>
    </div>
  );
};
