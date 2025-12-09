import Background from "@/components/background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Doctor from "@/components/doctor";
import Plan from "@/components/plan";




export default function Home() {

  return (
    <div className="mx-30">
      <Background />
      <Header />
      <Hero />
      <Doctor />
      <Plan />
    </div>
  );
}
