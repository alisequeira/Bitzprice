import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Price';
const index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Bitzprice</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
)

index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default index;
