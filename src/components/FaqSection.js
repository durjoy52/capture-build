import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt, odit.
                </p>
            </div>
          </Toggle>
          <Toggle title="Daily schedule">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
                    odit.
                  </p>
              </div>
          </Toggle>
          <Toggle title='Different payment methods'>
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
                    odit.
                  </p>
                </div>
          </Toggle>
          <Toggle title="What products do you offer .">
                <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
                    odit.
                  </p>
                </div>
          </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    height: 0.2rem;
    background: #ccc;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
