import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { pageAnimation } from "../animation";
import ScrollTop from '../components/ScrollTop';
import { MovieState } from "../movieState";
const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movies && (
        <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
          <HeadLine>
            <h2>{movie?.title}</h2>
            <img src={movie?.mainImg} alt="" />
          </HeadLine>
          <Awards>
            {
                movie?.awards.map((award,index) =><Award key={index} title={award.title} description={award.description} />)
            }
          </Awards>
          <ImageDisplay>
            <img src={movie?.secondaryImg} alt="movie" />
          </ImageDisplay>
          <ScrollTop/>
        </Details>
      )}
    </>
  );
};

const Award = ({title,description}) =>{
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  @media (max-width:1300px){
   h2{
    position: absolute;
    top: 10%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 100%;
   }
}
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
justify-content: space-around;
align-items: center;
@media (max-width:1300px){
    flex-direction: column;
    margin: 2rem;
}
`;
const AwardStyle = styled.div`
padding: 5rem;
h3{
    font-size: 1.6rem;
}
.line{
    width: 100%;
    height: .5rem;
    background: #23d997;
    margin: 1rem 0rem;
}
p{
    padding: 2rem 0rem;
}
`

const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width:100%;
    height: 100vh;
    object-fit: cover;
}

@media(max-width:1300px){
    img{
      object-fit: contain;
      height: 100%;
    }    
      }
`

export default MovieDetail;
