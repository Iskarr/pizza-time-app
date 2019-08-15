import React, { Component } from 'react';
// Load in other views here
import OrderForm from './views/OrderForm'
import Specials from './views/Specials'
import Accounts from './views/Accounts'
import Menu from './views/Menu'
import Favorites from './views/Favorites'
import Orders from './views/Orders'
import Signin from './views/signin'
import ItemDetail from './views/ItemDetail'
import './App.css'

// Very simple layout for now; Eventually need to set up navigation
class App extends Component {

  constructor(props) {
    super(props)

    this.state = { viewShowing: "menu"}

    this.handleChoice = this.handleChoice.bind(this)

  }

  handleChoice(choice) {
    console.log("choice clicked: ", choice)
    this.setState({ viewShowing: choice })
  }

  render() { 

    // See https://stackoverflow.com/questions/37782776/using-for-loops-and-switch-cases-in-react-to-dynamically-render-different-compon
    // for questions regarding the use of an object enumeration as a cheap "switch" statement
  return (
    <div>
      <header><img src="image/logo.jpg" alt="Logo" width="200px" height="70px" /></header>

      <div className="App"  style={{backgroundColor: "#345eb5"}}>
        {{
          "specials": (<Specials clickFunc={this.handleChoice.bind(this,"itemDetail")}/>),
          "orders": (<Orders />),
          "orderForm": (<OrderForm />),
          "menu": (<Menu />),
          "favorites": (<Favorites />),
          "account": (<Accounts />),
          "signin": (<Signin />),
          "itemDetail": (<ItemDetail />),
        }[this.state.viewShowing]
        }

        <div id="footer">
          <div onClick={this.handleChoice.bind(this, "menu")} class="navbar"><i class="fa fa-home"><br /><p>Home</p></i></div>
          <div onClick={this.handleChoice.bind(this, "specials")} class="navbar"><i class="fa fa-usd"><br /><p>Specials</p></i></div>
          <div onClick={this.handleChoice.bind(this, "favorites")} class="navbar"><i class="fa fa-star"><br /><p>Favorites</p></i></div>
          <div onClick={this.handleChoice.bind(this, "account")} class="navbar"><i class="fa fa-bars" id="Hamburger"></i></div>
        </div>

      </div>
    </div>
  );
  }
}

// This should be available from the account page
//       <button onClick={this.handleChoice.bind(this, "orders")}>Orders</button>

export default App;
