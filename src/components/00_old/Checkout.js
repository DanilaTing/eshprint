import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cost: 1200
    }
  }

  render() {
    return (
      <div className="checkoutWraper">
        <div>
          <input type="text" size="20" placeholder="Свой формат"/>
          <p id="cost">{this.state.cost}₽</p>
        </div>
        
        <div className="checkoutButton">
          <p>Рассчитать</p>
        </div>
      </div>
    )
  }
}

export default Checkout;
