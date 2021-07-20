import React from 'react'

const Button = ({ handleAdd, value }) => {

    return (
        <div>
            <button onClick={() => handleAdd(value)}>
                {value < 0 ? value : "+" + value}
            </button>
            {/* <button onClick={handleDec}> -</button> */}
        </div >
    )
}

export default Button
