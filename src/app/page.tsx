import { Hero } from "../components/Hero";
import { LogoTicker } from "../components/LogoTicker";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Timeline } from "../components/Timeline";
import { timelineData } from "../components/TimelineData";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
        <Hero />
        <Features/>
        <Timeline data={timelineData} />
        <LogoTicker />
        <Footer />
      </div>
    </>
  );
}