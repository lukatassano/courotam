import { ParallaxScroll } from "./ParallaxScroll";
import { FeaturesImages } from "./FeaturesData";
import { FlipWords } from "./FlipWords";
import { LayoutGridDemo } from "./LayoutgridDemo";

export const Features = () => {
  return (
    <div className="text-white py-20 sm:py-40 bg-gradient-to-t from-black to-black">
      <div className="container mx-auto px-4">
        <h2 className="flex text-center justify-center py-10 font-bold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
          Soluções em estofados que elevam o padrão do seu
        <div className="flex align-baseline justify-center">
          <FlipWords
            words={["negócio", "casa"]}
            duration={2000}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
          />
        </div>
        </h2>
        <LayoutGridDemo/>
      </div>
    </div>
  );
};