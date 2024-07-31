import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Author = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <main className="h-full flex flex-col ">
      <div className=" flex flex-col items-center bg-gray-100 pt-16 gap-5">
        <h1
          className="text-2xl font-public"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          My Story
        </h1>
        <h1
          className="text-6xl font-kalnia text-[#61ce70] px-2 text-center"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
          }}
        >
          About the Author
        </h1>
        <div
          className="px-16 sm:h-screen md:w-[2/4] md:h-[500px] lg:h-screen"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-250px)",
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img className="h-full " src="/banner-pic-1365x2048.png" alt="" />
        </div>
      </div>

      <div className=" bg-gray-100 pt-5 lg:pt-10 pb-20">
        <p
          className="font-asap text-xl text-justify px-7 tracking-wide leading-loose bg-gray-100 sm:px-16 sm:leading-[2] md:px-36 lg:leading-[3] lg:px-44 xl:px-64"
          style={{
            transform: isInView ? "none" : "translateY(250px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.20, 0.35, 0.35, 1) 0.5s",
          }}
        >
          <strong>Paula Vail RMT</strong> is a Published Award Winning Author,
          Radio/TV Show Host, Reiki Master/Teacher in Usui Reiki and the
          Owner/Founder of Wellness Inspired.com. Before she started her journey
          of Reiki over 14 years ago, she owned and operated a busy & popular
          Italian restaurant. Paula has a sincere passion to serve, inspire, and
          support others. Because of this, she has become incredibly successful.
          She is the host of the show “Elevating Your life with Paula Vail”, an
          inspirational speaker, and author of the award-winning book “Why am I
          so Happy” by Paula Neva Vail. Her “Why am I so Happy” book won the
          Gold Medal in Self-Help books by the Global Book Awards Organization
          in 2022. She is also a co-author of the book “America’s Leading Ladies
          who positively Impact our World” along with Oprah Winfrey, Melinda
          Gates, and others. Paula has recently been chosen as the Executive
          Spotlight in the MARQUIS WHO’S WHO of Professional Women of Influence
          2022. Paula is also the co-author of the book “Beyond Wellness” a
          Reiki training manual. Paula was featured in New York City Times
          Square by the Continental Who’s Who organization as a Pinnacle
          Professional and has been featured in, and on the cover of multiple
          magazines. This includes a Q & A in Publisher’s Weekly, The New York
          Daily, Speak Magazine, and two times in the “Women of Distinction
          Magazine” for her achievements in business and life. She is a featured
          by The National Digest in 2022. She has also been, and continues to be
          interviewed by amazing hosts around the country such as Jim Masters
          and James Miller to name a few. She was recently awarded “Empowered
          Woman of 2019” and “Top Female Professional of 2018” by “IOATP” The
          International Association of Top Professionals. Paula has recently
          been featured in Publisher’s Weekly, Thrive Global, America Daily
          Post, One World Herald, California Herald, CUTV News, Speak Magazine
          and many others.
        </p>
      </div>
    </main>
  );
};

export default Author;
