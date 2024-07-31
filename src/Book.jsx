import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Book() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });
  const isInView7 = useInView(ref7, { once: true });
  const isInView8 = useInView(ref8, { once: true });

  return (
    <main className="my-16 xl:h-full">
      <div className="my-10 flex flex-col items-center gap-5">
        <motion.h1
          ref={ref1}
          className="text-3xl font-public 2xl:text-5xl"
          style={{
            transform: isInView1 ? "none" : "translateY(-200px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          About The Book
        </motion.h1>
        <div className="flex flex-row items-center">
          <img
            className="hidden mr-5 my-5 md:block h-20"
            src="/5star-review-seal.png"
            alt="5 star silver award"
            ref={ref2}
            style={{
              transform: isInView2 ? "none" : "translateX(-200px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.65, 0.65, 1.5) 1s",
            }}
          />
          <img
            className="hidden ml-5 my-5 h-24 leading-loose tracking-wide lg:block"
            src="/goldpngaward.png"
            alt=""
            ref={ref3}
            style={{
              transform: isInView3 ? "none" : "translateX(200px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.65, 0.65, 1.5) 1s",
            }}
          />
        </div>
        <h1
          className="uppercase text-5xl text-center font-kalnia text-green-400 px-5 2xl:text-7xl"
          ref={ref4}
          style={{
            transform: isInView4 ? "none" : "translateY(-250px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.65, 0.65, 1.5) 0.5s",
          }}
        >
          Why am i so happy
        </h1>
      </div>
      <div className="px-8 md:px-44 lg:px-64 xl:px-[350px] 2xl:py-5 2xl:h-full">
        <img
          className="float-start w-[150px] mr-7 2xl:w-[250px]"
          src="/Why-Am-I-So-Happy-Book.png"
          alt="Why Am I So Happy Book"
          ref={ref5}
          style={{
            transform: isInView5 ? "none" : "translateX(200px)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.65, 0.65, 1.5) 0.5s",
          }}
        />
        <p
          className=" text-black text-justify font-asap tracking-tighter leading-7 sm:tracking-normal lg:leading-[2.5] xl:leading-[3] 2xl:text-2xl 2xl:leading-[2.5] "
          ref={ref8}
          style={{
            opacity: isInView8 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.65, 0.65, 1.5) 0.5s",
          }}
        >
          In this groundbreaking book, Paula Vail, a nationally recognized
          leader in personal empowerment, shares her own life’s challenges and
          accomplishments with the readers, and the critical tools you need to
          open the door to the incredible happiness that resides in each one of
          us – a joy that is the center of our being.&nbsp;
          <img
            className="ml-5 my-5 float-right w-[200px] h-[200px] lg:hidden"
            src="/goldpngaward.png"
            alt=""
            ref={ref6}
            style={{
              transform: isInView6 ? "none" : "translateX(-200px)",
              opacity: isInView6 ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.65, 0.65, 1.5) 0.5s",
            }}
          />
          Drawing from her research and personal life experiences, Vail weaves
          an inspirational and practical account of how we can begin to make
          changes in our lives through better choices and new attitudes. Why Am
          I So Happy? is an excellent guidebook with tools to find a happier
          life. A must-read for everyone trying to gain&nbsp;
          <img
            className="float-left mr-5 my-5 md:hidden"
            src="/5star-review-seal.png"
            alt="5 star silver award"
            ref={ref7}
            style={{
              transform: isInView7 ? "none" : "translateX(200px)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.65, 0.65, 1.5) 0.5s",
            }}
          />
          happiness as we find ourselves with increasing workloads, lots more
          stress, and negativity all around us, Why Am I So Happy?, isn’t only
          about how to become happier at work. It’s about how to reap the
          benefits of a happier and more positive mind-set to achieve the joy,
          gratefulness, light, love and success into our lives. You will get
          insights and tools that you can use in your own personal journey to
          find happiness and empowerment.
        </p>
      </div>
    </main>
  );
}

export default Book;
