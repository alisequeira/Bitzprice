import NavBar from './Navbar';
import Head from 'next/head';
const Layout = (props) => (
    <div>
        <Head>
            <title>Bitzprice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <NavBar />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout;