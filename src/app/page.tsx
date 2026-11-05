import Experience from "../components/ExperienceBlock/Experience";
import Future from "../components/Future/Future";
import HeroBanner from "../components/Hero/HeroBanner";
import WhySchift from "../components/WhyShift/WhySchift";

export default async function Home() {
  return (
    <div>
      <HeroBanner />
      <Future />
      <WhySchift />
      <Experience />
    </div>
  );
}
