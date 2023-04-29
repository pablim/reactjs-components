// import React, { createContext, useState, useEffect, useRef } from "react";
// import { useIntl } from "react-intl";
// import { useRouteMatch } from "react-router-dom";
// import { TesteGraficoSecaoSVG } from "./TesteGraficoSecaoSVG";


// /**------------------------------------------------------------------------------------------------------------------------------
//  * Componente de screen para os graficos de Seções
//  * @author Bruno Martini
//  */ //----------------------------------------------------------------------------------------------------------------------------

// const canvasOffset = 40;
// const canvasHeight = window.innerHeight; //108 = header;
// const canvasWidth = window.innerWidth; //445 = menu lateral;

// export default function SecaoScreen() {
  
//   const [responsiveWidth, setResponsiveWidth] = useState(1000);
//   const [responsiveHeight, setResponsiveHeight] = useState(1000);
//   const [showGridModal, setShowGridModal] = useState(false);
//   const [canvasParams, setCanvasParams] = useState({
//     canvasOffset: 0,
//     escala: 1,
//     responsiveHeight: 0,
//   });
//   const escalaRef = useRef(0);
//   const canvasOffsetRef = useRef(0);

//   const gridOptions = {
//       showGrid: true,
//       gridHorizontalSpacing: 10,
//       gridVerticalSpacing: 10,
//       gridColor: "#e1e1e1",
//     }

//   canvasOffsetRef.current = canvasOffset;

//   return (
//     <BoxWrapper>
//       <InfoWrapper>
//         <SecaoWrapper className={'sysdam-secao-viewer'}>
//             <div style={{ height: canvasHeight, width: canvasWidth }}>
//               <TesteGraficoSecaoSVG
//                 showGrid={showGrid}
//                 gridHorizontalSpacing={gridHorizontalSpacing}
//                 gridVerticalSpacing={gridVerticalSpacing}
//                 gridColor={gridColor}
//                 setShowGridModal={setShowGridModal}
//                 canvasHeight={canvasHeight}
//                 canvasWidth={canvasWidth}
//                 canvasOffset={canvasOffset}
//                 setFlippedOptions={setFlippedOptions}
//                 responsiveWidth={responsiveWidth}
//                 setResponsiveWidth={setResponsiveWidth}
//                 responsiveHeight={responsiveHeight}
//                 setResponsiveHeight={setResponsiveHeight}
//                 escalaRef={escalaRef}
//               />
//           </div>
//         </SecaoWrapper>
//       </InfoWrapper>
//     </BoxWrapper>
//   );
// }

// const BoxWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   height: 100%;
//   border: 1px solid ${(props) => props.theme.BORDER_COLOR};
//   border-radius: 3px;
//   background: #fff;

//   .header-wrapper {
//     padding: 25px;
//   }
// `;

// const InfoWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const SecaoWrapper = styled.div`
//     /* padding: 0px; */
//     width: 100%;
//     height: 100%;
//    /*  background: grey; */
//     .ant-btn-round.ant-btn-lg {
//         height: 150px;
//         width: 150px;
//         font-size: 16px;
//         border-radius: 0px;
//     }
//     .add-widget {
//         cursor: pointer;
//     }

//     .ant-row {
//         justify-content: center !important;
//         border-color: #0275ee;
//     }

//     .row-actions {
//         width: 100%;
//         height: 100%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }


//     .plusCircle {
//         font-size: 30px;
//         align-self: center;
//     }

//     .ant-card-body{
//         display: flex !important;
//         background-color: #FFFFFF;
//         align-items: center !important;
//         justify-content: center !important;
//         width: 300px;
//         height: 215px;
//         font-size: 13px;   
//         color:  #c58b2f;
//         margin:0;
//         font-size: 13px;
//         border-radius: 5px;
//         margin:0;
//         font-size: 13px;
//     }

//     .message-new-widget {
//         display: flex !important;    
//         text-align: center;
//         width: 100%;
//         margin-top: 5% !important;
//         font-size: 17px;
//     }

//     .ant-card-bordered{
//         display: flex;
//         align-items: center !important;
//         justify-content: center !important;
//     }
// `;
// const SysdamSpinners = styled.div`
//     display: flex;
//     justify-content: center;
// `;
