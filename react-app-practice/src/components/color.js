import './colors.css';
import React, { useState } from 'react';

function Color(props) {
  
  const {color, colorClick} = props;
  const [isClicked, setClicked] = useState(false);
  
  const colorStyle = {
    backgroundColor: color,
    color: isClicked ? 'black' : color,
    border: '3px solid',
  };
 
  return (
    <div 
      className="color" 
      style={colorStyle}
      onClick={() => {
        setClicked(!isClicked);
        colorClick(color, !isClicked);
      }}
    >
    </div>
  );
}

export {Color};