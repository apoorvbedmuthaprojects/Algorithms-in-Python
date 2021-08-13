import React from 'react'
import Cards from './Cards';
import axios from 'axios';

import SearchAndResult from './SearchAndResult';

export default class Home extends React.Component {
  state = {
    price: []
  }
  getPrices() {
    const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    axios.get(baseURL).then((response) => {
      //console.log(response.data);
      this.setState({ price: response.data })
    });
  }
  repeater(){
    this.getPrices()
  }
  componentDidMount() {
    this.getPrices();
    setInterval(()=>this.repeater(),5000)
  }
  render() {
    return (
      <div className="App">
        <SearchAndResult data={this.state.price}></SearchAndResult>
        <Cards data={this.state.price}></Cards>
      </div>
    )
  }
}