import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";


export const metadata: Metadata = {
  title: "Akhil System pvt limited",
  description: "This is Home for Akhil System pvt limited",
};

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Feature />
      <FeaturesTab />
    </main>
  );
}
