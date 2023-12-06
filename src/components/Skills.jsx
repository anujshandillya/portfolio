import React from 'react'
import { SectionWrapper } from '../hoc'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material';
import { Suspense } from 'react';
import BallCanvas from './canvas/Ball';
import { Canvas } from '@react-three/fiber';
import { technologies } from '../constants';


const Skills = (props) => {
  return (
    <>
      <motion.div variants={textVariant()} className={`${useMediaQuery('(min-width:390px)') ? '' : 'mt-8'}`}>
        {/* <p className={`${styles.sectionSubText}`}>SKILLS</p> */}
        <motion.p className={`${styles.sectionHeadText} my-2`}>SKILLS..<span className='text-[#915EFF]'>.</span></motion.p>
        <motion.div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map(tech => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas imgurl={tech.icon} />
            </div>
          ))}

        </motion.div>

      </motion.div>
    </>
  )
}

export default SectionWrapper(Skills, "skills");

