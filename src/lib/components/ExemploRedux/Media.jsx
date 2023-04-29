import React from 'react'
import { connect } from "react-redux";
import Card from './Card'

const Media = (props) => {
    const {
        min,
        max
    } = props

    return (
        <Card>
            <h1>Média</h1>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2 }</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max
})

// connect retorna uma função e passa Media como parâmetro pra essa função
export default connect(mapStateToProps)(Media) 