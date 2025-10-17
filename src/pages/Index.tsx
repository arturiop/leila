import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { CTAFooter } from "@/components/CTAFooter";
import { DemoModal } from "@/components/DemoModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onOpenDemo={() => setDemoOpen(true)} />
      <About />
      <HowItWorks />
      <CTAFooter onOpenDemo={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Index;
