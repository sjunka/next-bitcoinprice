import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";


const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BITCOIN PRICE!</h1>
        </div>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi}/>


    </Layout>
);

Index.getInitialProps = async function () {
    const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await result.json();

    return {
        bpi: data.bpi
    }
    
}

export default Index;
