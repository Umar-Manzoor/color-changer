import colorNames from 'colornames';

const Input = ({colorBackground, setColorBackground, hexValue, setHexValue}) => {
    return (
        <form>
            <input
                className="inputColor" 
                placeholder="Add color name"
                onChange={ 
                    (event) => { 
                        setHexValue(colorNames(event.target.value));
                        setColorBackground(event.target.value);
                }}
            />
        </form>
    )
}

export default Input