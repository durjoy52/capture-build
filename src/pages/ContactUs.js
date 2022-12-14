import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background:'#fff'}}>
            <Title>
            <Hide>
                <motion.h2 variants={titleAnim}>
                    Get in touch
                </motion.h2>
            </Hide>
            </Title>
            <div>
               <Hide>
               <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Send Us A Message</h2>
                </Social>
               </Hide>
               <Hide>
               <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Send An Email</h2>
                </Social>
               </Hide>
               <Hide>
               <Social variants={titleAnim}>
                    <Circle/>
                    <h2>Social Media</h2>
                </Social>
               </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color:#353535;
min-height: 90vh;
@media (max-width:1300px){
    padding: 1rem;}
`

const Title =styled.div`
@media (max-width:1300px){
   margin-top: 5rem;
}
margin-bottom: 4rem;
color: black;
`

const Hide = styled.div`
overflow: hidden;
`
const Circle = styled.div`
height: 3rem;
width:3rem;
background: #353535;
border-radius:50%;
`
const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
`
export default ContactUs;