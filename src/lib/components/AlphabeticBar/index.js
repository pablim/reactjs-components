import React from 'react';
import styles from './style.module.scss'

const Letter = ({letter, onClick}) => {

    const upperLetter = letter.toUpperCase()

    const handleClick = (e) => { 
        const listElement = document.getElementById('list')
        const firstNameOfLetterElement = listElement.querySelector('#'+upperLetter)
        listElement.scrollTop = firstNameOfLetterElement.offsetTop;

        onClick(upperLetter);
    }

    return (
        <div className={`${styles.char} ` }
                data-letter="{letter}" >
        
            <div 
                className={styles.letter}
                onClick={handleClick}
            >
                {upperLetter}
            </div>
            
            <div className={styles.tooltiptext}>
                {upperLetter}
            </div>
        </div>
    )
}

const List = ({ list }) => {

    const listItems = list.map((item, index, prevArr) => {
        
        if (index-1 >= 0 && prevArr[index-1].charAt(0) === item.charAt(0) ) {
            return (
                <div key={item}>
                    {item}
                </div>        
            )
        }

        return (
            <div id={item.charAt(0)} key={item}>
                {item}
            </div>
        )
    })

    return (
        <div id='list' className={styles.list}>
            {listItems}
        </div>
    )
}

const AlphabeticBarSearch = ({list}) => {

    const alphabetcArray = "abcdefghijklmnopqrstuvwxyz".split("")
    const sortedList = list.sort()

    const onClickLetter = (letter) => {
        console.log('click in ' + letter)
    }

    const letters = alphabetcArray.map((letter)=> 
        <Letter key={letter} letter={letter} onClick={onClickLetter}/>
    )

    return (
        <div className={styles.container}>
            <div>
                <List list={sortedList} />
            </div>
            <div>
                <div className={styles.lettersContainer} >
                    {letters}
                </div>
            </div>
        </div>
    )
}

export default AlphabeticBarSearch