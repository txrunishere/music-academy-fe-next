import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WavyBackground } from "@/components/ui/wavy-background";

const people: Array<{
  id: number;
  name: string;
  designation: string;
  image: string;
}> = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export default function InstructorsSection() {
  return (
    <div className="relative flex justify-center items-center h-[40rem]">
      <WavyBackground className="w-full h-full flex flex-col items-center justify-center">
        <div className="mx-2">
          <h1 className="md:text-7xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
            Meet Our Instructors
          </h1>
          <p className="text-center mt-6 text-base">
            Discover the talented professionals who will guide your musical
            journey
          </p>
        </div>
        <div className="flex mt-4 justify-center">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
