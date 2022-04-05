import logo from './logo.svg';
import './App.css';
import {MixedColor} from './components/mixed-color';
import {Color} from './components/color'

function App() {
  
  const colorList = ['red','green','blue'];
  
  return (
    <div className="App">
      <div className="colors">
        {
          colorList.map((value, index) => {
            return <Color 
                      key="index" 
                      color={value}
                    />
          })
        }
      </div>  
      <MixedColor /> 
    </div>
  );
}

export default App;
