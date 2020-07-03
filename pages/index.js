import Head from 'next/head';
import Layout from '../Components/Layout/Layout';
import ItemCardsContainer from '../Components/ItemCards/ItemCardsContainer';

export default function Home() {
    return (
        <div>
            <ItemCardsContainer />
        </div>
    )
}
