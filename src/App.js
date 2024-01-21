import { useState } from 'react';
import './App.css';
import Square from './Square';
import Input from './Input';
import TextColor from './TextColor';

function App() {
  const [colorBackground, setColorBackground] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [textColor, setTextColor] = useState('black');

  return (
    <div className="App">
      <Square 
        colorBackground = { colorBackground }
        hexValue = {hexValue}  
        textColor = { textColor }
      />
      <Input 
        colorBackground = { colorBackground }
        setColorBackground = { setColorBackground }
        hexValue = {hexValue} 
        setHexValue = {setHexValue}
      />
      <TextColor
        textColor = { textColor }
        setTextColor = { setTextColor }
      />
    </div>
  );
}

export default App;
