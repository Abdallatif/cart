import React from 'react';
var items = require('./items.json');


function ShowBill(props) {
  var cart = props.cart.toArray();
  var sum = 0;
  var myCart = [];
  items.forEach((item) => {
    if (cart.indexOf(item.name)!==-1) {
      myCart.push({name:item.name, price:item.price});
      sum += item.price;
    }
  });
  return (
    <div>
      <h1>List Of your cart items</h1>
      {myCart.map(item =><h3 key={item.name}>{item.name}   =  {item.price}$</h3>)}
      <h1>Total: {sum}$</h1>
    </div>
  );
}

export default ShowBill;
