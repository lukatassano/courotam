import { Home } from "../sections/Home";
import { LogoTicker } from "../sections/LogoTicker";
import { About } from "../sections/About";
import { Footer } from "../sections/Footer";
import { Timeline } from "../sections/Timeline";

export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
        <Home />
        <About/>
        <Timeline/>
        <LogoTicker />
        <Footer />
      </div>
    </>
  );
}