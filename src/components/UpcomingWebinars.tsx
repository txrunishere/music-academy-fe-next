import { TopGradient } from "@/components/ui/Buttons";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const featuredWebinars: Array<{
  title: string;
  description: string;
  link: string;
}> = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    link: "/",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    link: "/",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    link: "/",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    link: "/",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    link: "/",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    link: "/",
  },
];

export default function UpcomingWebinars() {
  return (
    <div className="p-12">
      <div className="max-w-7xl mx-auto px-4 lg-px-6 sm-px-8">
        <div className="text-center">
          <h2 className="text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 tracking-wide uppercase font-bold to-cyan-500">
            Upcoming Webinars
          </h2>
          <p className="text-2xl md:text-4xl font-extrabold leading-10 tracking-wide">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars} />
        </div>
        <div className="mt-10 flex justify-center">
          <TopGradient>View All Webinars</TopGradient>
        </div>
      </div>
    </div>
  );
}
