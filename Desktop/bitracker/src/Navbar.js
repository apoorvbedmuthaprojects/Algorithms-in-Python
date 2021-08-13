import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
export default class Navbar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="NavBar">
                        <Link to="/">
                            <div className="WebsiteHeader">Bitracker</div>
                        </Link>
                        <div className="InnerNavBar">
                            <Link to="/About" style={{ textDecoration: 'none' }}>
                                <div className="NavBarItems">About</div>
                            </Link>
                        </div>

                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/About" component={About}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}