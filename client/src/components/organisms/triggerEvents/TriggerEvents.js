import React, { Component } from 'react';
import moment from 'moment'

import './triggerEvents.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import SegmentDefault from '../../atoms/Segment'
import IconDefault from '../../atoms/Icon'

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
        <HeaderDefault size={'medium'}>
          {`Next process: ${this.showTimer()} `}
        </HeaderDefault>
        <div className='trigger-events-board'>
        <SegmentDefault placeholder={true} size={'large'}>
          <HeaderDefault icon={true}>
            <IconDefault name={'pdf file outline'}/>
            {headerMsg}
          </HeaderDefault>
          <ButtonDefault 
            primary={true}
            onClick={e => runQuery()}>
            {btnMsg}
          </ButtonDefault>
        </SegmentDefault>
        </div>
      </div>
    )
  }
}

export default TriggerEvents