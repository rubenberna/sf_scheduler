import React, { Component } from 'react'

import './home.scss'
import Example from '../organisms/example/Example'
import VerticalMenu from '../molecules/menus/VerticalMenu'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <VerticalMenu/>
        <Example/>
      </div>
    )
  }
}

export default Home