import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

import './getData.scss'
import DatesResults from '../../molecules/dates/DatesResults'

class GetData extends Component {
  state = { 
    activeItem: 'today'
   }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderSegment = () => {
    const { activeItem } = this.state
    const { today, thisWeek, thisMonth } = this.props 
    if (activeItem === 'today') return <DatesResults elements={today} />
    if (activeItem === 'this week') return <DatesResults elements={thisWeek} />
    if (activeItem === 'this month') return <DatesResults elements={thisMonth} /> 
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className='get-data'>
        <Menu attached='top' tabular>
          <Menu.Item 
            name='today' 
            active={activeItem === 'today'} 
            onClick={this.handleItemClick} />
          <Menu.Item
            name='this week'
            active={activeItem === 'this week'}
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