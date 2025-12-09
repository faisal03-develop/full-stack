import Background from "@/components/background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Doctor from "@/components/doctor";
import TreatmentPlan from "@/components/treatmentplan";
import SuccessStories from "@/components/successstories";
import Footer from "@/components/footer";


export default function Home() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-20">
      <Background />
      <Header />
      <Hero />
      <Doctor />
      <TreatmentPlan />
      <SuccessStories />
      <Footer />
      
    </div>
    </div>
  );
}
