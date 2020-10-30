import { BsSearch } from 'react-icons/bs';
import styles from './Navbar.module.sass';
import { useState } from 'react';

const Navbar = (props) => {
    const [searchFocus, setSearchFocus] = useState(false);
    let searchFocussed = searchFocus ? styles.searchFocussed : null
    
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>sabjiwala.in</div>
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
        </div>
    );
};

export default Navbar;
