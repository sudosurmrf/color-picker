// Write your Color component here
import { useState } from 'react';

const Color = ({ color, setSelectedColor, selectedColor }) => {
  return <div className = {color === selectedColor ? `${color} selected` : color} 
  onClick={() => {
    setSelectedColor(color)
    
  }}>
    
  </div>
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
        
        <div id="colors-list">
          <Color color='green' setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
          <Color color='orange'setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
          <Color color='violet'setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        </div>
    </div>
  );
};

export default Picker;