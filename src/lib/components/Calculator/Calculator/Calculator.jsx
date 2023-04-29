import React, { useState } from 'react'
import './css/calculator.css'
import './css/calculator-leptop.css'

import Button from '../Button/Button'
import Display from '../Display/Display'

export default function Calculator() {

    // useEffect
    //React garante que o DOM foi atualizado na hora de executar os efeitos
    // useEffect(() => {
    //     function handleStatusChange(status) {
    //       setIsOnline(status.isOnline);
    //     }
    
    //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    //     Isso é um mecanismo opcional de limpeza para efeitos. Cada efeito 
    //     pode retornar uma função que irá limpar depois dela. Isso nos 
    //     permite manter a lógica de limpeza perto uma da outra. Efeitos rodam 
    //     em todas as renderizações e não apenas uma vez. É por isso que o 
    //     React também limpa os efeitos da renderização anterior antes de 
    //     rodar os efeitos da próxima vez. 
    //     return () => {
    //       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    //     };

    //      Você pode dizer ao React para pular a aplicação de um efeito se 
    //      certos valores não tiverem mudado entre as renderizações. Para 
    //      fazer isso, passe uma array como um segundo argumento opcional ao 
    //      useEffect
    //      Se você quer executar um efeito e limpá-lo apenas uma vez (na 
    //      montagem e desmontagem), você pode passar um array vazio ([]) como 
    //      segundo argumento. Isso conta ao React que o seu efeito não depende 
    //      de nenhum valor das props ou state, então ele nunca precisa 
    //      re-executar. Isso não é tratado como um caso especial — segue 
    //      diretamente de como o array de dependências sempre funciona.
    //   }, [props.friend.id]); // Apenas re-subscribe se props.friend.id mudar

    // Você também pode usar vários efeitos. Isso nos permite separar lógicas 
    // não relacionadas em diferentes efeitos.
    // React irá aplicar todos os efeitos usados por um componente, na ordem em 
    // que eles foram especificados
    // useEffect(() => {    
    //     document.title = `Você clicou ${count} vezes`;
    // }, [count]); // Apenas re-execute o efeito quando o count mudar

    // https://pt-br.reactjs.org/docs/hooks-effect.html

    const initialState = {
        displayValue: "0",
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    }

    const [state, setState] = useState(initialState)

    function clear() {
        console.log('clear')
        setState(initialState)
    }

    function setOperation(operation) {
        console.log(operation)
        if (state.operation === 0) {
            this.setState({
                ...state,
                current: 1,
                clearDisplay: true
            })
        } else {
            const result = operation === '='
            const currentOperation = state.operation
            const values = [...state.values]

            switch (currentOperation) {
                case("+"): 
                    values[0] = values[0] + values[1]
                    break
                case("-"): 
                    values[0] = values[0] - values[1]
                    break
                case("/"): 
                    values[0] = values[0] / values[1]
                    break
                case("*"): 
                    values[0] = values[0] * values[1]
                    break
                default:
                    console.log('operação inexistente')
            }

            values[1] = 0

            setState({
                ...state,
                displayValue: values[0],
                operation: result ? null : operation,
                current: result ? 0 : 1,
                clearDisplay: !result
            })
        }
    }

    function addDigit(digit) {
        console.log(digit)

        // Permite adicionar somente um ponto
        if (digit === '.' && state.displayValue.includes('.')) {
            return
        }
        
        console.log(state)
        const clearDisplay = state.displayValue === '0' || state.clearDisplay
        const currentValue = clearDisplay ? '' : state.displayValue
        const displayValue = currentValue + digit
        
        const values = [...state.values]
        if (digit !== '.') {
            const value = parseFloat(displayValue)
            values[state.current] = value
        }

        setState( { ...state, displayValue, clearDisplay: false, values } )

        console.log(state)
    }

    return (
        <div className="calc-container">
            <Display value={state.displayValue}/>
            <Button className="triple" text="AC" click={clear}/>
            <Button className="operation" text="/" click={setOperation}/>
            <Button text="7" click={addDigit}/>
            <Button text="8" click={addDigit}/>
            <Button text="9" click={addDigit}/>
            <Button className="operation" text="*" click={setOperation}/>
            <Button text="4" click={addDigit}/>
            <Button text="5" click={addDigit}/>
            <Button text="6" click={addDigit}/>
            <Button className="operation" text="-" click={setOperation}/>
            <Button text="1" click={addDigit}/>
            <Button text="2" click={addDigit}/>
            <Button text="3" click={addDigit}/>
            <Button className="operation" text="+" click={setOperation}/>
            <Button className="double" text="0" click={addDigit}/>
            <Button text="." click={addDigit}/>
            <Button className="operation" text="=" click={setOperation}/>
        </div>
    )
}