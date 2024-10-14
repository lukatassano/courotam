import { FlipWords } from "../components/FlipWords";
import { LayoutGridDemo } from "../components/LayoutgridDemo";

export const About = () => {
  return (
    <div
      id="about"
      className="containerLarge flex flex-col items-center justify-center w-full text-white py-20 sm:py-40 bg-gradient-to-t from-black to-black"
    >
      <div className="w-full flex justify-center items-center">
        <div>
          <div className="container mx-auto px-4 block lg:hidden">
            <h2 className=" py-10 flex text-center font-bold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
              Soluções em estofados que elevam o padrão do seu negócio ou casa
            </h2>
          </div>
          <div className="containerMedium hidden lg:flex flex-col items-center">
            <div className="">
              <h2 className="font-bold flex justify-center items-center text-2xl sm:text-3xl md:text-4xl tracking-tighter">
                Soluções em estofados que elevam o{" "}
                <div className="inline-block w-96 xl:w-[400px] whitespace-nowrap">
                  <FlipWords
                    words={["padrão do seu negócio", "padrão da sua casa"]}
                    duration={2000}
                    className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                  />
                </div>
              </h2>
            </div>

            <div className="w-full mt-10"></div>
          </div>
          <LayoutGridDemo />
        </div>
      </div>
    </div>
  );
};
