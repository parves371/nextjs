"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Advanced Music Production Techniques",
    description:
      "Master advanced music production techniques and create professional-quality music.",
    slug: "advanced-music-production-techniques",
    isFeatured: true,
  },
  {
    title: "Music Business Essentials",
    description:
      "Learn the ins and outs of the music industry and how to build a successful music career.",
    slug: "music-business-essentials",
    isFeatured: true,
  },
  {
    title: "World Music Exploration",
    description:
      "Discover the diverse world of music traditions and explore different cultural styles.",
    slug: "world-music-exploration",
    isFeatured: true,
  },
  {
    title: "Music Theory for Beginners",
    description:
      "A friendly introduction to music theory for those starting their musical journey.",
    slug: "music-theory-for-beginners",
    isFeatured: true,
  },
  {
    title: "Improvisation Techniques",
    description: "Learn to improvise and play creatively on your instrument.",
    slug: "improvisation-techniques",
    isFeatured: true,
  },
];
function OpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>

          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpcomingWebinars;
