// import moment from 'moment';
// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, ToolbarButton, zoom} from 'react-svg-pan-zoom';
// import { notification, Spin, Space } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
// import styled from 'styled-components';

// /* import { FiltrosGraficoContext } from '../../../modules/Monitoramento/Instrumentos/Instrumentos/Secao/screen/SecaoScreen'; */
// import { useWindowSize } from '../../../../../../hooks/useWindowSize';
// import InstrumentoEmSecao from './InstrumentoEmSecao';
// import LinhaFreatica from './LinhaFreatica';
// import Poliline from './Poliline';
// import BlocoBusca from './BlocoBusca';
// import NewLinhaFreatica from './NewLinhaFreatica';
// /* import { LinhaFreaticaDTO, LinhaFreaticaPontoDTO } from '../../../interfaces/LinhaFreatica'; */
// // import * as d3 from "d3";

// import Group from './Group'
// import handleClickUtils from '../../../../../../utils/handleClickUtils';
// import CustomToolbar from './CustomToolbar';

// const TIPO_INSTRUMENTO_PIEZOMETRO = 1
// const TIPO_INSTRUMENTO_MEDIDOR_NIVEL_DAGUA = 2

// export function TesteGraficoSecaoSVG({
//     showGrid,
//     gridHorizontalSpacing,
//     gridVerticalSpacing,
//     gridColor,
//     setShowGridModal,
//     setShowTabelaMateriaisModal,
//     setShowAddSecaoGeometria,
//     setShowBlocoBuscaModal,
//     setShowUpdateBlocoBuscaModal,
//     setShowSecaoMaterialModal,
//     canvasWidth,
//     canvasHeight,
//     canvasOffset,
//     secao,
//     setDrawerInstrumentoVisivel,
//     setDrawerMaterialVisivel,
//     setInstrumento,
//     setMaterial,
//     secaoMateriais,
//     secaoGeometrias,
//     blocosBusca,
//     secaoImportacao,
//     secaoInstrumentos,
//     isLoading,
//     exibirMateriais = true,
//     exibirLegenda = false,
//     /* addProjectMaterialMode = false, */
//     addPolilineMode = false,
//     addPoligonMode = false,
//     addBlocoBuscaMode = false,
//     setFlippedOptions = null,
//     secaoLinhasFreaticas = null,
//     /* newLinhaFreatica, setNewLinhaFreatica,
//     newProjetoMaterialPontos, setNewProjetoMaterialPontos, */
//     setBlocoBusca,
//     newBlocoBusca, setNewBlocoBusca,
//     newSecaoGeometria, setNewSecaoGeometria,
//     refGraficoSecao,
//     responsiveWidth,
//     setResponsiveWidth,
//     responsiveHeight,
//     setResponsiveHeight,
//     escalaRef
//     // changeControlPositio
// }) {

//     /* #region  Hooks */
//     const [tool, setTool] = useState(TOOL_NONE);
//     const [value, setValue] = useState(INITIAL_VALUE);

//     const wrapper = useRef(null);
//     const lineXRef = useRef(null);
//     const lineRef = useRef(null);
//     const viewer = useRef(null);

//     const size = useWindowSize();

//     //if (!secao || !secaoMateriais || !secaoImportacao) return null;
//     let diferenceX = 0
//     let diferenceY = 0
//     let secaoImportacaoMaxX = 0
//     let secaoImportacaoMinX = 0
//     let secaoImportacaoMaxY = 0
//     let secaoImportacaoMinY = 0
//     if (secaoImportacao) {
//         diferenceX = secaoImportacao.maxX - secaoImportacao.minX
//         diferenceY = secaoImportacao.maxY - secaoImportacao.minY
//         secaoImportacaoMaxX = secaoImportacao.maxX
//         secaoImportacaoMinX = secaoImportacao.minX
//         secaoImportacaoMaxY = secaoImportacao.maxY
//         secaoImportacaoMinY = secaoImportacao.minY
//     }

//     const xR = responsiveWidth; //xRight
//     const yB = responsiveHeight - canvasOffset; //yBottom
//     const escalaX = responsiveWidth / (diferenceX)
//     const escalaY = responsiveHeight / (diferenceY)
//     //const escala = escalaX > escalaY ? escalaY : escalaX
//     const [escala, setEscala] = useState(1);

//     // Escala de tamanho
//     const [scalaSize, setScalaSize] = useState(40);

//     const [ticks, setTicks] = useState(10);

//     if (escalaRef) escalaRef.current = escala;

//     // console.log('size', size)
//     // console.log('convasOffset', canvasOffset)
//     // console.log('responsiveHeight', responsiveHeight)
//     // console.log('responsiveWidth', responsiveWidth)
//     // if (secaoImportacao) {
//     //     console.log('secaoImportacao.maxX', secaoImportacao.maxX)
//     //     console.log('secaoImportacao.minX', secaoImportacao.minX)
//     //     console.log('secaoImportacao.maxY', secaoImportacao.maxY)
//     //     console.log('secaoImportacao.minY', secaoImportacao.minY)
//     // } else {
//     //     console.log('secaoImportacao.maxX', 0)
//     //     console.log('secaoImportacao.minX', 0)
//     //     console.log('secaoImportacao.maxY', 0)
//     //     console.log('secaoImportacao.minY', 0)
//     // }
//     // console.log('escalaX (responsiveWidth / (secaoImportacao.maxX - secaoImportacao.minX)) ', escalaX)
//     // console.log('escalaY (responsiveHeight / ((secaoImportacao.maxY - secaoImportacao.minY))) ', escalaY)
//     //console.log('escala (escalaX > escalaY ? escalaY : escalaX)', escala) 
//     // console.log('gridHorizontalSpacing', gridHorizontalSpacing)
//     // console.log('gridVerticalSpacing', gridVerticalSpacing)
    
//     /* #endregion */

//     useEffect(()=>{
//         //drawTicksY(escala)
//         //renderGrid()
//     }, [scalaSize])

//     useEffect(onWidthChanges, [wrapper.current, size]);

//     function onWidthChanges() {
//         if (!wrapper) return
//         if (!wrapper.current) return
//         if (wrapper.current.clientWidth !== responsiveWidth)
//             setResponsiveWidth(wrapper.current.clientWidth)

//         if (wrapper.current.clientHeight !== responsiveHeight)
//             setResponsiveHeight(wrapper.current.clientHeight - 14)
//     }

//     function setRef(ref) {
//         if (refGraficoSecao)
//             refGraficoSecao.current = ref;
//         if (wrapper)
//             wrapper.current = ref;
//     }

//     function toggleAddPolilineMode() {
//         if (!addPolilineMode) setFlippedOptions({ isFlipped: false, cardType: "CadastrarLinha" })
//         else {
//             if (newSecaoGeometria.tblSecaoGeometriaPonto.length > 1) setShowAddSecaoGeometria(true)
//             else setNewSecaoGeometria({
//                 visivel: true,
//                 color: "#000",
//                 espessura: 4,
//                 tblSecaoGeometriaPonto: [],
//             })
//             setFlippedOptions({ isFlipped: true, cardType: "Barragens" })
//         }
//     }

//     function toggleAddPoligonMode() {
//         if (!addPoligonMode) setFlippedOptions({ isFlipped: true, cardType: "CadastrarPoligono" })
//         else setFlippedOptions({ isFlipped: false, cardType: "Barragens" })
//     }

//     function toggleAddBlocoBuscaMode() {
//         if (!addBlocoBuscaMode) setFlippedOptions({ isFlipped: false, cardType: "CadastrarBlocoBusca" })
//         else setFlippedOptions({ isFlipped: true, cardType: "Barragens" })
//     }

//     function onZoom(e) { 

//         let newScalaSize = scalaSize + (e.deltaY * -0.01 < 0 ? -5 : 5)
//         let newTicks = ticks + (e.deltaY * -0.01 < 0 ? 5 : -5)

        
//         setScalaSize(newScalaSize)
//         setTicks(newTicks)
        
//     }

//     function onMouseMove(e) {
//     }

//     //Ticks em Y ----------------------------------------------------------------------------------------------------------------------------
//     function ticksY() {
//         var ticksY = [];
//         for (
//                 let index = 0; 
//                 index < Math.round(responsiveHeight / scalaSize); 
//                 index++
//             ) {
//             ticksY.push(index);
//         }
//         return ticksY
//     }

//     //Ticks em X ----------------------------------------------------------------------------------------------------------------------------
//     function ticksX() {
//         var ticksX = [];
//         for (
//                 let index = 0; 
//                 index < Math.round(responsiveWidth / scalaSize); 
//                 index++
//             ) {
//             ticksX.push(index);
//         }
//         return ticksX
//     }

//     function drawTicksX(escala) {
//         var ticksXarray = ticksX()
//         var ticksXSvg = <g>
//             {ticksXarray && ticksXarray.map((index, number) => {
//                 //console.log('Tick', (scalaSize * index) + canvasOffset)
//                 return (
//                     <g key={index}>
//                         <text x={(scalaSize * index) + canvasOffset - 5} y={25} 
//                                 fill="black" fontSize={10}>
//                             {index * 10}
//                         </text>
//                         <line 
//                             x1={(scalaSize * index) + canvasOffset} y1={2} 
//                             x2={(scalaSize * index) + canvasOffset} y2={7} 
//                             style={{ stroke: "black", strokeWidth: 1.5 }} />
//                     </g>
//                 )}
//             )}
//         </g>
        
//         return ticksXSvg
//     }

//     function drawTicksY() {
//         var ticksYarray = ticksY()
//         var ticksYSvg = <g>
//             {
//                 ticksYarray && ticksYarray.map((index) => {
//                     return(
//                         <g key={index}>
//                             <text 
//                                     x={canvasOffset - 7} 
//                                     y={(responsiveHeight - (2 * canvasOffset)) - (scalaSize * index) + canvasOffset} 
//                                     fill="black" 
//                                     fontSize={10} 
//                                     textAnchor="end">
//                                 {(index * 10) + 900}
//                             </text>
//                             <line 
//                                 x1={canvasOffset} y1={responsiveHeight - ((scalaSize * index) + canvasOffset)} 
//                                 x2={canvasOffset - 5} y2={responsiveHeight - ((scalaSize * index) + canvasOffset)} 
//                                 style={{ stroke: "black", strokeWidth: 1.5 }} />
//                         </g>
//                     )}
//                 )
//             }
//         </g>
//         return ticksYSvg
//     }

//     function drawGradeX(index, showGrid, escala) {
//         return (
//             <g key={index}>
//                 {showGrid === true && 
//                     <line 
//                         x1={(scalaSize * index)  } y1={responsiveHeight - canvasOffset} 
//                         x2={(scalaSize * index)  } y2={0} 
//                         style={{ stroke: gridColor, strokeWidth: 1.5 }}></line>}
//             </g>
//         );
//     }

//     function drawGradeY(index, showGrid, escala) {
//         return (
//             <g key={index}>
//                 {showGrid === true && index > 0 && 
//                     <line 
//                         x1={0} y1={responsiveHeight - ((scalaSize * index) + canvasOffset)} 
//                         x2={responsiveWidth} y2={responsiveHeight - ((scalaSize * index) + canvasOffset)} 
//                         style={{ stroke: gridColor, strokeWidth: 1.5 }}></line>}
//             </g>
//         );
//     }

//     function renderGrid() {

//         //Linhas de contorno ----------------------------------------------------------------------------------------------------------------------------
//         var contorno = <g>
//             {/* <line x1={canvasOffset} y1={canvasOffset} x2={xR} y2={canvasOffset} style={{ stroke: gridColor, strokeWidth: 0.5 }} /> */}
//             <line x1={xR} y1={canvasOffset} x2={xR} y2={yB} style={{ stroke: gridColor, strokeWidth: 0.5 }} />
//         </g>

//         var ticksXarray = ticksX(escala);
//         var ticksXSvg = <g>
//             {ticksXarray && ticksXarray.map((index) => drawGradeX(index, showGrid, escala))}
//         </g>

//         var ticksYarray = ticksY(escala);
//         var ticksYSvg = <g>
//             {ticksYarray && ticksYarray.map((index) => drawGradeY(index, showGrid, escala))}
//         </g>

//         return (
//             <g>
//                 {contorno}
//                 {ticksXSvg}
//                 {ticksYSvg}
//             </g>
//         );

//     }

//     const renderReferenceGuide = () => {

//         const eixoX = <g>
//             <line x1={canvasOffset} y1={yB} x2={xR} y2={yB} style={{ stroke: "magenta", strokeWidth: 1.5 }} ref={lineXRef} />
//         </g>

//         return (
//             <g>
//                 {eixoX}
//             </g>
//         )
//     }

//     return (
//         <div className={'sysdam-svg-graph'} style={{ width: '100%', height: '100%', position: 'relative' }} ref={setRef}>
//             {
//                 isLoading ? (
//                     <Center>
//                         <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
//                     </Center>
//                 ) : (
//                     <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                    
//                         <div style={{display: 'flex', height: `${responsiveHeight-canvasOffset}px`}}>
//                             <div style={{height: '100%', width: '40px'}}>
                                
//                                 <svg width="42" height="100%">
//                                     <line 
//                                         x1={canvasOffset} y1={0} 
//                                         x2={canvasOffset} y2="100%" 
//                                         style={{ stroke: "black", strokeWidth: 1.5 }} />
//                                     {drawTicksY()}
//                                 </svg>
//                             </div>
                            
//                             <div>
                                
//                                 <svg width={responsiveWidth} height={responsiveHeight} onWheel={onZoom} onMouseMove={onMouseMove}>
//                                     {renderGrid()}
//                                     {/* {renderReferenceGuide()} */}
//                                 </svg>
//                             </div>
//                         </div>
//                         <div style={{width: '100%', position: 'relative', top: '-2px'}}>
//                             <svg width="100%" height="30" >
//                                 <line 
//                                     x1={canvasOffset-1} y1={2} 
//                                     x2="100%" y2={2} 
//                                     style={{ stroke: "black", strokeWidth: 1.5 }} />
//                                 {drawTicksX()}
//                             </svg>
//                         </div>
                    
                    
//                     </div>
//                 )
//             }
//         </div>
    
//     );

//     /* #endregion */

// }

// const Center = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// const LegendsHolder = styled.div`
//     position: absolute;
//     width: 300px;
//     overflow: auto;
//     box-shadow: 2px 2px 19px -6px rgba(0,0,0,0.75);
//     height: 300px;
//     background-color: white;
//     z-index: 1;
//     right: 125px;
//     padding: 25px;
//     top: 27px;
// `

// const FiltroHolder = styled.div`
//     position: absolute;
//     width: 200px;
//     overflow: auto;
//     height: 120px;
//     background-color: white;
//     z-index: 1;
//     right: 125px;
//     padding: 25px;
//     top: 350px;
// `

// const StyeldPolyline = styled.polyline`
//   &:mouseover {
//     stroke: red;
//     strokeWidth: 5;
//   }
// `