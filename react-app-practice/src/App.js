import logo from './logo.svg';
import './App.css';
import './components/colors.css';
import {MixedColor} from './components/mixed-color';
import {Color} from './components/color';
import React, { useState , useEffect} from 'react';

function App() {
  
  const [combinedColor, setCombinedColor] = useState('black');
  const [colorList] = useState(['red','green','blue']);
  const [colorCombo] = useState({
    'red-green': 'brown',
    'red-blue': 'purple',
    'blue-green': 'cyan',
    'red-blue-green': 'white',
  });
  const [colorClicks, setColorClicks] = useState({
    'red': false,
    'blue': false,
    'green': false,
  });
  
  // onClick function call
  const colorClick = (color, isClicked) => {
    setColorClicks({  
      ...colorClicks,
      [color]: isClicked,
    });
  }
  
  useEffect(() => {
    let setKey = '';
    for (let c in colorClicks) {
      if (colorClicks[c]) {
        setKey += setKey.length ? '-' + c : c;
      }
    }
    setCombinedColor(colorCombo[setKey]);
});

  return (
    <div className="App">
      <div className="colors">
        {
          colorList.map((value, index) => {
            return <Color 
                      key="index" 
                      color={value}
                      colorClick={colorClick}
                    />
          })
        }
      </div>  
      <div className="comboColor">
        <MixedColor 
          color={combinedColor}
        /> 
      </div>
    </div>
  );
}

export default App;
