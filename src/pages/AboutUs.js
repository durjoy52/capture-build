import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../animation';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';
import ServicesSection from '../components/ServicesSection';

const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
            <ScrollTop/>
        </motion.div>
    );
};

export default AboutUs;