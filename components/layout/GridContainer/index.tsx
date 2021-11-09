import React from 'react'
import styles from './style.module.scss'



const GridContainer:React.FC = ({ children }) => {
    return(
        <div className={styles.gridContainer}>
            {children}
        </div>
    )
}

export default GridContainer;