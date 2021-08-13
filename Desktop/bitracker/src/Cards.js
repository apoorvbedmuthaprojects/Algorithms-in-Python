import React from 'react'

export default class Cards extends React.Component {
    cardMaker() {
        //console.log(this.props.data[0])
        return this.props.data.map((i) => {
            //console.log(i);
            let a="#06d6a0"
            if(i.price_change_percentage_24h<0){
                a="#ef476f";
            }
            return (

                <div data-testid="Card" className="Card" key={i.id}>
                    {/*
                    Name:{i.id} , Current Price :{i.current_price} inr, Rank : {i.market_cap_rank}, total change :  
                    */}

                    <div className="LeftCard">
                        <div >
                            <img className="PictureInCard" src={i.image} alt={i.id} />
                        </div>
                        <div className="ChangeInCard" style={{color:a}}>
                            {i.price_change_percentage_24h} %
                        </div>
                    </div>
                    <div className="RightCard">
                        <div className="NameInCard">{i.id}</div>
                        <div className="PriceInCard">{i.current_price}</div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="Cards" >
                {this.cardMaker()}
            </div>
        )
    }
}