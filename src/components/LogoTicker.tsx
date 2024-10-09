import LogoCarousel from "./Companylogos";

export const LogoTicker = () => {
  return (
    <div className="bg-black">
      <h2 className="text-base text-center text-neutral-400 pt-44">
        Empresas que confiam em nosso trabalho
      </h2>
      <div className="text-white py-[300px] sm:py-88 bg-gradient-to-b from-black via-zinc-700 to-black">
        <div className="container">
          <div className="py-300">
            <LogoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};