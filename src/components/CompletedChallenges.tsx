import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallengs(){
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    )
}