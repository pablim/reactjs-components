import React, {useEffect, useState} from 'react';

const MousePoint = ({  }) => {

    const [point, setPoint] = useState({})

    const onMouseMove = (e) => {
        var x = e.nativeEvent.offsetX 
        var y = e.nativeEvent.offsetY 
        setPoint({x,y})
        
    }

    const renderPoint = () => {
        return (
            <g>
                <circle cx={point.x} cy={point.y} r={5} fill='black' />
                <text x={point.x} y={point.y} >({point.x} , {point.y})</text>
            </g>
        )
    }

    return (
        <>

            <svg width="700" height="700" onMouseMove={(e) => {onMouseMove(e)}} 
                    style={{backgroundColor: 'lightgreen'}}>
                {renderPoint()}
            </svg>
            
        </>
    )
}

export default MousePoint;