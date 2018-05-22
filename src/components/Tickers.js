import React, { Component } from 'react';
import './Tickers.css';
import Crypto from './Crypto.js';
import axios from 'axios';

class Tickers extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
               {
                   id: "bitcoin",
                   name: "Bitcoin",
                   symbol: "BTC",
                   price_usd: "1",
                   percent_change_1h: "0",
                   percent_change_24h: "0",
                   percent_change_7d: "0",
               }, {
                   id: "ethereum",
                   name: "Ethereum",
                   symbol: "ETH",
                   price_usd: "1",
                   percent_change_1h: "0",
                   percent_change_24h: "0",
                   percent_change_7d: "0",
               }, 
               {
                   id: "ripple",
                   name: "Ripple",
                   symbol: "XRP",
                   price_usd: "1",
                   percent_change_1h: "0",
                   percent_change_24h: "0",
                   percent_change_7d: "0",
               },
               {
                   id: "litecoin",
                   name: "Litecoin",
                   symbol: "LTC",
                   price_usd: "1",
                   percent_change_1h: "0",
                   percent_change_24h: "0",
                   percent_change_7d: "0",
               }
            ]
        };
    }

    componentDidMount() {
        this.fetchCryptoData();
        this.interval = setInterval(() => this.fetchCryptoData(), 15 * 1000);
    }

    fetchCryptoData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "ripple", "litecoin"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({data: result});
            })
            .catch(err => console.log(err));
        }

    render() {
        let tickers = this.state.data.map((currency) =>
             <Crypto data = {currency} key = {currency.id}/>
        );

        return ( 
            <div className = "tickers-container">
                <ul className = "tickers"> {tickers} </ul> 
                <p> Data updated from coinmarketcap.com </p> 
            </div>
        );
    }
}

    export default Tickers;

    { /* key property is needed for react to keep track of each li */ }

{/* Comments:
The js map function inside state to iterate through each crypto creating li elements
*/ }

{ /* data is property containing all of the data needed for a single cryptocurrency, 

to pass in from the parent component */ }

{
    /* axios GET request to API coinmarketcap.com.
    wanted array selected, set state of component with results of filtering data prop
    
    this.state.data is same piece of info in child component
    once change the state, React will automatically reflect those changes.
    */
}

{
    /* 
    call every 15 second interval to get updated data
    add new crypto to app via wanted array */
}