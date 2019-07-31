import React from 'react';

import './navbar.scss'
import HeaderDefault from '../../atoms/Header'
import HorizontalMenu from '../menus/HorizontalMenu'

const Navbar = (props) => {
  return(
    <div className="navbar">
      <div className="navbar-title">
        <HeaderDefault size={'large'}>
          SalesForce Scheduler
        </HeaderDefault>
      </div>
      <div className="navbar-menu">
        <HorizontalMenu changeTabs={props.changeTabs}/>
      </div>
    </div>
  )
}

export default Navbar