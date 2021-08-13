import React from 'react'
import axios from 'axios';
import LargeCard from './LargeCard';
export default class SearchAndResult extends React.Component {
    state = {
        coinName: "bitcoin",
        currency: "INR",
        price: ""
    }
    getPrices() {

        const baseURL = "https://api.coingecko.com/api/v3/coins/" + this.state.coinName;
        axios.get(baseURL).then((response) => {
            this.setState({ ...this.state,price: response.data })
            console.log("Coin Price updated")
        });
        //setInterval(()=>{},3000)
        //this.getPrices()
    }
    repeater(){
        this.getPrices();
    }
    GetNames() {
        return this.props.data.map((i,index) => {
            return (
                <option data-testid={"Select"+index} key={i.id}>
                    {i.id}
                </option>
            )
        })
    }
    componentDidMount() {
        this.getPrices()
        setInterval(()=>this.repeater(),5000)

    }
    changeCoin(event) {
        this.setState({ coinName: event.target.value })
    }
    render() {
        //        console.log(this.state.price)
        return (
            <div className="SearchFlex">

                <div className="SearchBox">
                    <div>
                        <select data-testid="Select" className="FormDropDown" onChange={(event) => this.changeCoin(event)}>
                            {this.GetNames()}
                        </select>
                    </div>

                    <button className="SubmitButton" onClick={() => this.getPrices()}>G O</button>
                </div>

                <div className="Result">
                    <LargeCard data={this.state.price}></LargeCard>
                </div>
            </div>
        )
    }
}