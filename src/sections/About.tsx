import { FlipWords } from "../components/FlipWords";
import { LayoutGridDemo } from "../components/LayoutgridDemo";

export const About = () => {
  return (
    <div
      id="about"
      className="containerLarge text-white py-20 sm:py-40 bg-gradient-to-t from-black to-black"
    >
      <div>
        <div className="w-full">
          <div className="container mx-auto px-4 block lg:hidden">
            <h2 className="flex text-center justify-center py-10 font-bold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
              Soluções em estofados que elevam o padrão do seu negócio ou casa
            </h2>
          </div>

          <div className="containerMedium mx-auto px-4 hidden lg:block">
            <div className="w-full text-center">
              <div className="block ml-4 xl:ml-80">
                <h2 className="flex text-center py-10 font-bold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
                  Soluções em estofados que elevam o
                  <div className="flex align-baseline justify-center">
                    <FlipWords
                      words={["padrão do seu negócio", "padrão da sua casa"]}
                      duration={2000}
                      className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                    />
                  </div>
                </h2>
              </div>
            </div>
          </div>
          <LayoutGridDemo />
        </div>
      </div>
    </div>
  );
};
