import React, { Component } from 'react';
import './Crypto.css';

class Crypto extends Component {
    
    render () {
        const {
            id,
            name,
            symbol,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;
        
        return ( 
            <li className = {"cryptocurrency " + id}>
                <p className = "cryptocurrency-name"> {name}({symbol}) </p> 
                <h1> $ {(+price_usd).toFixed(2)}</h1> 
                <p> {percent_change_1h}% 1 hr</p>
                <p> {percent_change_24h}% 24 hrs</p> 
                <p> {percent_change_7d}% 7 days</p> 
            </li>
        );

    }

}

export default Crypto;

{/* Child Component
     7 variables for the values inside this.props.data.

JSX for name, symbol, price to nearest 2 decimal places,
     and cryptocurrency price change in value over hour, 24 hours, and 7 days
*/}