import React from "react";
import lights from "../assets/images/lights.jpg";
import Hexagon from 'react-hexagon';

function Home() {
  return (
    <div className="devonux-main-box">
      <div className="devonux-intro-block">
        <h2 className="devonux-h2-title">Devonux</h2>
        <div className="devonux-intro"></div>
        <div className="devonux-intro-dot1"></div>
        <div className="devonux-intro-dot2"></div>
        <div className="devonux-intro-dot3"></div>
        <span className="devonux-intro-v-text">SCROLL DOWN</span>
      </div>
      <div className="devonux-skills">
        <div className="devonux-skills-hex">
          <Hexagon
            className={'dvnx-hexagon-center'}
            flatTop={90}>
            <text x="40%" y="60%">Web Apps</text>
          </Hexagon>
          <Hexagon
            className={'dvnx-hexagon-center-top'}
            flatTop={90}>
            <text x="40%" y="60%">Web Sites</text>
            </Hexagon>
          <Hexagon
            className={'dvnx-hexagon-center-bottom'}
            flatTop={90}>
            <text x="40%" y="60%">Online Stores</text>
            </Hexagon>
          <Hexagon
            className={'dvnx-hexagon-center-left-b'}
            flatTop={90}>
            <text x="40%" y="60%">Mobile Apps</text>
          </Hexagon>
          <Hexagon
            className={'dvnx-hexagon-center-down'}
            flatTop={90}>
            <text x="40%" y="60%">Mobile Apps</text>
          </Hexagon>
          <Hexagon
            className={'dvnx-hexagon-center-down-l'}
            flatTop={90}>
            <text x="40%" y="60%">Mobile Apps</text>
          </Hexagon>
          <Hexagon
            className={'dvnx-hexagon-center-down-r'}
            flatTop={90}>
            <text x="40%" y="60%">Mobile Apps</text>
          </Hexagon>
        </div>
      </div>
      <div className="devonux-we-believe">
        <img className="devonux-we-believe-bg-img" src={lights}></img>
        <div className="devonux-we-believe-block">
          <span className="dvnx-span-text">Our goal is to deliver to our customers the best digital product to help them reach the established goals and reach this huge global market that the internet makes available to us.</span>
          <h4 className="dvnx-h4">We believe in the <span className="dvnx-span-strong">internet</span> as the smartest solution</h4>
        </div>
      </div>
      <div className="devonux-us-block">
        <span className="dvnx-us-block-title slant-1">There are</span>
        <span className="dvnx-us-block-title slant-2">No</span>
        <span className="dvnx-us-block-title slant-3">Limits</span>
        <span className="dvnx-us-block-title slant-4">On the</span>
        <span className="dvnx-us-block-title slant-5">Web</span>
      </div>
    </div>
    
  );
}

export default Home;