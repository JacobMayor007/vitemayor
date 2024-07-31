import { useState, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Book from "./Book";
import Author from "./Author";
import Reviews from "./Reviews";
import Contact from "./Contact";
import { Carousel } from "antd";
import { motion, transform, useInView } from "framer-motion";

function App() {
  const [show, setShow] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const minNav = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", minNav);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  const blog1 = useRef(null);
  const blog2 = useRef(null);
  const blog3 = useRef(null);
  const blog4 = useRef(null);
  const blog5 = useRef(null);
  const blog6 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });

  const isCard1 = useInView(card1, { once: true });
  const isCard2 = useInView(card2, { once: true });
  const isCard3 = useInView(card3, { once: true });
  const isCard4 = useInView(card4, { once: true });

  const isBlog1 = useInView(blog1, { once: true });
  const isBlog2 = useInView(blog2, { once: true });
  const isBlog3 = useInView(blog3, { once: true });
  const isBlog4 = useInView(blog4, { once: true });
  const isBlog5 = useInView(blog5, { once: true });
  const isBlog6 = useInView(blog6, { once: true });

  return (
    <>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className={
          navbar
            ? `h-16 bg-white flex flex-row w-full items-center justify-between fixed px-5 top-0 md:px-16 z-[2]`
            : `h-[80px] flex flex-row w-full items-center justify-between px-5 fixed top-0 bg-white 2xl:h-32`
        }
      >
        <div>
          <img
            className="h-9 sm:h-12 md:h-14 lg:h-[45px] 2xl:h-20"
            src="/why-am-i-so-happy-logo.png"
            alt=""
          />
        </div>

        <nav className="hidden lg:flex lg:gap-12 xl:gap-16 lg:justify-center w-fit xl:-ml-16 xl:justify-normal lg:-ml-0">
          <a
            className={`font-kalnia cursor-pointer hover:text-green-400 2xl:text-2xl`}
            href="#"
          >
            Home
          </a>
          <a
            className={`font-kalnia cursor-pointer hover:text-green-400 2xl:text-2xl`}
            href="#Book"
          >
            Book
          </a>
          <a
            className={` font-kalnia cursor-pointer hover:text-green-400 2xl:text-2xl`}
            href="#Author"
          >
            Author
          </a>
          <a
            className={` font-kalnia cursor-pointer hover:text-green-400 2xl:text-2xl`}
            href="#Reviews"
          >
            Reviews
          </a>
          <a
            className={` font-kalnia cursor-pointer hover:text-green-400 2xl:text-2xl`}
            href="#Contacts"
          >
            Contacts
          </a>
        </nav>

        <div className="lg:hidden">
          <FontAwesomeIcon
            className={`cursor-pointer hover:text-green-400`}
            icon={faBars}
            height={20}
            onClick={() => setShow(true)}
          />
        </div>

        <a
          className={`hidden lg:flex lg:flex-row lg:items-center bg-green-700 hover:bg-green-600 h-12 w-44 justify-center rounded-xl text-white gap-2 font-sans 2xl:h-16 2xl:w-64 2xl:text-2xl`}
          href="https://www.amazon.ca/Why-Am-So-Happy-Success/dp/B08DC9ZSGM/ref=sr_1_1?crid=JC4PERIFJVD5&dib=eyJ2IjoiMSJ9.846heMXy_2tkTyyBCJP4AnfqSaOlAitAzs5vykWXhxDLJp7RNKIPFjWQuaW-lMxy4nGKnP49ik0EMObb2YOhzp0DEsEM9yA38ZKTXtrT2kZpi2AllgeSDwj3ccNlA_N6pM61UDLPR0dpuv35iFDWYjz1xsFk4xqGJIFI4_Cp8AIhZfrnfBrPGkDP1QmIWVPkYvsaiw-nKRITTbj_F7nrq3vf6uVyzu0qFX-ZxRBbLsqGRVB6JQXltHEuZ6iSLIZBJVjr3CiefxGIV3qkSx8KAEk76KtPxI-wh2osuf4_5LA.b8Jz56-WiI7GopgInbCGfo6S7J_7D8C6_6z-UxNWqCw&dib_tag=se&keywords=why+am+I+so+happy&qid=1718647526&sprefix=why+am+i+so+hap%2Caps%2C722&sr=8-1"
          target="_blank"
        >
          <div className="hidden lg:block lg:h-7 2xl:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
            </svg>
          </div>
          Buy on Amazon
        </a>
      </motion.div>

      {show ? (
        <nav className="flex flex-col fixed top-0 right-0 w-28 h-screen bg-white items-center py-10 gap-5 z-[2] xl:hidden">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-green-400 xl:hidden"
            icon={faXmark}
            height={20}
            onClick={() => setShow(false)}
          />
          <a
            className={` cursor-pointer hover:text-green-400`}
            href="#"
            onClick={() => setShow(false)}
          >
            Home
          </a>
          <a
            className={` cursor-pointer hover:text-green-400`}
            href="#Book"
            onClick={() => setShow(false)}
          >
            Book
          </a>
          <a
            className={` cursor-pointer hover:text-green-400`}
            href="#Author"
            onClick={() => setShow(false)}
          >
            Author
          </a>
          <a
            className={` cursor-pointer hover:text-green-400`}
            href="#Reviews"
            onClick={() => setShow(false)}
          >
            Reviews
          </a>
          <a
            className={` cursor-pointer hover:text-green-400`}
            href="#Contacts"
            onClick={() => setShow(false)}
          >
            Contacts
          </a>
        </nav>
      ) : null}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="bg-[url('/GLENN-EXTEND-1.jpg')] h-screen bg-cover bg-center"
      >
        <div className="h-full flex flex-row mt-20 xl:mt-[80px] bg-gradient-to-l from-[rgba(0,128,0,0.5)]">
          <div className="hidden md:block md:w-1/3 lg:w-1/2"></div>
          <div className="flex flex-col justify-center px-5 gap-10 md:w-2/3 md:pl-24 md:pr-16 lg:w-1/2 lg:pl-0 lg:pr-32 xl:pr-32 xl:gap-0">
            <motion.h1
              initial={{ x: 2050 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className={`font-kalnia text-5xl text-white text-nowrap sm:pl-36 md:text-7xl md:mb-5 md:pl-0 lg:mb-5 xl:mb-16`}
              style={{ fontWeight: "500" }}
            >
              Paula Vail
            </motion.h1>
            <motion.p
              initial={{ x: 2050 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-2xl text-white text-justify leading-[2] font-sans sm:leading-[2] sm:pl-36 md:text-xl md:leading-[2] md:pl-0 lg:leading-[3] xl:leading-[2.5] xl:text-2xl"
            >
              Paula Vail, RMT, is a distinguished and award-winning author,
              acclaimed radio and TV show host, and a revered Reiki
              Master/Teacher specializing in Usui Reiki. She is also the author
              of the uplifting and insightful book “Why Am I So Happy?”
            </motion.p>

            <motion.a
              initial={{ x: 2050 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.4, duration: 1.1 }}
              className="flex items-center justify-center cursor-pointer h-12 w-36 text-white rounded-xl bg-green-700 hover:bg-green-600 sm:ml-36 md:ml-0 xl:my-10"
              href="#Author"
            >
              Know More
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div id="Book">
        <Book />
      </div>
      <div id="Author">
        <Author />
      </div>
      <div id="Reviews" className="relative">
        <Reviews
          className="z-[1]"
          url="https://youtu.be/JppJCuXddA4?si=LLC5omvmYDp1Ujcd"
        />
      </div>

      <div className="hidden lg:flex justify-center -mt-32 2xl:-mt-96 bg-slate-50 py-20">
        <Carousel
          arrows
          draggable
          dots={false}
          infinite={false}
          speed={1000}
          className="shutter lg:w-[100vw] xl:w-[85vw] 2xl:h-[700px] cursor-pointer"
        >
          <div className="2xl:h-[580px] w-[85vw] xl:w-[95vw] 2xl:pt-10">
            <div className="flex flex-row h-full w-full justify-center items-center gap-4 pt-10 2xl:gap-24">
              <div
                className="bg-white h-[320px] w-[500px]  rounded-2xl p-5 lg:overfl 2xl:h-[400px] 2xl:w-[600px]ow-scroll xl:overflow-hidden"
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                }}
              >
                <div className="flex flex-row">
                  <div className="flex flex-col gap-2 p-3 w-32 h-36">
                    <img className="rounded-full" src="/person-1.png" alt="" />
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center items-center gap-2">
                    <h1 className="text-3xl font-kalnia">Randi D. Ward</h1>
                    <p className="text-xs text-gray-400 font-public">
                      October 27, 2019
                    </p>
                  </div>
                </div>
                <p className="mx-10 text-base text-justify text-gray-600 font-public 2xl:text-xl">
                  I met Paula two years at our IAOTP Awards Gala in NYC in
                  December 2017. I was drawn to her bubbly and charming
                  personality. We have now been friends for almost two years.
                </p>
              </div>
              <div
                className="bg-white h-[320px] w-[500px] rounded-2xl p-5 lg:overflow-scroll xl:overflow-hidden 2xl:h-[400px] 2xl:w-[600px]"
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition:
                    "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.45s",
                }}
              >
                <div className="flex flex-row">
                  <div className="flex flex-col gap-2 p-3 w-32 h-36">
                    <img className="rounded-full" src="/person-2.png" alt="" />
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center items-center gap-2">
                    <h1 className="text-3xl font-kalnia">C Adair</h1>
                    <p className="text-xs text-gray-400 font-public">
                      February 17, 2023
                    </p>
                  </div>
                </div>
                <p className="mx-10 text-base text-justify text-gray-600 font-public 2xl:text-xl">
                  Hi I just finished reading this amazing book. Her life lessons
                  she has taught me to be happy is incorporated in my daily
                  life. I have got to know Paula recently and her zest for life
                  has made me truly a happier human being. Everybody must read
                </p>
              </div>
            </div>
          </div>
          <div className="2xl:h-[580px] w-[85vw] 2xl:pt-10">
            <div className="flex flex-row h-full w-full justify-center items-center gap-4 pt-10">
              <div className="bg-white h-[320px] w-[500px] rounded-2xl p-5 lg:h-80  lg:overflow-scroll xl:overflow-hidden 2xl:h-[400px] 2xl:w-[600px]ow-hidden">
                <div className="flex flex-row">
                  <div className="flex flex-col gap-2 p-3 w-32 h-36">
                    <div className="h-20 p-4 bg-gray-600 rounded-full flex justify-center items-center">
                      <FontAwesomeIcon
                        className="h-full text-white"
                        icon={faUser}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center items-center gap-2">
                    <h1 className="text-3xl font-kalnia">Randi D. Ward</h1>
                    <p className="text-xs text-gray-400 font-public">
                      November 2, 2023
                    </p>
                  </div>
                </div>
                <p className="mx-10 text-base text-justify text-gray-600 font-public 2xl:text-xl">
                  I happen to know Paul and in reading her book I hear her in
                  many of her writings. She is one of the Happiest Humans I know
                  and I’ve know Paula for 20yrs and she has made me to be a
                  happier person by just being around her 💛
                </p>
              </div>
              <div className="bg-white h-[320px] w-[500px] rounded-2xl p-5 2xl:h-[400px] 2xl:w-[600px]">
                <div className="flex flex-row">
                  <div className="flex flex-col gap-2 p-3 w-32 h-36">
                    <img className="rounded-full" src="/person-3.png" alt="" />
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-center items-center gap-2">
                    <h1 className="text-3xl font-kalnia">Elisa</h1>
                    <p className="text-xs text-gray-400 font-public">
                      February 17, 2023
                    </p>
                  </div>
                </div>
                <p className="mx-10 text-base text-justify text-gray-600 font-public 2xl:text-xl">
                  Hi I just finished reading this amazing book. Her life lessons
                  she has taught me to be happy is incorporated in my daily
                  life. I have got to know Paula recently and her zest for life
                  has made me truly a happier human being. Everybody must read
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="review">
        <div
          className="h-full w-full flex flex-col items-center justify-center pt-28"
          ref={blog6}
          style={{
            transform: isBlog6 ? "none" : "translateY(250px)",
            opacity: isBlog6 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="bg-white z-[1] w-full flex justify-center md:w-72">
            <img
              src="/mww-logo-no-year-200px.webp"
              alt="Marquis Who who logo"
            />
          </div>
          <div className="flex-grow flex flex-col z-[1] items-center justify-center gap-12 py-10 px-10 sm:px-20 md:px-24 lg:px-36 xl:px-48 2xl:px-64">
            <h1 className="text-white font-public font-bold text-center">
              Paula A. Vail has been inducted into the Prestigious Marquis Who’s
              Who Biographical Registry
            </h1>
            <h1 className="text-white italic text-cente ">
              Ms. Vail affects many lives through her new career path.
            </h1>
            <p className="text-white text-lg text-justify font-public tracking-normal font-extralight leading-loose 2xl:text-2xl 2xl:leading-[3]">
              LAKEWOOD, WA, December 4, 2020 – Paula A. Vail has been inducted
              into Marquis Who’s Who. As in all Marquis Who’s Who biographical
              volumes, individuals profiled are selected on the basis of current
              reference value. Factors such as position, noteworthy
              accomplishments, visibility, and prominence in a field are all
              taken into account during the selection process. <br /> <br />{" "}
              After receiving an Associate of Arts in accounting from Grays
              Harbor Community College, Ms. Vail went to work in the restaurant
              industry. She worked in the field for nearly three decades,
              beginning as a server, then becoming manager at Lorenzo’s
              Restaurant and eventually rising to become an owner. Following
              this period, Ms. Vail became interested in Reiki healing through a
              friend’s encouragement. She later established Wellness Inspired,
              where she currently serves as a Reiki master/teacher and owner.
              She is also the owner of Wellness Inspired Self-Publishing
              Company, through which she authored the books “Why Am I So Happy?”
              and co-authored the Reiki training manual. <br /> <br /> “Beyond
              Wellness Usui Reiki Training Manual”. In addition to her work in
              Reiki, Ms. Vail also hosts a podcast and radio show, “Elevating
              Your Life with Paula Vail.” For her professional accomplishments,
              she received the Top Wellness Award and was featured in the
              Business Hall of Fame by the Tacoma Award Program for eight
              consecutive years. Ms. Vail is currently professionally active
              with the Best of Tacoma Society. <br /> <br /> Ms. Vail has
              attributed her professional success to her desire to help others.
              Looking toward the future, she plans to share more of her gift
              with the world.{" "}
              <span className="text-green-300 font-public">
                www.wellnessinspired.com
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="h-full w-full ">
          <div className=" flex flex-col pt-28 w-full">
            <div className="w-full z-[1] flex flex-col gap-10 p-5 md:flex md:flex-row md:p-2 md:gap-5 md:items-center md:justify-center">
              <motion.div
                className="my-4 md:h-96 lg:h-[450px] xl:h-[500px] 2xl:h-[700px]"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
              >
                <img
                  className="h-full  cursor-pointer"
                  src="/Best-Gala-photo-1366x2048.jpg"
                  alt=""
                  ref={ref1}
                  style={{
                    opacity: isInView1 ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                  }}
                />
              </motion.div>

              <div className=" md:flex md:flex-col md:p-4 md:gap-10 md:items-center">
                <div className="md:flex md:flex-row md:gap-4 md:items-center">
                  <motion.div
                    className="cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                  >
                    <img
                      className="my-4 md:h-36 lg:h-64 xl:h-72 2xl:h-[450px]"
                      src="/Elevating-Your-Life-be-featured-8.png"
                      alt=""
                      ref={ref2}
                      style={{
                        transform: isInView2 ? "none" : "translateX(-200px)",
                        opacity: isInView2 ? 1 : 0,
                        transition:
                          "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                  >
                    <img
                      className="my-14 md:my-0 md:h-36 lg:h-64 lg:w- xl:h-72 2xl:h-[450px]"
                      src="/Book-postreview2023.png"
                      alt=""
                      ref={ref3}
                      style={{
                        transform: isInView3 ? "none" : "translateX(-200px)",
                        opacity: isInView3 ? 1 : 0,
                        transition:
                          "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                  >
                    <img
                      className="my-14 md:my-0 md:h-36 lg:h-64 xl:h-72 2xl:h-[450px]"
                      src="/Americas-Leading-Ladies-1.png"
                      alt=""
                      ref={ref4}
                      style={{
                        transform: isInView4 ? "none" : "translateX(-200px)",
                        opacity: isInView4 ? 1 : 0,
                        transition:
                          "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                      }}
                    />
                  </motion.div>
                </div>

                <div className="md:flex md:flex-row md:gap-2">
                  <motion.div
                    className="cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                  >
                    <img
                      className="my-14 md:my-0 md:h-36 lg:h-64 xl:h-72 2xl:h-[400px]"
                      src="/Americas-leading-Ladies-2.png"
                      alt=""
                      ref={ref5}
                      style={{
                        transform: isInView5 ? "none" : "translateX(-200px)",
                        opacity: isInView5 ? 1 : 0,
                        transition:
                          "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                  >
                    <img
                      className="my-14 md:my-0 md:h-36 lg:h-64 md:w-80 xl:h-72 xl:w-[500px] 2xl:h-[450px] 2xl:w-[550px]"
                      src="/Whos-Who-of-Professional-Women-2022-Executive-Spotlight-2.png"
                      alt=""
                      ref={ref6}
                      style={{
                        transform: isInView6 ? "none" : "translateX(-200px)",
                        opacity: isInView6 ? 1 : 0,
                        transition:
                          "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid my-48 gap-20 sm:gap-24 md:my-20 md:grid-cols-2 md:gap-4 md:px-2 lg:px-44 xl:px-56 xl:py-10 2xl:px-64">
        <div
          className="h-[550px] flex flex-col p-2 md:px-5 md:py-2"
          ref={card1}
          style={{
            opacity: isCard1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="">
            <img className="h-full" src="card1.1.png" alt="Card 1" />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <p className="text-base font-asap text-gray-500">2019</p>
            <h1 className="font-kalnia text-lg text-green-600 font-semibold">
              Mindful & Wellness Package for a woman
            </h1>
            <p className="text-base font-public leading-8">
              On “Wellness Inspired,” Paula Neva Vail, an author, Reiki master,
              and TV/radio host, aims to elevate lives by spreading positive
              energy and inspiration through education and entertainment.
            </p>
            <a
              className="flex items-center justify-center h-11 w-44 bg-green-600 hover:bg-green-500 text-white rounded-lg"
              href="https://www.wellnessinspired.com/"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div
          className="h-[550px] flex flex-col p-2 md:px-5 md:py-3 md:gap-2 "
          ref={card2}
          style={{
            opacity: isCard2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.35s",
          }}
        >
          <div>
            <img className="h-full" src="card2.2.png" alt="" />
          </div>
          <div className="px-2 flex flex-col gap-4 mb-2 md:gap-2 ">
            <p className="text-base text-gray-400 font-asap">
              December 18, 2023
            </p>
            <h1 className="text-green-700 font-semibold font-kalnia text-lg">
              Paula Vail, Best-Selling Author, and Reiki Master Reveals Secrets
              to Happiness, Joy, and Conquering Life’s Challenges
            </h1>
            <p className="font-asap text-base leading-8">
              In a recent interview, Paula Vail explores the victories inherent
              in leading a life filled with happiness and joy.
            </p>
            <a
              className="cursor:pointer bg-green-600 text-white font-asap text-base h-11 w-44 flex items-center justify-center rounded-lg hover:bg-green-500"
              href="https://www.einpresswire.com/article/675583024/paula-vail-best-selling-author-and-reiki-master-reveals-secrets-to-happiness-joy-and-conquering-life-s-challenges"
            >
              Read Release
            </a>
          </div>
        </div>
        <div
          className="h-[550px] flex flex-col p-2 md:px-5 md:py-2"
          ref={card3}
          style={{
            opacity: isCard3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="">
            <img className="h-full" src="card3.png" alt="Card 1" />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <p className="text-base font-asap text-gray-500"></p>
            <h1 className="font-kalnia text-lg text-green-600 font-semibold">
              Paula’s show “Elevating Your Life”
            </h1>
            <p className="text-base font-public leading-8">
              “Elevating Your Life,” airing Sundays at 8:00 am PT on KMET 1490
              AM, features Paula Vail’s journey into wellness, sparked by her
              desire to help others through Reiki and personal growth.
            </p>
            <a
              className="flex items-center justify-center h-11 w-44 bg-green-600 hover:bg-green-500 text-white rounded-lg"
              href="https://www.kmet1490am.com/elevating-your-life-paula-vail"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div
          className="h-[550px] flex flex-col p-2 md:px-5 md:py-0 md:gap-2"
          ref={card4}
          style={{
            opacity: isCard4 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.63s",
          }}
        >
          <div>
            <img className="h-full" src="card4.1.png" alt="" />
          </div>
          <div className="px-2 flex flex-col gap-4 mb-2 md:gap-2 ">
            <p className="text-base text-gray-400 font-asap">April 5, 2024</p>
            <h1 className="text-green-700 font-semibold font-kalnia text-lg">
              Paula Vail’s Award-Winning Best Seller “Why Am I So Happy” Lights
              Up Times Square
            </h1>
            <p className="font-asap text-base leading-8 md:leading-6">
              a celebrated author, entrepreneur, and Reiki Master, graces the
              exclusive space in Times Square for her book “Why Am I So Happy.”
              Vail’s book debuted on Times Square
            </p>
            <a
              className="cursor:pointer bg-green-600 text-white font-asap text-base h-11 w-44 flex items-center justify-center rounded-lg hover:bg-green-500"
              href="https://www.einpresswire.com/article/675583024/paula-vail-best-selling-author-and-reiki-master-reveals-secrets-to-happiness-joy-and-conquering-life-s-challenges"
            >
              Read Release
            </a>
          </div>
        </div>
      </div>

      <div className="h-full px-5 flex flex-col gap-10 md:justify-center md:items-center md:gap-10 md:px-32 xl:px-80">
        <h1 className="text-violet-950 font-asap text-2xl font-bold">
          Other Blogs
        </h1>

        <div
          className="grid gap-3 md:grid-cols-2 md:gap-10"
          ref={blog1}
          style={{
            transform: isBlog1 ? "none" : "translateX(-250px)",
            opacity: isBlog1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <div>
            <img src="/Screenshot-2024-06-22-021447.png" alt="" />
          </div>
          <div className="flex flex-col gap-3 md:justify-center md:gap-10">
            <p className="text-gray-400 text-base font-asap">April 16, 2024</p>
            <a
              href="https://www.amazon.ca/Why-Am-So-Happy-Success/product-reviews/B08DC9ZSGM/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews"
              target="_blank"
              className="text-xl text-violet-950 font-asap tracking-wide font-bold cursor-pointer hover:underline"
            >
              Helpful Strategies on Achieving and Maintaining a Happy Life
            </a>
          </div>
        </div>

        <div
          className="grid gap-5 md:grid-cols-2 md:items-center md:gap-10"
          ref={blog2}
          style={{
            transform: isBlog2 ? "none" : "translateX(250px)",
            opacity: isBlog2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          <div>
            <img src="Card5.png" alt=" Card 5" />
          </div>
          <div className="flex flex-col gap-3 md:gap-10">
            <p className="text-gray-400 text-base font-asap">
              February 20, 2024
            </p>
            <a
              href="https://www.einpresswire.com/article/689206176/paula-vail-award-winning-author-and-reiki-master-and-teacher-celebrates-25-years-of-reiki"
              target="_blank"
              className="text-violet-950 text-xl font-asap font-bold tracking-wide cursor-pointer hover:underline"
            >
              Paula Vail, Award-Winning Author and Reiki Master and Teacher
              Celebrates 25 Years of Reiki
            </a>
          </div>
        </div>

        <div
          className="grid gap-5 md:grid-cols-2 md:items-center md:gap-10"
          ref={blog3}
          style={{
            transform: isBlog3 ? "none" : "translateX(-250px)",
            opacity: isBlog3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          <div>
            <img
              src="/Americas-leading-Ladies-2.png"
              alt="Americas-leading-Ladies Awar"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-10">
            <p className="text-gray-400 font-asap text-base">2019</p>
            <a
              href="https://www.wellnessinspired.com/books-and-film"
              target="_blank"
              className="text-violet-950 text-xl font-asap font-bold tracking-wide cursor-pointer hover:underline"
            >
              Paula A. Vail has been inducted into the Prestigious Marquis Who’s
              Who Biographical Registry
            </a>
          </div>
        </div>

        <div
          className="grid gap-5 md:grid-cols-2 md:items-center md:gap-10"
          ref={blog4}
          style={{
            transform: isBlog4 ? "none" : "translateX(250px)",
            opacity: isBlog4 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
          }}
        >
          <div>
            <img
              src="/Whos-Who-of-Professional-Women-2022-Executive-Spotlight-2.png"
              alt=""
            />
          </div>
          <div>
            <a
              href="/"
              target="_blank"
              className="text-xl font-asap text-violet-950 font-bold tracking-wide hover:underline"
            >
              Paula A. Vail has been inducted into the Prestigious Marquis Who’s
              Who Biographical Registry
            </a>
          </div>
        </div>
      </div>
      <div
        className="h-full flex flex-col justify-center items-center gap-10 py-16"
        ref={blog5}
        style={{
          transform: isBlog5 ? "none" : "translateX(250px)",
          opacity: isBlog5 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.66s",
        }}
      >
        <div className="h-64  sm:h-96 sm:w-[500px] md:w-[650px] flex px-5">
          <video
            height="100%"
            width="100%"
            autoPlay
            controls
            src="/Blog Video.mp4"
          ></video>
        </div>

        <div className="h-56 w-screen sm:h-72 sm:w-[500px] md:w-[650px] md:h-96 px-5">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2qPd1Ip5d1g?si=oJiLp5kuo-WiEF58"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-2 px-10 sm:px-28 md:px-56 lg:px-72 xl:px-96 2xl:px-[600px]">
          <h1 className="text-2xl font-bold text-violet-950 tracking-wide font-asap sm:text-3xl">
            Wellness Inspired- Paula Vail on CNTV ©2023
          </h1>
          <p className="text-lg leading-7 font-asap text-justify sm:text-xl sm:leading-10 ">
            In this unique episode of CNTV, join Gary as he engages in a
            fantastic conversation with Paula Vail, spreading positive energy,
            information, and inspiration through education and entertainment.
          </p>
        </div>
      </div>

      <div id="Contacts">
        <Contact />
      </div>

      <footer className="foot">
        <div className="content flex items-end h-full">
          <div className="px-7 sm:px-16 md:px-52 lg:px-64 xl:px-96 2xl:px-[700px]">
            <h1 className="text-white text-center">
              Copyright © 2024 - Why Am I So Happy? The Sign of True Success is
              a Happy Heart by Paula Vail Developed by Inks and Bindings
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
