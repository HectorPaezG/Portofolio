"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-1">
              Hello I'm <br />
              <span className="text-blue-700 text-[40px]"> 
                <TypeAnimation
                  sequence={[
                    '',
                    3000,
                    'Héctor Páez',
                    4000,
                    'FullStack Developer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: 'inherit', display: 'inline-block', marginBottom: '10px' }} 
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 mt-1">
              I am a developer primarily focused on frontend development, actively striving towards becoming a full-stack developer. I am enthusiastic about acquiring knowledge in various new technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" type="button">
                <a href="/assets/resume/Hector_Paez_CV.pdf" download>Download CV</a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-blue-700 rounded-full flex 
                justify-center items-center text-blue-700 text-base hover:bg-blue-700 hover:text-primary 
                hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
