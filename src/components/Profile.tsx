import { profile } from 'console';
import styles from '../styles/components/Profile.module.css';


export function Profile (){
    return(
       <div className={styles.profileContainer}>
        <img src="https://github.com/iarawatson2.png" alt="Iara Watson"/>
      
        <div>
            <strong>Iara Maria</strong>
            <p>
                <img src="icons/Up.svg" alt="Level"/>
                Level 1
            </p>
        </div>

        </div> 
        
    )
}