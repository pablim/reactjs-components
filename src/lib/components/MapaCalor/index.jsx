import React, {useEffect} from 'react';

const HeatMap = ({  }) => {

    const matrizColors = []

    const colorPoint = (fatorSeguranca) => {

        /* var h = (1.0 - fatorSeguranca) * 240
        return "hsl(" + h + ", 100%, 50%)"; */

        if (fatorSeguranca >= 2.5) { // fatorSeguranca: Abaixo de 1.5 vermelho PERIGO. Acima azul ESTÁVEL
            return '#3F55A5';
        } else if (fatorSeguranca >= 2 && fatorSeguranca < 2.5) {
            return '#7CB2D4';
        } else if (fatorSeguranca >= 1.5 && fatorSeguranca < 2) {
            return '#BADFED';
        } else if (fatorSeguranca >= 1 && fatorSeguranca < 1.5) {
            return '#FED88C';
        } else if (fatorSeguranca >= 0.5 && fatorSeguranca < 1) {
            return '#F77F4B';
        } else if (fatorSeguranca >= 0 && fatorSeguranca < 0.5) {
            return '#E04730';
        } else if (fatorSeguranca < 0) {
            return '#A50026';
        }
    }

    // const pontosRedimensionados = useMemo(() => {
    //     return analisePontos.map((ponto) => ({
    //         y: responsiveHeight - canvasOffset - ponto.coordY * escala,
    //         x: ponto.coordX * escala + canvasOffset,
    //         value: ponto.fatorSeguranca,
    //         color: colorPoint(ponto.fatorSeguranca)
    //     }));
    // }, [analisePontos, canvasOffset, responsiveHeight, escala]);

    // const getWrappingColor = (linha, coluna, position) => {
    //     let arr = []
    //     if (linha !== 0 && linha !== (spaceY - 1) && coluna !== 0 && coluna !== (spaceX - 1)) {
    //         //Em cima Esquerda
    //         arr.push(pontosRedimensionados[position - spaceY + 1].color);
    //         //Em cima
    //         arr.push(pontosRedimensionados[position + 1].color)
    //         //Em cima direita
    //         arr.push(pontosRedimensionados[position + spaceY + 1].color)

    //         //Esquerda
    //         arr.push(pontosRedimensionados[position - spaceY].color)
    //         //Direita
    //         arr.push(pontosRedimensionados[position + spaceY].color)

    //         //Embaixo esquerda
    //         arr.push(pontosRedimensionados[position - spaceY - 1].color)
    //         //Embaixo
    //         arr.push(pontosRedimensionados[position - 1].color)
    //         //Embaixo direita
    //         arr.push(pontosRedimensionados[position + spaceY - 1].color)
    //     }
    //     return arr;
    // }

    const applyColors = () => {
        debugger
        //console.log('pontosRedimensionados', pontosRedimensionados)
        matrizColors.map((item, index)=> {
            console.log(item, index)
        })
        
    }

    const defineMatrizColors = () => {
        //let matrizColors = [];

        for (var i = 0; i = 3; i++) {
            let linesColor = []
            for (var j = 0; j = 3; j++) {
                
                linesColor.push({
                    color: i + "," + j,
                    wrappingColor: []
                })
            }
            matrizColors.push(linesColor);
        }
    }

    const teste = () => {
        applyColors()
    }

    useEffect(() => {
        defineMatrizColors()
        console.log(matrizColors)
    }, [])

    return (
        <React.Fragment>
            {matrizColors.map((linhas, idx ) => (
                <div key={idx} style={{ display: 'flex' }}>

                    {linhas.map((obj, num ) => (
                        <div key={num} style={{
                            minHeight: 20,
                            minWidth: 20,
                            background: obj.color
                        }}
                        />
                    ))}

                    <br />
                </div>
            ))}
        </React.Fragment>
    )
}

export default HeatMap;