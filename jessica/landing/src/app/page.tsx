import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ClinicProcedures from "@/components/ClinicProcedures";
import ConsultCards from "@/components/ConsultCards";
import ProcedureGrid from "@/components/ProcedureGrid";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import AboutSplit from "@/components/AboutSplit";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <Highlights />
        <ClinicProcedures />
        <ConsultCards />
        <div id="procedimentos">
          <ProcedureGrid />
        </div>
        <Results />
        <Testimonials />
        <div id="sobre">
          <AboutSplit />
        </div>
        <Timeline />
        <div id="contato">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
