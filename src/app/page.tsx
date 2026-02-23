import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diagnostico from "@/components/Diagnostico";
import CuboInterativo from "@/components/CuboInterativo";
import Tecnologias from "@/components/Tecnologias";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Diagnostico />
      <CuboInterativo />
      <Tecnologias />
      <CTA />
      <Footer />
    </>
  );
}
