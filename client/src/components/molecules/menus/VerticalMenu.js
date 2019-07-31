import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './menu.scss'

class VerticalMenu extends Component {
  state = { activeItem: 'Contracts' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    const tab = { 'verticalMenu': name }
    this.props.changeTabs(tab)
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className='vertical-menu'>
        <Menu pointing vertical>
          <Menu.Item 
            name={'Contracts'} 
            active={activeItem === 'Contracts'} 
            onClick={this.handleItemClick} >
            <Icon name='address card outline' />
            Contracts
          </Menu.Item> 
          <Menu.Item
            name='NPS'
            active={activeItem === 'NPS'}
            onClick={this.handleItemClick}>
            <Icon name='signal' />
            NPS
          </Menu.Item>
        </Menu>
      </div>
    )
  }
} 

export default VerticalMenu