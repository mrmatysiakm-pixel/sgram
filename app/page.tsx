import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyUsSection from "@/components/why-us-section"
import TrustSection from "@/components/trust-section"
import RecentlyRegistered from "@/components/recently-registered"
import ProfileSlider from "@/components/profile-slider"
import CitySection from "@/components/city-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <RecentlyRegistered />
      <TrustSection />
      <ProfileSlider />
      <CitySection />
      <Footer />
    </main>
  )
}
