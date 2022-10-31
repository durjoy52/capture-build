import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
  
  @media(max-width:1300px){
        padding: 0;
        button{
          margin: 2rem 0rem 4rem 0rem;
        }
      }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
