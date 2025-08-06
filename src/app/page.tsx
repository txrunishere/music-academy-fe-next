import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import InstructorsSection from "@/components/InstructorsSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourses />
      <Testimonial />
      <UpcomingWebinars />
      <InstructorsSection />
    </main>
  );
}
