import { React, useEffect, useState } from 'react'
import './css/style.css'
// import { useIntl } from "react-intl";

const Pagination = (props) => {

    const {
        pagesToView,
        resultsPerPage,
        fetchUrl,
        containerIdToRetrieve,
        templateRow, // Template de uma linha para adicionar no container
        fieldNames, // nomes dos campos do objeto recuperado para exibir
        recordsAmount, // quantidade total de registos
        fetchAmountUrl, // endpoint para recuperar a quantidade total de registros caso não seja fornecido em recordsAmout
        linkPagesToShow, // quantos links de página mostrar
    } = props

    // const translate = useIntl().formatMessage;
    // States
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState(recordsAmount)
    const [pagesArray, setPagesArray] = useState([])
    const [currentPagePosition, setPosition] = useState(1)
    const [initPage, setInitPage] = useState(2)

    //const pages = Array.from({length: pagesToView}, (v, k) => k+1);

    const onClick = (pageNumber, currentPagePosition) => {
        if (pageNumber > pages) return

        console.log(`link to page ${pageNumber} - ${currentPagePosition}`)
        setCurrentPage(pageNumber)
        setPosition(currentPagePosition)
        retrieve(pageNumber)
    }

    const definePages = () => {
        if (pages === 0) return
        if (currentPage > pages) return
        
        let init = initPage
        let middle = Math.ceil(pagesToView/2)
        let maxIndexToPageRotateLeft = middle-1 // quando o indice for menor ou igual a este número roda pra esquerda
        let minIndexToPageRotateRight = middle+1 // quando o índice for maior ou igual a este número roda pra direita

        // console.log("maxIndexToPageRotateLeft", maxIndexToPageRotateLeft)
        // console.log("minIndexToPageRotateRight", minIndexToPageRotateRight)

        // console.log("current page", currentPage)
        // console.log("current position", currentPagePosition)
        // console.log("diference position", pagesToView-currentPagePosition)
        // console.log("pages", pages)
        console.log("pagesArray", pagesArray)

        if (currentPagePosition >= minIndexToPageRotateRight && pages > currentPage+(pagesToView-currentPagePosition)) {
            console.log("rotate right")
            init = init+1
        } 
        
        else if (currentPagePosition <= maxIndexToPageRotateLeft && currentPage-1 > 1) { //&& (currentPage-1 != 0 && currentPage > 1)
            console.log("rotate left")
            init = init-1
        }

        
        setPagesArray(Array.from({length: pagesToView}, (v, k) => {
            return k+init
        }))

        setInitPage(init)
    }

    const retrieveAmount = () => {
        var headers = new Headers()
        var init = {
            method: 'GET',
            headers,
            mode: 'cors',
            cache: 'default'
        }

        fetch(fetchAmountUrl, init)
            .then((response) => {
                if (response.ok) 
                    return response.json() 
                else console.log("erro in request")
            })
            .then((data) => {
                setPages(Math.ceil(data/resultsPerPage))
                console.log("quantidade buscada")
                definePages()
            })
    }

    const retrieve = (page) => {
        var headers = new Headers()
        var init = {
            method: 'GET',
            headers,
            mode: 'cors',
            cache: 'default'
        }

        let queryString = "?page="+page+"&resultsPerPage="+resultsPerPage

        fetch(fetchUrl+queryString, init)
            .then((response) => {
                if (response.ok) 
                    return response.json() 
                else console.log("erro in request")
            })
            .then((data) => {
                handleResponse(data)
            })
    }

    const handleResponse = (data) => {
        let container = document.getElementById(containerIdToRetrieve)
        container.innerHTML=""

        data.map((item)=>{
            // console.log(item[fieldNames[0]])
            // console.log(item[fieldNames[1]])
            let div = document.createElement("div")
            div.append(item.name)
            container.appendChild(div)
        })
    }

    // Effects
   
    useEffect(()=>{
        console.log('first effect')
        if (!recordsAmount) {
            console.log('buscando quantidade')
            retrieveAmount()
        } else {
            definePages()
        }
    }, [pages])
    useEffect(()=>{
        console.log('second effect')
        retrieve(1)
    })

    // Effect to pages
    useEffect(()=>{
        console.log("definindo paginas")
        definePages()
    }, [currentPage])

    return (
        <div className="">
            <ul className="pages-container">
                <li key="ant" className="page-number">
                    <a href="#" className="page-link" 
                            onClick={()=>{onClick(currentPage-1, pagesArray.indexOf(currentPage-1))}}>
                        Anterior
                    </a>
                </li>
                <li key="ini" className={`page-number ${1 == currentPage ? 'current' : ''}`}>
                    <a href="#" className="page-link" 
                            onClick={()=>{onClick(1, 1)}}>
                        1
                    </a>
                </li>
                {/* verifica se a primeira posição do array de páginas é maior que o número da primeira exibida */}
                {
                    pagesArray[0] > 2 ? 
                        <li className={`page-number`}>
                            <a href="#" className="page-link" 
                                    onClick={()=>{onClick("")}}>
                                ...
                            </a>
                        </li> 
                    : ''
                }
                {pagesArray.map((pageNumber, index)=> {
                    if (pageNumber!=1 && pageNumber < pages)
                        return (
                            <li key={pageNumber} className={`page-number ${pageNumber == currentPage ? 'current' : ''}`}>
                                <a href="#" className="page-link" 
                                        onClick={()=>{onClick(pageNumber, index+1)}}>
                                    {pageNumber}
                                </a>
                            </li>
                        )
                    })
                }
                {/* verifica se a última posição do array de páginas é menor qua a quantidade total de páginas */}
                {
                    pagesArray[pagesArray.length-1] < pages ? 
                        <li className={`page-number`}>
                            <a href="#" className="page-link" 
                                    onClick={()=>{onClick("")}}>
                                ...
                            </a>
                        </li> 
                    : ''
                }
                <li key="fim" className={`page-number ${pages == currentPage ? 'current' : ''}`}>
                    <a href="#" className="page-link" 
                            onClick={()=>{onClick(pages)}}>
                        {pages}
                    </a>
                </li>
                <li key="prox" className="page-number">
                    <a href="#" className="page-link" 
                            onClick={()=>{onClick(currentPage+1, pagesArray.indexOf(currentPage+1))}}>
                        Próximo
                    </a>
                </li>
            </ul>
            <div>Total de páginas: {pages}</div>
        </div>
    )
}

Pagination.defaultProps = {
    pagesToView: 5,
    resultsPerPage: 10,
    fieldNames: ["id", "name"],
    recordsAmount: 0
  };

export default Pagination
