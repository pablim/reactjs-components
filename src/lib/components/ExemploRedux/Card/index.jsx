import React from "react"

import './card.css'

const Card = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Card