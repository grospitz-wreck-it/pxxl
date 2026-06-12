import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProject from "@/components/featured-project";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProject />
      <About />
      <Footer />
    </main>
  );
}