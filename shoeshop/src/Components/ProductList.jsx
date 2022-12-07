import React, { Component } from "react";
import Modal from "./Modal";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
  
      
  renderProduct = () => {
    let { products,setStateModal } = this.props;
    
    return products.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem setStateModal={setStateModal} item={product} viewDetail={this.viewDetail}/>
        </div>
      );
    });
  };
  
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Shoes Shop</h3>

        <div className="row mt-5">
          {this.renderProduct()}
        </div>
        
    
       
      </div>
    );
  }
}
