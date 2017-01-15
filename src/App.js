import React, { Component } from 'react';
import './App.css';
import ShowBill from './ShowBill'
import TableOfItems from './TableOfItems'

var Immutable = require('immutable');
var items = require('./items.json');



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: Immutable.List(),
      view: 'items'
    }
    this.onItemClick = this.onItemClick.bind(this);
    this.viewCart = this.viewCart.bind(this);
  }
  componentWillMount() {

  }

  onItemClick(item, clicked) {
    if (clicked) {
      var index = this.state.cart.indexOf(item);
      this.setState({
          cart: this.state.cart.splice(index, 1)
      });
    } else {
      this.setState((state) => ({
          cart: state.cart.push(item)
      }));
    }
  }

  viewCart() {
    this.setState((state)=>({
      view: state.view === 'items'? 'cart' : 'items',
    }))
  }

  render() {
    var {
      cart,
      view
    } = this.state;

      return (
        <div className="App">
          <div className="page-header">
            <img src='https://www.yamsafer.com/images/opt/Arabic-blue_226x80.png' alt="logo" />
            <h2>Welcome to Yamsafer shop</h2>
          </div>

          <SwitchView cartSize={cart.size} view={view} callback={this.viewCart}
            cart={this.state.cart} onItemClick={this.onItemClick}/>
        </div>
      );

  }
}

function SwitchView(props) {
  if (props.view === 'items')
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={props.callback}
        >
          View Cart ({props.cartSize} items selected)
        </button>

        <TableOfItems cart={props.cart} onItemClick={props.onItemClick}/>
      </div>
    );
  else
    return (
      <div>
        <button type="button" className="btn btn-primary btn-block" onClick={props.callback}>view items</button>
        <ShowBill cart={props.cart}/>
      </div>
    );
}

export default App;
