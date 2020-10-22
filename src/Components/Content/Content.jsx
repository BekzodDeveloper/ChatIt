import React from "react";
import styles from './Content.module.css';
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";

const Content = (props)=>{
    return(
        <div className={styles.content}>
            <h1>Content</h1>
            {/*<Profile/>*/}
            {/*<Messages/>*/}
            {/*<Friends/>*/}
        </div>
    )
}

export default Content;