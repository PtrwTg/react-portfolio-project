import React, { useState} from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'

function Navbar() {

    const [isToggled, setToggled] = useState(false);

    function handleToggle() {
        setToggled(!isToggled)
    }
  return (
    <nav>
        <div className={styles.container}>
            <div className={styles.nav_con}>
                <div className={styles.logo}>
                    <a href="#">PTRW_TG PORT </a>
                </div>

                <ul>
                    <li><a href="#">Skill</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                    <div className={styles.button}>
                        <a href="#">Hire me</a>
                    </div>
            </div>

            {/* Mobile menu */}
            <FaBars className={styles.bars} onClick={handleToggle} />
            {isToggled ? (
             <>
                <ul className={styles.mobile_menu}>
                    <li><a href="#">Skill</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.mobile_button}>
                    <a href="#">Hire me</a>
                </div>
             </>
            ) : null}
        </div>
    </nav>
  )
}

export default Navbar