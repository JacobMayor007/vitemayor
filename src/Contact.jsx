import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="my-10 flex flex-col items-center">
      <div className="my-10">
        <h1 className="text-6xl font-kalnia font-bold text-green-600 tracking-wider">
          Contact
        </h1>
      </div>
      <div className="flex flex-col w-full md:flex-row border md:border-gray-400 md:shadow-gray-700/100 shadow-lg md:w-[85vw] 2xl:h-[70vh] 2xl:w-[70vw]">
        <div
          className="h-[60vh] w-screen bg-[#17b67f] flex flex-col gap-7 py-10 px-5 md:w-[65vw] md:h-[500px] md:relative md:right-10 md:top-16 xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:top-16 2xl:right-28"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translate3d(250px, 0, 0)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <h1 className="text-3xl font font-public text-white font-bold">
            Contact Me
          </h1>
          <div className="grid grid-cols-3 gap-y-6 md:grid-cols-6 md:h-3/4 md:justify-center md:items-center">
            <div className="h-10">
              <FontAwesomeIcon
                className="h-full text-white"
                icon={faFacebookF}
              />
            </div>
            <div className="flex flex-col justify-center w-full col-span-2 md:col-span-5 md:h-full">
              <a
                className="text-white text-sm font-asap tracking-widest"
                href="https://www.facebook.com/paula.vail.98"
              >
                facebook.com/paula.vail.98
              </a>
            </div>
            <div className="h-8">
              <FontAwesomeIcon
                className="h-full text-white"
                icon={faLinkedinIn}
              />
            </div>
            <div className="flex flex-col justify-center w-full text-white tracking-widest font-asap text-sm col-span-2 md:col-span-5 md:h-full">
              <a href="https://www.linkedin.com/in/paulavail/">
                linkedin.com/in/paulavail/
              </a>
            </div>

            <div className="h-8">
              <FontAwesomeIcon className="h-full text-white" icon={faGlobe} />
            </div>
            <div className="flex flex-col justify-center font-asap text-sm text-white w-full tracking-widest col-span-2 md:col-span-5 md:h-full">
              <a href="https://www.wellnessinspired.com/">
                wellnessinspired.com
              </a>
            </div>
            <div className="h-8">
              <FontAwesomeIcon className="h-full text-white" icon={faYoutube} />
            </div>
            <div className="flex flex-col justify-center font-asap text-sm text-white w-full tracking-widest col-span-2 md:col-span-5 md:h-full">
              <a href="https://www.youtube.com/watch?v=2qPd1Ip5d1g">
                {" "}
                CNTV Feature
              </a>
            </div>
          </div>
        </div>
        <div
          className="h-full w-screen flex flex-col gap-5 py-10 px-4 2xl:py-20"
          ref={ref2}
          style={{
            transform: isInView2 ? "none" : "translate3d(250px, 0, 0)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        >
          <h1 className="text-green-600 text-3xl font-public tracking-widest">
            Get In Touch
          </h1>
          <h2 className="text-green-300 text-base font-asap tracking-wider">
            Feel free to send a message below!
          </h2>

          <form className="flex flex-col gap-10 xl:pr-44 2xl:pr-72" action="">
            <label
              className="h-12 w-full border border-gray-400 rounded-3xl flex items-center px-4"
              htmlFor="fullName"
            >
              <input
                className="outline-none w-full"
                type="text"
                name="fullName"
                id=""
                placeholder="Name"
              />
            </label>
            <label
              className="h-12 w-full border-gray-400 border rounded-3xl flex items-center px-4"
              htmlFor="email"
            >
              <input
                className="outline-none w-full"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
            </label>

            <label
              className="h-12 w-full border-gray-400 border rounded-3xl flex items-center px-4"
              htmlFor="subject"
            >
              <input
                className="outline-none w-full"
                type="text"
                name="subject"
                id=""
                placeholder="Subject"
              />
            </label>
            <label
              className="w-full border-gray-400 border rounded-3xl flex items-center px-4 py-3"
              htmlFor=""
            >
              <textarea
                className="resize-none outline-none w-full"
                name="message"
                id=""
                rows="5"
                cols="100%"
                placeholder="Message"
              ></textarea>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
