import styles from './ItemCard.module.sass';

const ItemCard = ({name, mrp, sellingPrice, imgURL}) => {
    return (
        <div className={styles.itemCard}>
            <div className={styles.imgContainer}>
                <img src={imgURL} alt="" className={styles.itemImage} />
            </div>
            <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>
                    <span className={styles.rupeesSymbol}>&#8377;</span> {sellingPrice}
                </span>
                <span className={styles.oldPrice}>
                    <span className={styles.rupeesSymbol}>&#8377;</span>{mrp}
                </span>
            </div>
            <div className={styles.itemTitle}>{name}</div>
            <div className={styles.addButtonContainer}>ADD</div>
        </div>
    );
};

export default ItemCard;
