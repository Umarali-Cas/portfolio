import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/common/components/Hero/Hero"));
const AboutMe = dynamic(() => import("@/common/components/AboutMe/AboutMe"));
const Skills = dynamic(() => import("@/common/components/Skills/Skills"));
const Works = dynamic(() => import("@/common/components/Works/Works"));
const Footer = dynamic(() => import("@/common/components/Footer/Footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </main>
  );
}
