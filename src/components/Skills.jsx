import React from 'react'
import { SectionWrapper } from '../hoc'
import { Sky, Stars } from '@react-three/drei';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material';


const Skills = (props) => {
  return (
    <>
      <motion.div variants={textVariant()} className={`${useMediaQuery('(min-width:390px)') ? '' : 'mt-8'}`}>
        {/* <p className={`${styles.sectionSubText}`}>SKILLS</p> */}
        <p className={`${styles.sectionHeadText} my-2`}>SKILLS..<span className='text-[#915EFF]'>.</span></p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Skills, "skills");