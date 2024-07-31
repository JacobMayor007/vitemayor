import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { motion, useInView } from "framer-motion";

const Reviews = ({ url }) => {
  const [show, setShow] = useState(false);
  const [visibleComment, setVisibleComment] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      setClosing(false);
    }, 1200);
  };

  const toggleComment = (commentKey) => {
    setVisibleComment((prev) => (prev === commentKey ? null : commentKey));
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="review">
      <div className="h-full flex flex-col items-center pt-20 pb-4 gap-2 xl:h-screen">
        <div
          className="h-52 w-[90%] z-[1] sm:h-64 md:h-96 lg:h-[30rem] lg:w-[65%] xl:w-[70%] 2xl:w-[60%]"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <ReactPlayer
            url={url}
            controls
            height="100%"
            width="100%"
            volume={1}
            light={false}
          />
        </div>

        {show ? (
          <motion.div
            className={`bg-gray-400 flex-grow w-[90%] z-[1] rounded-3xl overflow-scroll relative
            md:flex-grow-0 md:overflow-visible lg:w-[70%] lg:overflow-hidden xl:hidden ${
              closing ? "reverse" : ""
            }`}
          >
            <div className="flex flex-col p-2 gap-3 relative lg:p-10">
              <div
                className={`h-12 flex justify-between bg-slate-500 rounded-lg px-5 items-center sticky top-0 z-10 `}
              >
                <h1 className="text-xl text-white font-kalnia">Reviews</h1>
                <FontAwesomeIcon
                  className="cursor-pointer text-white"
                  icon={faXmark}
                  onClick={() => handleClose()}
                />
              </div>

              <motion.div
                className="flex flex-row gap-2"
                initial={{ opacity: 0, x: closing ? 250 : -250 }}
                animate={{ opacity: closing ? 0 : 1, x: closing ? -250 : 0 }}
                transition={{
                  delay: closing ? 0.3 : 0.3,
                  duration: 1.5,
                  type: "spring",
                  stifness: 220,
                }}
              >
                <img
                  className="h-12 rounded-full"
                  src="/person-1.png"
                  alt="Randi D. Ward Image"
                />
                <div className="flex flex-col gap-1 bg-gray-600 p-2 rounded-lg w-full lg:w-50%">
                  <h1 className="text-white">Randi D. Ward</h1>
                  <p className="text-white text-sm tracking-tighter [word-spacing:-0.8px] leading-[15px] text-justify">
                    I met Paula two years at our IAOTP Awards Gala in NYC in
                    December 2017. I was drawn to her bubbly and charming&nbsp;
                    {visibleComment === "comment1" ? (
                      <span className="text-white text-sm tracking-tighter [word-spacing:-0.8px] leading-[15px] text-justify">
                        personality. We have now been friends for almost two
                        years. My initial impression of her has not changed. She
                        truly exudes happiness and smiles from her heart. Her
                        book tells how she achieved this state of joyful bliss
                        and how she maintains it even when life “throws curve
                        balls” at her. I consider myself a happy person as well.
                        Her lovely book with helpful strategies on how to
                        embrace your life and find happiness in even the
                        smallest of life’s moments and in the simplest things
                        has reinforced the importance of looking at your life in
                        a positive way and being grateful for the many wonderful
                        gifts of life. As she states several times throughout
                        her book, your happiness depends upon you: “You are the
                        magic that creates your beautiful and unique life.” I
                        totally agree with her perfect quote.&nbsp;
                        <span
                          className="tracking-wide cursor-pointer hover:underline"
                          onClick={() => toggleComment("comment1")}
                        >
                          See less
                        </span>
                      </span>
                    ) : (
                      <span
                        className="tracking-[0.2rem] cursor-pointer hover:underline"
                        onClick={() => toggleComment("comment1")}
                      >
                        ....
                      </span>
                    )}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-row gap-2"
                initial={{ opacity: 0, x: closing ? 250 : -250 }}
                animate={{ opacity: closing ? 0 : 1, x: closing ? -250 : 0 }}
                transition={{
                  delay: closing ? 0.5 : 0.5,
                  duration: 1.5,
                  type: "spring",
                  stifness: 220,
                }}
              >
                <img
                  className="h-12 rounded-full"
                  src="/person-2.png"
                  alt="C Adair Image"
                />
                <div className="flex flex-col bg-gray-600 py-3 px-4 gap-2 rounded-lg w-full">
                  <h1 className="text-white">C Adair</h1>
                  <p className="text-white leading-[14px] text-sm text-justify tracking-tighter">
                    {" "}
                    Hi I just finished reading this amazing book. Her life
                    lessons she has taught me to be happy is incorporated in my
                    daily life &nbsp;
                    {visibleComment === "comment2" ? (
                      <span>
                        I have got to know Paula recently and her zest for life
                        has made me truly a happier human being. Everybody must
                        read. &nbsp;
                        <span
                          className="tracking-wide cursor-pointer hover:underline"
                          onClick={() => toggleComment("comment2")}
                        >
                          See less
                        </span>
                      </span>
                    ) : (
                      <span
                        className="tracking-[0.2rem] cursor-pointer hover:underline"
                        onClick={() => toggleComment("comment2")}
                      >
                        ....
                      </span>
                    )}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-row gap-2"
                initial={{ opacity: 0, x: closing ? 250 : -250 }}
                animate={{ opacity: closing ? 0 : 1, x: closing ? -250 : 0 }}
                transition={{
                  delay: closing ? 0.7 : 0.7,
                  duration: 1.5,
                  type: "spring",
                  stifness: 220,
                }}
              >
                <img
                  className="h-12 rounded-full"
                  src="/person-3.png"
                  alt="Elisa"
                />
                <div className="flex flex-col gap-2 bg-gray-600 py-3 px-4 rounded-lg  w-full">
                  <h1 className="text-white">Elisa</h1>
                  <p className="text-white leading-[14px] text-sm text-justify tracking-tighter">
                    I picked up this book when I was going through an incredibly
                    difficult time in my life.Hopelessness had reared it's
                    ugly&nbsp;
                    {visibleComment === "comment3" ? (
                      <span className="text-white leading-[14px] text-sm text-justify tracking-tighter">
                        {" "}
                        head despite trying so hard to remain opstimistic about
                        life. I read this book in a few hours, highlighting
                        quotes & journaling while reading it. It gave me such
                        hope that I can truly create the life I want & say yes
                        to my happiness. This is a short, easy, but beautiful
                        read that will make your heart smile!!
                        <br />
                        <span
                          className=" hover:underline cursor-pointer"
                          onClick={() => toggleComment("comment3")}
                        >
                          See less
                        </span>
                      </span>
                    ) : (
                      <span
                        className="tracking-[0.2rem] cursor-pointer hover:underline"
                        onClick={() => toggleComment("comment3")}
                      >
                        ....
                      </span>
                    )}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-row gap-2"
                initial={{ opacity: 0, x: closing ? 250 : -250 }}
                animate={{ opacity: closing ? 0 : 1, x: closing ? -250 : 0 }}
                transition={{
                  delay: closing ? 0.9 : 0.9,
                  duration: 1.5,
                  type: "spring",
                  stifness: 220,
                }}
              >
                <div className="h-12 p-2 bg-gray-600 rounded-full">
                  <FontAwesomeIcon
                    className="h-full text-white"
                    icon={faUser}
                  />
                </div>
                <div className="flex flex-col gap-2 bg-slate-600 py-3 px-4 rounded-lg  w-full">
                  <h1 className="text-white">Amazon Customer</h1>
                  <p className="text-white text-sm [word-spacing:-0.9px] leading-[14px] text-justify tracking-tighter">
                    I happen to know Paul and in reading her book I hear her in
                    many of her writings. She &nbsp;
                    {visibleComment === "comment4" ? (
                      <span className="text-white text-sm leading-[14px] text-justify tracking-tighter">
                        {" "}
                        is one of the Happiest Humans I know and I’ve know Paula
                        for 20yrs and she has made me to be a happier person by
                        just being around her 💛
                        <span
                          className=" cursor-pointer hover:underline"
                          onClick={() => toggleComment("comment4")}
                        >
                          See less
                        </span>
                      </span>
                    ) : (
                      <span
                        className="tracking-[0.2rem] cursor-pointer hover:underline"
                        onClick={() => toggleComment("comment4")}
                      >
                        ...
                      </span>
                    )}
                  </p>
                </div>
              </motion.div>

              <div className="h-12 w-full flex flex-row gap-2">
                <div className="h-12 w-12"></div>
                <div className="w-full ">
                  <a
                    className="text-white flex w-full justify-center items-center h-full hover:bg-gray-300 hover:text-black cursor-pointer rounded-lg"
                    href="https://www.amazon.ca/Why-Am-So-Happy-Success/product-reviews/B08DC9ZSGM/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews"
                    target="_blank"
                  >
                    Show More Reviews ...
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className=" bg-gray-600 h-24 w-[90%] rounded-2xl p-4 z-[1] cursor-pointer lg:w-[70%] lg:p-5 lg:hidden"
            onClick={() => setShow(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 2,
              type: "spring",
              stifness: 220,
            }}
          >
            <p className="text-slate-100 text-base font-public mb-2">
              Show Reviews
            </p>
            <div className="flex flex-row h-2/4 gap-1">
              <div className="h-full w-8 bg-gray-400 rounded-full lg:w-24 md:w-8"></div>
              <div className="w-[85%] bg-gray-500 rounded-xl text-white pl-4 flex items-center">
                Show Reviews...
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Reviews;
