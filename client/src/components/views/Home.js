import React, { Component } from 'react'

import './home.scss'
import MainBoard from '../organisms/mainBoard/MainBoard'
import Navbar from '../molecules/navbar/Navbar'
import VerticalMenu from '../molecules/menus/VerticalMenu'

class Home extends Component {
  state = {
    horizontalMenu: 'Get Data',
    verticalMenu: 'Contracts'
  }

  changeTabs = (tab) => {    
    this.setState({...tab})
  }

  render() {
    return (
      <div className='home'>
        <Navbar changeTabs={this.changeTabs}/>
        <div className='home-container'>
          <VerticalMenu changeTabs={this.changeTabs} />
          <MainBoard tabs={this.state} />
        </div>
      </div>
    )
  }
}

export default Home