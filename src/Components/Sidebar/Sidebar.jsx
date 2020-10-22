import React from "react";
import styles from './Sidebar.module.css';
import Mypage from "./Mypage/Mypage";

const Sidebar = (props)=>{
    return(
        <div className={styles.mypage}>
            <h3>Sidebar</h3>
            <Mypage/>
        </div>
    )
}

export default Sidebar;