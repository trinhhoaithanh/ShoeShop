import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let {item,setStateModal} = this.props;
    return (
      <div className="container">
        <div className="card mb-5 py-2">
          <img className="card-img-top w-100" src={item.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price}$</p>
            <div className="row">
              <button className="col-6 btn btn-warning">
                  Add to carts <span className="fa fa-cart-plus"></span>
              </button>
              <button className="col-6 btn btn-success" data-bs-toggle="modal"
          data-bs-target="#modalId" onClick={()=>{
            setStateModal(item)
          }}>
                 View Detail <span className="fa fa-eye"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
