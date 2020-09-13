import React, { useEffect, useRef } from 'react';
import styles from './cockpit.module.css';

const Cockpit = (props) => {
    const autoClick = useRef(null);
    
    
    useEffect(() => {
        console.log("useEffect");
        autoClick.current.click()
    },[])
    return (
        <>

            <h2>Cockpit</h2>
            <button type="button" ref={autoClick} className={props.isToggle?styles.active:'deactive'} onClick={props.toggleBtn}>Toggle Button</button>
        </>
    )
}

export default Cockpit;