import styles from './ItemCard.module.sass';

const ItemCard = (props) => {
    return (
        <div className={styles.itemCard}>
            <div className={styles.imgContainer}>
                <img src="assets/tomato.png" alt="" />
            </div>
            <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>
                    <span className={styles.rupeesSymbol}>&#8377;</span> 165
                </span>
                <span className={styles.oldPrice}>
                    <span className={styles.rupeesSymbol}>&#8377;</span>180
                </span>
            </div>
            <div className={styles.itemTitle}>Fresh Tomato - 1 Kg</div>
            <div className={styles.addButtonContainer}>ADD</div>
        </div>
    );
};

export default ItemCard;
