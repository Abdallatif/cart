import React, { Component } from 'react';
import './App.css';
var items = require('./items.json');

function TableOfItems(props) {
  return (
    <div className="container">
      <div className='row'>
        {items.map(item =><Item cart={props.cart} key={item.name} name={item.name} desc={item.desc} price={item.price} img={item.img} onItemClick={props.onItemClick}></Item>)}
      </div>
    </div>
  );
}

class Item extends Component {
  constructor(props) {
    super(props);
    var clicked = this.props.cart.indexOf(this.props.name)!==-1;
    this.state = {clicked: clicked};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onItemClick(this.props.name, this.state.clicked);
    if (this.state.clicked)
      this.setState({clicked: false});
    else
      this.setState({clicked: true});
  }

  render () {
    var style = {};
    var btnTxt = 'Add';
    var btnStyle = 'btn btn-primary';

    if (this.state.clicked) {
      style.borderColor = 'green';
      btnTxt = 'Remove';
      var btnStyle = 'btn btn-danger';
    }
    var imgStyle = {};

    imgStyle.maxWidth = '100%';
    imgStyle.maxHeight = '150px';
    return (
      <div className="well well-lg col-md-4" style={style} >
        <img style={imgStyle} className='PhoneHide' src={this.props.img} alt="img"/>
        <h1>{this.props.name}</h1>
        <p className='PhoneHide'>{this.props.desc}</p>
        <h3>price: {this.props.price}$</h3>
        <button className={btnStyle} onClick={this.handleClick}>{btnTxt}</button>
      </div>
    )
  }
}

export default TableOfItems;
