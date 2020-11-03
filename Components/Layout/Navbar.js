import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import styles from './Navbar.module.sass';

const Navbar = (props) => {
    const [searchFocus, setSearchFocus] = useState(false);
    let searchFocussed = searchFocus ? styles.searchFocussed : null
    
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>sabjiwala.in</div>
            <div className={styles.hamIconContainer}>
            <FiMenu size="26px" color="white" className={styles.hamMenu} />
            </div>
            <form className={styles.searchBar}>
                <input
                    type="text"
                    onFocusCapture={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                    className={styles.searchInput}
                    placeholder="Search for groceries..."
                />
                <div className={`${styles.searchButton} ${searchFocussed}`}>
                    <input type="submit" value="Go" />
                    <BsSearch size="30px" className={styles.searchIcon} />
                </div>
            </form>
            <div className={styles.basketContainer}>
                <img src="assets/basket.svg" alt="" className={styles.basketIcon} />
            </div>
            {/* :) */}
        </div>
    );
};

export default Navbar;
