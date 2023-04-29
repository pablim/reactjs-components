import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        <button className={`button ${props.className}`} onClick={() => props.click(props.text)}>
            {props.text}
        </button>
    )
}