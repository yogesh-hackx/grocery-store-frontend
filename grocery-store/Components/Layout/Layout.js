import Navbar from './Navbar';

const Layout = (props) => (
    <>
        <Navbar />
        <div className="container">{props.children}</div>
    </>
);

export default Layout;
