import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <div className="About">
                <img alt="" data-testid="Image" className="XoriantImage" src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/news/fi/5c8a3816bf769.jpeg">
                </img>
                <div data-testid="Text" label="AboutProject" className="AboutProject">
                    Bit tracker is project programmed using React,HTML and CSS.
                    The primary objective of this project is to get live prices of cryptocurrencies
                    in a creative and user friendly way.
                    This is a React assignment by Apoorv Unmesh Bedmutha
                    for training provided by Xoriant Solutions Pvt. Ltd
                </div>
            </div>
        )
    }
}