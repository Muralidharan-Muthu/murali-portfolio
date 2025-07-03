import { motion } from "framer-motion";
import { styles } from "../styles";
import { leetcode } from '../assets/index.js'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center`}>
      <div
        className={`w-full h-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-3 sm:gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5 flex-shrink-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-20 sm:h-32 md:h-40 lg:h-60 violet-gradient' />
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-2 sm:space-y-4"
          >
            <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
              Hi, I'm <span className='text-[#915EFF]'>Muralidharan</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 leading-relaxed`}>
              I develop scalable web applications and user <br className='sm:block hidden' />
              interfaces with modern technologies.
            </p>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center flex-1 min-w-[100px] sm:min-w-[120px]">
              <div className="text-[#915EFF] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">2+</div>
              <div className="text-white-100 text-xs sm:text-sm">Projects</div>
            </div>
            <div className="text-center flex-1 min-w-[100px] sm:min-w-[120px]">
              <div className="text-[#915EFF] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">13+</div>
              <div className="text-white-100 text-xs sm:text-sm">Technologies</div>
            </div>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="bg-[#915EFF] hover:bg-[#7c4dff] text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base flex-1 min-w-[120px] sm:min-w-[140px] text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base flex-1 min-w-[120px] sm:min-w-[140px] text-center"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* LeetCode Section */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
            <a
              href="https://leetcode.com/u/Fu1oh1JmRO/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-blue-400 hover:scale-110 transition-transform bg-tertiary py-2 sm:py-3 px-2 sm:px-3 rounded-xl shadow-md shadow-primary flex items-center justify-center gap-4"
              title="LeetCode Profile"
            >
              <span className="text-white-100 text-lg sm:text-xl font-medium flex-shrink-0">LeetCode Profile </span>
              <img src={leetcode} alt="LeetCode" className="w-6 h-6 sm:w-8 sm:h-8 bg-[#915EFF] rounded-full p-1.5" />
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
