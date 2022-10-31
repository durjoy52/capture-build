import { motion } from 'framer-motion';
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const {pathname} = useLocation()
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line transition={{duration:.75}} initial={{width:"0%"}} animate={{width:pathname === "/" ? "100%" :"0%"}}/>
        </li>
        <li>
          <Link to="/work">3. Our Work</Link>
          <Line transition={{duration:.75}} initial={{width:"0%"}} animate={{width:pathname === "/work" ? "100%" :"0%"}}/>
        </li>
        <li>
          <Link to="/contact">2. Contact Us</Link>
          <Line transition={{duration:.75}} initial={{width:"0%"}} animate={{width:pathname === "/contact" ? "100%" :"0%"}}/>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
position: sticky;
top: 0%;
z-index: 10;
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
a{
color: white;
text-decoration: none;
}
ul{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    width: 38%;
}
#logo{
    font-size: 1.5rem;
    font-family: 'Lobster',cursive;
    font-weight: lighter;
}
li{
    position: relative;
}
@media (max-width:1300px){
  flex-direction: column;
  padding:2rem 1rem;
  #logo{
    display: inline-block;
    margin: 1rem;
  }
 ul{
  padding: 2rem;
  justify-content: space-around;
  width: 100%;
 }
 li{
  padding: 0;
 }
}
`
const Line = styled(motion.div)`
height:.3rem;
width: 0%;
background: #23d997;
position: absolute;
margin-top: .3rem;
`
export default Nav;
