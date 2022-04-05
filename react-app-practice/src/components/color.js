import './../App.css';

function Color(props) {
  
  const {color} = props;
  
  return (
    <div 
    className="color" 
    style={{ backgroundColor: color }}>
      {color}
    </div>
  );
}

export {Color};