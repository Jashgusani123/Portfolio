import Hero from "@/Components/Main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col h-[850px] w-full gap-20">
        <Hero />
      </div>
    </main>
  );
}
