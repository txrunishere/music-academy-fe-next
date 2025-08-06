import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const musicSchoolTestimonials: Array<{
  quote: string;
  name: string;
  title: string;
}> = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full h-[40rem] dark:bg-black relative flex items-center justify-center flex-col">
      <div className="absolute inset-0 [background-size:30px_30px] md:[background-size:50px_50px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="z-20">
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-8">
          Hear Our Harmony: Voices of Success
        </h2>
      </div>
      <div className="flex z-20 justify-center w-full px-4 overflow-hidden lg:px-8 sm:px-6">
        <InfiniteMovingCards
          className=""
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
