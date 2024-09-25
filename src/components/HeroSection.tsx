import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-screen w-full rounded-md flex flex-col items-start justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          master of the art music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Music is an art form and cultural expression that uses sound as its
          medium. It consists of elements such as melody, harmony, rhythm, and
          dynamics, combining to create compositions that can evoke emotions,
          tell stories, or communicate ideas. Music can be vocal, instrumental,
          or a blend of both, and it exists in a wide variety of genres, from
          classical and jazz to rock, pop, and electronic. It serves as a
          universal language, capable of bridging cultural and linguistic
          divides, and plays a significant role in rituals, entertainment, and
          personal expression across all societies.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            {" "}
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
