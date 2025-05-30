import Bento from "@/components/Bento";
import Clients from "@/components/Clients";
import Companies from "@/components/Companies";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Companies />
      <Bento />
      <Features />
      <Clients />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
