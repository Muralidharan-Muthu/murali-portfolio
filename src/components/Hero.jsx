import { motion } from "framer-motion";
import { styles } from "../styles";
import { leetcode } from '../assets/index.js'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px] w-full h-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5 min-h-0`}
      >
        <div className='flex flex-col justify-center items-center mt-5 flex-shrink-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-32 sm:h-80 violet-gradient' />
        </div>
        <div className="flex-1 min-w-0 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col justify-center"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                Hi, I'm <span className='text-[#915EFF]'>Muralidharan</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 leading-relaxed`}>
                I develop scalable web applications and user <br className='sm:block hidden' />
                interfaces with modern technologies.
              </p>
            </div>
            
            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center flex-1 min-w-[120px]">
                <div className="text-[#915EFF] text-xl sm:text-2xl lg:text-3xl font-bold">2+</div>
                <div className="text-white-100 text-xs sm:text-sm">Projects</div>
              </div>
              <div className="text-center flex-1 min-w-[120px]">
                <div className="text-[#915EFF] text-xl sm:text-2xl lg:text-3xl font-bold">13+</div>
                <div className="text-white-100 text-xs sm:text-sm">Technologies</div>
              </div>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="bg-[#915EFF] hover:bg-[#7c4dff] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg flex-1 min-w-[140px] text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg flex-1 min-w-[140px] text-center"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Original LeetCode Link */}
            <motion.div 
              className="flex flex-row gap-4 mt-6 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="https://leetcode.com/u/Fu1oh1JmRO/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:scale-110 transition-transform bg-tertiary py-3 px-4 rounded-xl shadow-md shadow-primary"
                title="LeetCode Profile"
              >
               <img src={leetcode} alt="LeetCode" className="w-10 h-10" />
              </a>
            </motion.div>

            {/* LeetCode Stats */}
            <motion.div 
              className="mt-6 w-full flex-1 flex flex-col justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
                {/* LeetCode Logo */}
                <a
                  href="https://leetcode.com/u/Fu1oh1JmRO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-blue-400 hover:scale-110 transition-transform bg-tertiary py-2 sm:py-3 px-3 sm:px-4 rounded-xl shadow-md shadow-primary"
                  title="LeetCode Profile"
                >
                  <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="10" fill="#fff"/>
                    <path d="M36.5 34.5L25.5 44.5C23.5 46.5 20.5 46.5 18.5 44.5L10.5 36.5C8.5 34.5 8.5 31.5 10.5 29.5L21.5 19.5" stroke="#FFA116" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M29.5 14.5L34.5 9.5C36.5 7.5 39.5 7.5 41.5 9.5C43.5 11.5 43.5 14.5 41.5 16.5L36.5 21.5" stroke="#070707" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M16.5 33.5L33.5 16.5" stroke="#070707" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </a>
                
                {/* Stats Container */}
                <div className="flex-1 min-w-0 bg-tertiary/50 backdrop-blur-sm rounded-xl p-2 sm:p-3 lg:p-4 border border-[#915EFF]/20">
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-1 xs:gap-2 sm:gap-3 lg:gap-4 w-full">
                    <span className="text-white-100 text-xs sm:text-sm lg:text-base font-medium flex-shrink-0">LeetCode:</span>
                    <div className="flex flex-wrap items-center gap-1 xs:gap-2 sm:gap-3 lg:gap-4 w-full">
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="text-green-400 text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">Easy: 4</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                        <span className="text-yellow-400 text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">Medium: 0</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                        <span className="text-red-400 text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">Hard: 0</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0 ml-0 xs:ml-2 pl-0 xs:pl-2 border-l-0 xs:border-l border-[#915EFF]/30">
                        <span className="text-[#915EFF] text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap">Total: 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
