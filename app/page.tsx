import Hero from "@/Components/Main/Hero";
import Project from "@/Components/Main/Project";
import Skills from "@/Components/Main/Skills";
export default function Home() {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col h-full w-full gap-20">
        <Hero />
        <Skills />
        <Project />
      </div>
    </main>
  );
}
