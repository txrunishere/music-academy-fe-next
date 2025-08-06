import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { TopGradient, SimpleLiftUpButton } from "./ui/Buttons";
import courses from "@/data/courses.json";

export default function FeaturedCourses() {
  const featuredCourses = courses.courses.filter((course) => course.isFeatured);

  return (
    <section className="bg-gradient-to-b from-gray-900 py-12">
      <div>
        <div className="text-center">
          <h2 className="text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 tracking-wide uppercase font-bold to-cyan-500">
            Featured Courses
          </h2>
          <p className="text-2xl md:text-4xl font-extrabold leading-10 tracking-wide">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="md:max-w-2/3 md:mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-6 sm:grid-cols-2 justify-center gap-8">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[21px] h-full max-w-sm bg-white dark:bg-zinc-900">
                <div className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-center text-[18px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-300">
                      {course.title}
                    </p>
                    <p className="text-center text-neutral-400">
                      {course.description}
                    </p>
                  </div>
                  <div className="text-center mt-2">
                    <Link href={`/courses/${course.slug}`}>
                      <SimpleLiftUpButton>
                        Learn More
                      </SimpleLiftUpButton>
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link href={"/courses"}>
          <TopGradient>View all Courses</TopGradient>
        </Link>
      </div>
    </section>
  );
}
