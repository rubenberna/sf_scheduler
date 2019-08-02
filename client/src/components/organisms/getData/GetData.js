import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

import './getData.scss'
import DatesResults from '../../molecules/dates/DatesResults'

class GetData extends Component {
  state = { 
    activeItem: 'yesterday'
   }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderSegment = () => {
    const { activeItem } = this.state
    const { yesterday, lastWeek, thisMonth } = this.props 
    if (activeItem === 'yesterday') return <DatesResults elements={yesterday} />
    if (activeItem === 'last week') return <DatesResults elements={lastWeek} />
    if (activeItem === 'this month') return <DatesResults elements={thisMonth} /> 
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className='get-data'>
        <Menu attached='top' tabular>
          <Menu.Item 
            name='yesterday' 
            active={activeItem === 'yesterday'} 
            onClick={this.handleItemClick} />
          <Menu.Item
            name='last week'
            active={activeItem === 'last week'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='this month'
            active={activeItem === 'this month'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment attached='bottom'>
          { this.renderSegment() }
        </Segment>
      </div>
    )
  }
}

export default GetData