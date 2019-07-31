import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class HorizontalMenu extends Component {
  state = { activeItem: 'Get Data' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    const tab = { 'horizontalMenu': name }
    this.props.changeTabs(tab)
  }

  render() {
    const { activeItem } = this.state
    
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item 
            name='Get Data' 
            active={activeItem === 'Get Data'} 
            onClick={this.handleItemClick} />
          <Menu.Item
            name='Trigger Event'
            active={activeItem === 'Trigger Event'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}


export default HorizontalMenu