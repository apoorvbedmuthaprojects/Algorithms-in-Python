import { fireEvent, render, screen } from '@testing-library/react';
import Cards from './Cards';
let dummy=[
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 2922402,
        "market_cap": 54876293237807,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 61374257700883,
        "total_volume": 2011442713818,
        "high_24h": 2966520,
        "low_24h": 2799175,
        "price_change_24h": 106115,
        "price_change_percentage_24h": 3.7679,
        "market_cap_change_24h": 1802139058722,
        "market_cap_change_percentage_24h": 3.39551,
        "circulating_supply": 18776637,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 4868723,
        "ath_change_percentage": -39.97228,
        "ath_date": "2021-04-14T11:54:46.763Z",
        "atl": 3993.42,
        "atl_change_percentage": 73084.99462,
        "atl_date": "2013-07-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2021-08-05T06:01:03.788Z"
      }
]

test("testing with dummy data",()=>{
render(<Cards data={dummy} />)
const a=screen.getByTestId("Card")
expect(a).toBeInTheDocument()
})