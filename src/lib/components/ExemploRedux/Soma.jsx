import React from 'react'
import { connect } from "react-redux";

import Card from './Card'

const Soma = (props) => {
    
    const {
        min,
        max
    } = props

    return (
        <Card>
            <h1>Soma</h1>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max
})

export default connect(mapStateToProps)(Soma)