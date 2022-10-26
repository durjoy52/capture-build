import React from "react";
// Images
import { Link } from "react-router-dom";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";

const OurWork = () => {
  return (
    <Work>
        <Movie>
            <h2>The Athlete</h2>
            <div className="line"></div>
            <Link>
            <img src={athlete} alt="athlete" />
            </Link>
        </Movie>
        <Movie>
            <h2>The Racer</h2>
            <div className="line"></div>
            <Link>
            <img src={theracer} alt="athlete" />
            </Link>
        </Movie>
        <Movie>
            <h2>Good Times</h2>
            <div className="line"></div>
            <Link>
            <img src={goodtimes} alt="athlete" />
            </Link>
        </Movie>
    </Work>
  );
};

const Work = styled.div`
min-height: 100vh;
padding: 5rem 10rem;
overflow: hidden;
h2{
    padding: 1rem 0rem;
}
`
const Movie = styled.div`
padding-bottom: 10rem;
.line{
    height: .5rem;
    background: #cccccc;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`


export default OurWork;
