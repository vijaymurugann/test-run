import Bento from "@/components/Bento";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Companies />
      <Bento />
      <Features />
    </main>
  );
}
