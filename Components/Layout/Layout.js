import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <>
        <Head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{props.title || 'Grocery Store'}</title>
        </Head>
        <Navbar />
        <div className="container">{props.children}</div>
    </>
);

export default Layout;
