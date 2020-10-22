import React from "react";
import styles from './Shortcuts.module.css';

const Shortcuts = (props)=>{
    return(
        <div className={styles.shc}>
            <h3>Shortcuts</h3>
            <p>Profile</p>
            <p>Messages</p>
            <p>Newsfeed</p>
        </div>
    )
}

export default Shortcuts;