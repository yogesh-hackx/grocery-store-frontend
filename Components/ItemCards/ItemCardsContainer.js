import styles from './ItemCardsContainer.module.sass';
import ItemCard from './ItemCard';

const ItemCardsContainer = (props) => {
    return (
        <div className={styles.itemCardsContainer}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    );
};

export default ItemCardsContainer
