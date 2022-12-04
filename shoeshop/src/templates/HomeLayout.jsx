import React, { Component } from 'react'
import { Outlet,NavLink } from 'react-router-dom'
export default class HomeLayout extends Component {
  render() {
    return (
    <div>
      <div className='row justify-content-center align-items-start'>
        <div className='nav col-3 bg-white row text-dark p-2' style={{marginTop:200}}>           
                <NavLink className={({isActive})=>
                isActive?'nav-link bg-white text-dark border  border-info col-12':"nav-link col-12"} to="/home">
                    Home
            </NavLink>
                
                <NavLink className={({isActive})=>
                isActive?"nav-link bg-white text-dark border border-info col-12":"nav-link col-12"} to="/shop">
                    Shop
            </NavLink>            
        </div>
        <div className='content col-8 border border-2 border-info mx-5 mb-0' style={{ minHeight: '75vh' }}>
                <Outlet/>
        </div>  
      </div>
      </div>
    )
  }
}
