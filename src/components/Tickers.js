import React, { Component } from 'react';
import './Tickers.css';
import Crypto from './Crypto.js';

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

    render() {
        let tickers = this.state.data.map((currency) =>
             <Crypto data = {currency} key = {currency.id}/>
        );
{/* key property is needed for react to keep track of each li */ }
        return ( 
            <div className = "tickers-container">
                <ul className = "tickers"> {tickers} </ul> 
                <p> Data updated from coinmarketcap.com </p> 
            </div>
        );
    }
}

    export default Tickers;

{/* Comments:
The js map function inside state to iterate through each crypto creating li elements
*/ }

{ /* data is property containing all of the data needed for a single cryptocurrency, to pass in from the parent component */ }