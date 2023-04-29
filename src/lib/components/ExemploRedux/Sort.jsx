import React from 'react'
import { connect } from "react-redux";

import Card from './Card'

const Sort = (props) => {

    const {
        min,
        max
    } = props

    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card>
            <h1>Aleatório</h1>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max
})

export default connect(mapStateToProps)(Sort)