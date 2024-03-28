import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <>
      {/* <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg> */}
    
    
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! I'm <strong>Jithin</strong>. And I'm from the enchanting lands of Kerala, India. Armed with a bachelor's degree in Mechanical Engineering from Kannur University. However, my heart was drawn to the captivating world of information technology, fueled by an insatiable curiosity about the inner workings of modern technologies. Driven by this passion, I embarked on a journey of self-directed learning, delving into the intricacies of web development and JavaScript.
            </ScrollAnimation>

            <br /><br />
            
        

            <ScrollAnimation animateIn="fadeInLeft">
            Today, I stand as a proficient MEARN stack developer, having honed my skills through dedicated practice and hands-on experience. My current endeavor finds me serving as an intern at Luminar Technolab, where I am afforded the opportunity to apply my expertise and contribute to innovative projects. Each day presents new challenges and opportunities for growth, and I embrace them eagerly as I continue to evolve and thrive in the dynamic landscape of technology.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
    </>
  );
}

export default About;
