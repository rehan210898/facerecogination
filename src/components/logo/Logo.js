import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain.webp';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner tc pa3"><img style={{paddingTop:'5px',height:'100px',width:'100px'}}src={brain} alt='brain'/> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
