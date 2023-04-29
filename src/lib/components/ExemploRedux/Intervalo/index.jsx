import React from "react"
import { connect } from "react-redux";

import Card from "../Card"
import { 
    alterarNumeroMaximo, 
    alterarNumeroMinimo 
} from "../../../store/actions/numeros";

const Intervalo = (props) => {
    const { min, max } = props
    
    return (
        <Card>
            <span>
                <strong>Mínimo</strong>
                <input type="number" value={min} 
                    onChange={e => props.onChangeMin(+e.target.value)} 
                />
            </span>
            <span>
                <strong>Máximo</strong>
                <input type="number" value={max} 
                    onChange={e => props.onChagneMax(+e.target.value)}
                />
            </span>
        </Card>
    )
}

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max
})

const mapDispactchToPorps = (dispatch) => {
    return {
        onChangeMin(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        onChagneMax(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispactchToPorps
)(Intervalo)