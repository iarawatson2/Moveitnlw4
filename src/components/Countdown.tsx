import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'


let countDownTimeout: NodeJS.Timeout;

export function Countdown(){
    const [time,setTime]= useState(0.1 * 60)
    const [isActive, setIsActive]= useState(false);
    const [hasFisished, setHasFinished]= useState(false);

    const minutes= Math.floor(time / 60);
    const seconds= time % 60;

    const [minuteLeft,minuteRight]= String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight]= String(seconds).padStart(2,'0').split('');


    //iniciar o ciclo
    function startCountDown(){
        setIsActive(true);
    }
    //Parar o ciclo
    function resetCountdown(){
        clearTimeout(countDownTimeout)
        setIsActive(false);
        setTime(0.1*60)
    }

    useEffect(()=>{
        if(isActive && time > 0){
          countDownTimeout = setTimeout(()=>{
                setTime(time -1)
            }, 1000)
        }else if(isActive && time === 0){
        setHasFinished(true);
        setIsActive(false);

    }
}, [isActive, time])

    return(
        <div>
        <div className={styles.countDownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
        </div>

        {hasFisished ? (
             <button 
             disabled
             className={styles.countdownButton}>
              Ciclo encerrado
             </button> 
        ) :(
          <> 
    
        {isActive ? (
            <button type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}>
               Abandonar ciclo
            </button> 
        ) : (
            <button type="button"
            className={styles.countdownButton}
            onClick={startCountDown}>

        
            Iniciar um novo ciclo
            </button>
        )}
            </>
        )}

       
    
        </div>
    )
}