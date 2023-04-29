// import React, { useContext, useEffect } from 'react';
// import _ from 'lodash';
// import { useRouteMatch } from "react-router-dom";
// import styled from 'styled-components';
// import { useIntl } from 'react-intl';
// import paths from "../../../../../../routes/paths";
// import { FiltrosGraficoContext } from '../../screen/ScreenAnalysisCanvas';
// import { BodyGraficoContext } from '../BodyGraficoSecao'
// import { GraficoSecaoSVG } from '../../Components/GraficoSecaoSVG/GraficoSecaoSVG';

// const canvasOffset = 40;
// const canvasHeight = window.innerHeight; //108 = header;
// const canvasWidth = window.innerWidth; //445 = menu lateral;

// /**--------------------------------------------------------------
//  * Componente Content Grafico Secao => {GraficoSecaoScreen}
//  * @author Bruno Martini
//  *///------------------------------------------------------------

// export function ContentGraficoSecao({ importFile, awaitingData }) {
    
    
//     const {
//         isLoading,
//         gridOptions,
//         setShowGridModal,
//         setShowTabelaMateriaisModal,
//         setShowAddSecaoGeometria,
//         setShowBlocoBuscaModal,
//         secaoInstrumentos,
//         secaoImportacao, setSecaoImportacao,
//         secaoMateriais, setSecaoMateriais,
//         secaoMateriaisUnicos,
//         secaoGeometrias,
//         blocosBusca,
//         fazerProjecaoPonto,
//         fazerAnaliseSecao,
//         analiseDetalhes,
//         analiseSecao,
//         projecao,
//         setProjecao,
//         secao, setSecao,
//         setDrawerInstrumentoVisivel,
//         setDrawerMaterialVisivel,
//         setInstrumento,
//         setMaterial,
//         exibirMateriais,
//         secaoFromApi, secaoError, 
//         flippedOptions,
//         setFlippedOptions,
//         secaoLinhasFreaticas,
//         newLinhaFreatica, setNewLinhaFreatica,
//         newBlocoBusca, setNewBlocoBusca,
//         newSecaoGeometria, setNewSecaoGeometria,
//         setShowSecaoMaterialModal,
//         linhaFreatica, setLinhaFreatica,
//         secaoGeometria, setSecaoGeometria,
//         showUpdateSecaoGeometria, setShowUpdateSecaoGeometria,
//         showUpdateBlocoBuscaModal, setShowUpdateBlocoBuscaModal,
//         blocoBusca, setBlocoBusca,
//         setToggleCuckooModal,
//         analisePlaxis,
//         toggleEntryExitPointsModal,
//         waitingEntryExitPoints,
//         stepsEntryExitLine,
//         entryExitLine,
//         setToggleEntryExitPointsModal,
//         setWaitingEntryExitPoints,
//         setStepsEntryExitLine,
//         setEntryExitLine,
//         addEntryExitPoints,
//         contornoSuperior,
//         entryExitLineObject,
//         setCanvasParams,
//         initEntryExitLine,
//         toggleWaitingEntryExitPoints,
//         waitingFractalPoints,
//         setWaitingFractalPoints,
//         setToggleConfirmRemakeAnalisisModal,
//         ifExistsAnalisis,
//         toggleLamelasProjecaoModal,
//         showHeatmap, 
//         setShowHeatmap,
//         setToggleLamelasProjecaoModal,
//         doProjection, 
//         setDoProjection,
//         selectedLamela,
//         setSelectedLamela,
//         pointsLamelas,
//         setPointsLamelas,
//         lamelaHover, 
//         setLamelaHover,
//         circleLamelas, 
//         setCircleLamelas,
//         defineArcoLamela,
//         limitYMaiorLamelas, 
//         setLimitYMaiorLamelas,
//         limitYMenorLamelas, 
//         setLimitYMenorLamelas
//     } = useContext(FiltrosGraficoContext);

//     const {
//         responsiveWidth, setResponsiveWidth,
//         responsiveHeight, setResponsiveHeight,
//         escalaRef,
//         canvasOffsetRef,
//     } = useContext(BodyGraficoContext);

//     const {
//         showGrid,
//         gridHorizontalSpacing,
//         gridVerticalSpacing,
//         gridColor
//     } = gridOptions;

//     canvasOffsetRef.current = canvasOffset;
    
//     useEffect(afterObterSecao, [secaoFromApi]);
//     useEffect(errorSecao, [secaoError]);

//     }

//     function errorSecao() {
//         if (!secaoError) return;
//     }

   

//     function afterObterSecao() {
//         if (!secaoFromApi) return
//         setSecao(secaoFromApi.Secao)
//         setSecaoMateriais(secaoFromApi.Materiais)
//         setSecaoImportacao(secaoFromApi.SecaoImportacao)
//         listarInstrumentosPorSecao();
//         listarLinhasPorSecao();
//     }

//     function listarInstrumentosPorSecao() {
       
//     }

    

//     function listarLinhasPorSecao() {
//         if (!secaoFromApi) return;
//     }

//     return (
//         <SecaoWrapper className={'sysdam-secao-viewer'}>
//             <div style={{ height: canvasHeight, width: canvasWidth }}>
//                 <GraficoSecaoSVG
//                     showGrid={showGrid}
//                     gridHorizontalSpacing={gridHorizontalSpacing}
//                     gridVerticalSpacing={gridVerticalSpacing}
//                     gridColor={gridColor}
//                     setShowGridModal={setShowGridModal}
//                     setShowTabelaMateriaisModal={setShowTabelaMateriaisModal}
//                     setShowAddSecaoGeometria={setShowAddSecaoGeometria}
//                     setShowSecaoMaterialModal={setShowSecaoMaterialModal}
//                     /* setShowAddSecaoMaterialModal={setShowAddSecaoMaterialModal}
//                     setShowCadastrarLinhaModal={setShowCadastrarLinhaModal} */
//                     setShowBlocoBuscaModal={setShowBlocoBuscaModal}
//                     setLinhaFreatica={setLinhaFreatica}
//                     setSecaoGeometria={setSecaoGeometria}
//                     setShowUpdateSecaoGeometria={setShowUpdateSecaoGeometria}
//                     setShowUpdateBlocoBuscaModal={setShowUpdateBlocoBuscaModal}
//                     setBlocoBusca={setBlocoBusca}
//                     canvasHeight={canvasHeight}
//                     canvasWidth={canvasWidth}
//                     canvasOffset={canvasOffset}
//                     fazerProjecaoPonto={fazerProjecaoPonto}
//                     fazerAnaliseSecao={fazerAnaliseSecao}
//                     analiseDetalhes={analiseDetalhes}
//                     analiseSecao={analiseSecao}
//                     projecao={projecao}
//                     setProjecao={setProjecao}
//                     secao={secao}
//                     secaoMateriais={secaoMateriais}
//                     secaoMateriaisUnicos={secaoMateriaisUnicos}
//                     secaoGeometrias={secaoGeometrias}
//                     blocosBusca={blocosBusca}
//                     secaoImportacao={secaoImportacao}
//                     setDrawerInstrumentoVisivel={setDrawerInstrumentoVisivel}
//                     setDrawerMaterialVisivel={setDrawerMaterialVisivel}
//                     setInstrumento={setInstrumento}
//                     setMaterial={setMaterial}
//                     secaoInstrumentos={secaoInstrumentos}
//                     exibirMateriais={exibirMateriais}
//                     exibirLegenda={true}
//                     isLoading={isLoading}
//                     addLinhaFreaticaMode={flippedOptions?.cardType === "CadastrarLinhaFreatica"}
//                     addProjectMaterialMode={flippedOptions?.cardType === "CadastrarProjetoMaterial"}
//                     addPolilineMode={flippedOptions?.cardType === "CadastrarLinha"}
//                     addPoligonMode={flippedOptions?.cardType === "CadastrarPoligono"}
//                     addBlocoBuscaMode={flippedOptions?.cardType === "CadastrarBlocoBusca"}
//                     setFlippedOptions={setFlippedOptions}
//                     analisePlaxis={analisePlaxis}
//                     setToggleCuckooModal={setToggleCuckooModal}
//                     secaoLinhasFreaticas={secaoLinhasFreaticas}
//                     newLinhaFreatica={newLinhaFreatica}
//                     setNewLinhaFreatica={setNewLinhaFreatica}
//                     /* newProjetoMaterialPontos={newProjetoMaterialPontos}
//                     setNewProjetoMaterialPontos={setNewProjetoMaterialPontos} */
//                     newBlocoBusca={newBlocoBusca}
//                     setNewBlocoBusca={setNewBlocoBusca}
//                     newSecaoGeometria={newSecaoGeometria}
//                     setNewSecaoGeometria={setNewSecaoGeometria}
//                     responsiveWidth={responsiveWidth}
//                     setResponsiveWidth={setResponsiveWidth}
//                     responsiveHeight={responsiveHeight}
//                     setResponsiveHeight={setResponsiveHeight}
//                     escalaRef={escalaRef}
//                     toggleEntryExitPointsModal={toggleEntryExitPointsModal}
//                     waitingEntryExitPoints={waitingEntryExitPoints}
//                     stepsEntryExitLine={stepsEntryExitLine}
//                     entryExitLine={entryExitLine}
//                     setToggleEntryExitPointsModal={setToggleEntryExitPointsModal}
//                     setWaitingEntryExitPoints={setWaitingEntryExitPoints}
//                     setStepsEntryExitLine={setStepsEntryExitLine}
//                     setEntryExitLine={setEntryExitLine}
//                     addEntryExitPoints={addEntryExitPoints}
//                     contornoSuperior={contornoSuperior}
//                     entryExitLineObject={entryExitLineObject}
//                     setCanvasParams={setCanvasParams}
//                     analisePlaxis={analisePlaxis}
//                     initEntryExitLine={initEntryExitLine}
//                     toggleWaitingEntryExitPoints={toggleWaitingEntryExitPoints}
//                     waitingFractalPoints={waitingFractalPoints}
//                     setWaitingFractalPoints={setWaitingFractalPoints}
//                     setToggleConfirmRemakeAnalisisModal={setToggleConfirmRemakeAnalisisModal}
//                     ifExistsAnalisis={ifExistsAnalisis}
//                     toggleLamelasProjecaoModal={toggleLamelasProjecaoModal}
//                     showHeatmap={showHeatmap} 
//                     setShowHeatmap={setShowHeatmap}
//                     setToggleLamelasProjecaoModal={setToggleLamelasProjecaoModal}
//                     doProjection={doProjection}
//                     setDoProjection={setDoProjection}
//                     selectedLamela={selectedLamela}
//                     setSelectedLamela={setSelectedLamela}
//                     pointsLamelas={pointsLamelas}
//                     setPointsLamelas={setPointsLamelas}
//                     lamelaHover={lamelaHover}
//                     setLamelaHover={setLamelaHover}
//                     circleLamelas={circleLamelas}
//                     setCircleLamelas={setCircleLamelas}
//                     defineArcoLamela={defineArcoLamela}
//                     limitYMaiorLamelas={limitYMaiorLamelas}
//                     setLimitYMaiorLamelas={setLimitYMaiorLamelas}
//                     limitYMenorLamelas={limitYMenorLamelas}
//                     setLimitYMenorLamelas={setLimitYMenorLamelas}
//                 />
//             </div>
//         </SecaoWrapper>
//     );
//     /* #endregion */

// /* #region  styled-components */
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
// /* #endregion */