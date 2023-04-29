import React, { useState, useEffect, useRef } from 'react'

import styles from './styles.module.scss'

const Button = ({
    effect
}) => {
    console.log('effect', effect);
    
    const [effectName, setEffectName] = useState()
    const [applyEffect, setApplyEffect] = useState(false)
    const buttonRef = useRef()

    const defineEffect = (effect) => {
        let definition = {}

        if (effect?.name) {
            if (effect?.action) {
                definition =  {
                    onClick: () => {

                    }
                }
            }

        }

    }

    const onClick = () => {
        debugger
        setApplyEffect((prev) => !prev)

        setTimeout(() => {
            setApplyEffect(false)
        }, 0.8 * 1000)

        setTimeout(() => {

            if (effect?.delayOnRestart) {
                setInterval(() => {
                    setApplyEffect((prev) => !prev)
                }, 4000/2)
    
                // setInterval(() => {
                //     setApplyEffect(false)
                // }, 2000 + (0.8 * 1000))
            }
        }, 0.8 * 1000)


    }

    

    return <div className={
            `${styles.Button} ` + 
            `${effect?.name && applyEffect ? styles[effect.name] : ''}`
        }
        ref={buttonRef}
        onClick={onClick}
    >
        Button
    </div>
}

export default Button