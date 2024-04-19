import profile from "../assets/profile2.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[70vh] max-w-[1200px] mx-auto py-8 bg-black">
      <div className=" col-span-1 my-auto mx-auto w-[330px] h-auto lg:[400px] ">
        <img src={profile} alt="Hero Image" />
      </div>

      <div className="col-span-2 my-auto px-5 ">
        <h1 className="text-white text-4xl sm:text-4xl lg:text-7xl font-extrabold">
          {" "}
          <span className="primary-color "> I'm a </span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web Developer",
              1000,
              "Graphic Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Zubair, and I embarked on my web development journey using
          React and Tailwind CSS in the year 2024.
        </p>

        <div className="my-8">
          <a
            href="/"
            className="text-white px-6 py-3 w-full rounded-xl mr-4  bg-gradient-to-br from-orange-500 to-pink-500"
          >
            Download CV
          </a>
          <a
            href="/"
            className="text-white px-6 py-3 w-full rounded-xl border border-purple-500 hover:bg-gradient-to-br from-orange-500 to-pink-500
          "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
