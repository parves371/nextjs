"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const musicCourses = [
  {
    title: "Introduction to Guitar Basics",
    description:
      "This course covers fundamental guitar techniques such as chords, scales, and basic strumming patterns. Ideal for beginners building a strong foundation.",
  },
  {
    title: "Piano for Beginners",
    description:
      "Learn the essentials of piano playing, from reading music to playing simple melodies and scales. A great starting point for new piano learners.",
  },
  {
    title: "Mastering Vocal Techniques",
    description:
      "Develop your singing voice with expert guidance on breathing, pitch control, and vocal exercises designed to improve your range and tone.",
  },
  {
    title: "Drumming Fundamentals",
    description:
      "Explore the basics of drumming, including rhythm patterns, hand techniques, and drum kit setup, perfect for aspiring drummers.",
  },
  {
    title: "Music Theory 101",
    description:
      "Understand the building blocks of music, including scales, chords, and harmony. This course is essential for anyone wanting to deepen their music knowledge.",
  },
  {
    title: "Advanced Guitar Solo Techniques",
    description:
      "Enhance your guitar skills with advanced solo techniques, such as string bending, tapping, and sweep picking. Ideal for experienced guitarists.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicCourses} />
    </div>
  );
}

export default WhyChooseUs;
