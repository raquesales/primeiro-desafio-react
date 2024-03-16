import React from "react"
import './paragraph.css'

        const Paragraph = ({label, color}) => {
    return (
        <div className="p" > 
            <h1 style={{color: color}} >{label.toUpperCase()}</h1>
        </div>
    )
}

Paragraph.defaultProps = {
    label: 'outros textos', 
    color: '#cc0099'
}

export default Paragraph