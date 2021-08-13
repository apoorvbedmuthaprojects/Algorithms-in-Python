import React from 'react'
export default class LargeCard extends React.Component {
    state = {
        id: "",
        image: ""
        , price: ""
        , change: ""
    }
    /*}    componentDidMount(){
            if(this.props.data!=""){
                console.log(this.props.data.id)
                console.log(this.props.data.image.large)
                console.log(this.props.data.market_data.current_price.inr)
                console.log(this.props.data.market_data.price_change_percentage_24h)
                this.setState({
                    id:this.props.id,image:this.props.data.image.large,price:this.props.data.market_data.current_price.inr
                    ,change:this.props.data.market_data.price_change_percentage_24h
                })
            }
        }
        make(){
    
            }
        }
    */
    render() {

        if (this.props.data != "") {
            console.log(this.props.data)
            return (
                <div className="LargeCard">
                    <div className="LargeCardLeft">
                        <img alt="" className="LargeCardImage" src={this.props.data.image.large} />
                        <div className="LargeCardChange">{this.props.data.market_data.price_change_percentage_24h} %</div>
                    </div>
                    <div className="LargeCardRight">
                        <div data-testid="LargeCardTitle" className="LargeCardId">{this.props.data.id}</div>
                        <div className="LargeCardPrice">{this.props.data.market_data.current_price.inr} INR</div>
                    </div>
                </div>

            )
        }
        else {
            return <div className="Loading">Loading...</div>
        }
    }
}