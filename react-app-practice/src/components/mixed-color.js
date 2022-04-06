import './colors.css';

function MixedColor(props) {
  
  const {color} = props;
  
  return (
    <div 
      className='mixed-color'
      style={{backgroundColor: color}}
    >
    {color}
    </div>
  );
}

export { MixedColor };