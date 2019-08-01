import React, { Component } from 'react';
import moment from 'moment'

import './triggerEvents.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import SegmentDefault from '../../atoms/Segment'

class TriggerEvents extends Component {

  sort = (array) => {
    array.sort((a, b) => moment(a).diff(b))
    return moment(array[0]).fromNow() 
  }

  showTimer = () => {
    const schedules  = this.props.schedules()
    
    let currTime = moment()
    let nextScheduleToday = []
    schedules.forEach(schedule => {
      if (schedule.diff(currTime) > 0) {
        nextScheduleToday.push(new Date(schedule))
      }
    })
    if (nextScheduleToday.length) {
      return this.sort(nextScheduleToday)
    } else {
      let tomorrowArray = []
      schedules.forEach(schedule => tomorrowArray.push(schedule.add(1, 'days')))
      return this.sort(tomorrowArray)
    }   
  }

  componentDidMount() {
    this.showTimer()    
  }

  render() {
    const { headerMsg, btnMsg, runQuery } = this.props
    return (
      <div className='trigger-events'>
        <SegmentDefault >
          {`Next process: ${this.showTimer()} `}
        </SegmentDefault>
        <div className='trigger-events-board'>
          <HeaderDefault size={'large'}>
            {headerMsg}
          </HeaderDefault>
          <ButtonDefault
            onClick={e => runQuery()}>
            {btnMsg}
          </ButtonDefault>
        </div>
      </div>
    )
  }
}

export default TriggerEvents