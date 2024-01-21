import { useState } from "react";

const TextColor = ( {textColor, setTextColor}) => {
    const [buttonColor, setButtonColor] = useState('black');
    const [buttonTextColor, setButtonTextColor] = useState('white');

    return (
        <button 
            className="textColorButton"
            style={ {
                backgroundColor : buttonColor,
                color : buttonTextColor
            }}
            onClick={(event) => {
                if (textColor === 'white') {
                    setTextColor('black');
                    event.target.innerHTML = 'White Text';
                    setButtonColor('white');
                    setButtonTextColor('black');
                } else {
                    setTextColor('white');
                    event.target.innerHTML = 'Black Text'
                    setButtonColor('black');
                    setButtonTextColor('white');
                }
            }}
        >
            Black Text
        </button>
    )
}

export default TextColor