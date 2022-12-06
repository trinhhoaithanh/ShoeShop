import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {prod} =this.props
    return (
      <div className='card text-start mt-5'>
          <img src={prod.image} className='card-img-top' alt="..." />
          <div className='card-body'>
            <h6 className='card-title'>{prod.name}</h6>
            <p className='card-text'>{prod.price}$</p>
            <div className='row'>
              <div className='col-6'>
              <button className='btn btn-warning'>Add to carts <span><i class="fa fa-cart-plus"></i></span></button>
              </div>
              <div className='col-6'>
              <button className='btn btn-success'>View Detail<span><i class="fa fa-eye"></i></span></button>
              </div>
            </div>
            
          </div>
      </div>
    )
  }
}
