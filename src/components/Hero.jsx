import { motion } from "framer-motion";

import { styles } from "../styles";
import Image from "../assets/Coder.png"


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#bf61ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex w-fit' >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='bg-gradient-to-r from-[#bd52eb] to-[#ec3975] text-transparent bg-clip-text'> {"<"}Akanshu{"/>"}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student of IIIT Bhubaneswar.  <br className='sm:block hidden' />
            A web developer and AI/ML enthusiast.
          </p>
        </div>
      </div>
      <div className='hidden md:w-1/2 md:flex md:items-center md:justify-center'>
    <img
              alt="1"
              className="max-w-full max-h-full mt-32 mr-0 transition-transform duration-300 ease-in-out transform hover:scale-90 perspective-1000"
              src={Image}
            />
    </div>
    </div>
  
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
