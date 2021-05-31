import React, { Component } from 'react';
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Content from './Content';
import Details from './Details';
import Footer from './Footer';


class Navbar extends Component {
    render() {
        return (<Router>

        
        <div className="row">

       
        <nav className=" indigo darken-4" role="navigation">
                    <div className="nav-wrapper container">
                    <a href="/" id="logo-container" className="brand-logo" style={{fontWeight:"bold"}}>ITrello</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li> <Link to="/">All Cards</Link></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    </div>
            </nav>
            </div>

            <Switch>
            
              <Route path={`/details/:cardId`}>
                <Details/>
              </Route>
              <Route path="/login">
                
              </Route>
              <Route path="/">
                <Content/>
              </Route>
            </Switch>


            <Footer/>
            </Router>

            
              
          
            
        );
    }
}

export default Navbar;






