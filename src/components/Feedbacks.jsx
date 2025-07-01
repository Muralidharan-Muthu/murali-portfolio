import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({
  index,
  title,
  issuer,
  date,
  description,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='flex justify-between items-center mb-4'>
      <img
        src={image}
        alt={`certificate-${title}`}
        className='w-16 h-16 rounded-lg object-cover'
      />
      <div className='text-right'>
        <p className='text-secondary text-[12px]'>{date}</p>
        <p className='text-white text-[14px] font-medium'>{issuer}</p>
      </div>
    </div>

    <div className='mt-1'>
      <h3 className='text-white font-bold text-[20px] mb-2'>{title}</h3>
      <p className='text-white tracking-wider text-[16px]'>{description}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className='bg-tertiary py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          View Certificate
        </a>
      </div>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates & Internships.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
