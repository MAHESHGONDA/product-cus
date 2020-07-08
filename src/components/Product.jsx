import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.product.ID}</td>
        <td>{this.props.product.Name}</td>
        <td>{this.props.product.Description}</td>
        <td>{this.props.product.Price}</td>
      </tr>
    );
  }
}

export default Product;
