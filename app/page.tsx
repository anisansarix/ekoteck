import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Products from "./components/Products";
import Sustainability from "./components/Sustainability";
import TrustIndicators from "./components/TrustIndicators";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home(){
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustIndicators />
      <About />
      <Products />
      <WhyChooseUs />
      <Sustainability />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}