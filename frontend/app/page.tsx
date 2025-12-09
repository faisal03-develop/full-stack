import Background from "@/components/background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Doctor from "@/components/doctor";
import TreatmentPlan from "@/components/treatmentplan";
import SuccessStories from "@/components/successstories";



export default function Home() {

  return (
    <div className="mx-30">
      <Background />
      <Header />
      <Hero />
      <Doctor />
      <TreatmentPlan />
      <SuccessStories />

      
    </div>
  );
}
