import { Separator } from "@/components/ui/separator";
import { About, Contact, Hero, Links } from "@/views/home";

export default function Home() {
  return (
    <div className="max-w-5xl mt-4 mx-auto relative">
      <Hero />

      <Links />

      <Separator className="mt-6" />

      <About />

      <Contact />
    </div>
  );
}
