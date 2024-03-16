import React from 'react'
import './button.css'

function textLabel(label) {
    alert('A label desse botão é ' + label)
}

const Button = ({ label }) => {

    return (

        <button
            className='btn'
            label={label}
            onClick={() => (textLabel(label))}
        >
            Baixar CV
        </button>
    )
}



export default Button