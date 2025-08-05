import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className="relative h-auto md:h-[40rem] w-full overflow-hidden rounded-md flex flex-col justify-center items-center mx-auto py-10 md:py-0">
      <Spotlight height={800} />
      <div className="relative p-4 z-10 w-full text-center">
        <h1 className="mt-25 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of the Music
        </h1>
        <p className="my-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-6">
          <Link href={"/courses"}>
            <Button className="cursor-pointer">Explore</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
