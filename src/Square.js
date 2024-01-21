const Square = ({ colorBackground, hexValue, textColor }) => {
    return (
        <div
            className="square"
            style={{
                backgroundColor: colorBackground   
            }}
        >
        <p className="colorDisplay"
            style={ {color : textColor}}
        > { colorBackground ? colorBackground : 'No Color'} </p>
        </div>
    )
}

export default Square