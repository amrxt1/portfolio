import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutMe";
import ContactLinks from "@/components/home/ContactLinks";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="space-y-64">
      <Hero />
      <AboutMe />
      <ContactLinks />
      <Footer />
    </main>
  );
}
