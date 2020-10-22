import React from "react";
import styles from './Nav.module.css';
import ShortInfo from "./ShortInfo/ShortInfo";
import Shortcuts from "./Shortcuts/Shortcuts";
import Friendslist from "./Friendslist/Friendslist";



const Nav = (props)=>{
    return(
        <div className={styles.nav}>
            {/*<h1>Nav</h1>*/}
            {/*<ShortInfo/>*/}
            <Shortcuts/>
            <Friendslist/>
        </div>
    )
}

export default Nav;