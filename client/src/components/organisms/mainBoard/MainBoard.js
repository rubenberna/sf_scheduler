import React, { Component } from 'react';

import './mainBoard.scss'
import TriggerEvents from '../triggerEvents/TriggerEvents'
import GetData from '../getData/GetData'
import { fetchContractsData, fetchNpsData, contractQuery, npsQuery } from '../../../modules/queries'
import getDates from '../../../modules/getDates'
import schedules from '../../../modules/schedules'

class MainBoard extends Component {
  state = {
    contractsData: [],
    npsData: []
  }

  componentDidMount() {
    this.getContractsData()
    this.getNpsData()
  }

  getContractsData = async () => {
    const records = await fetchContractsData()
    this.setState({ contractsData: records})
    this.setDates({'contracts': records})
  }

  getNpsData = async () => {
    const records = await fetchNpsData()
    this.setState({ npsData: records})
    this.setDates({'nps': records})
  }

  setDates = (data) => {
    const [name] = Object.keys(data)  
    const yesterday = getDates.getYesterday(...Object.values(data))
    const lastWeek = getDates.getLastWeek(...Object.values(data))
    const thisMonth = getDates.getThisMonth(...Object.values(data))
    
    this.setState({
      [`${name}Yesterday`]: yesterday,
      [`${name}LastWeek`]: lastWeek,
      [`${name}ThisMonth`]: thisMonth
    })
  }

  renderContent = () => {
    const { horizontalMenu, verticalMenu } = this.props.tabs
    if (horizontalMenu === 'Trigger Event' && verticalMenu === 'Contracts')
      return <TriggerEvents
        headerMsg={'Contracts on demand'}
        btnMsg={'Run process'}
        schedules={schedules.contracts}
        runQuery={contractQuery} />
    if (horizontalMenu === 'Trigger Event' && verticalMenu === 'NPS')
      return <TriggerEvents
        headerMsg={'NPS on demand'}
        btnMsg={'Run process'}
        schedules={schedules.nps}
        runQuery={npsQuery} />
    if (horizontalMenu === 'Get Data' && verticalMenu === 'Contracts')
      return (
        <GetData  
          yesterday={this.state.contractsYesterday}  
          lastWeek={this.state.contractsLastWeek}
          thisMonth={this.state.contractsThisMonth}
          />
      )
    if (horizontalMenu === 'Get Data' && verticalMenu === 'NPS')
      return (
        <GetData 
          yesterday={this.state.npsYesterday}
          lastWeek={this.state.npsLastWeek}
          thisMonth={this.state.npsthisMonth} />
      )
  }

  render() {
    return (
      <div className="main-board">
        {this.renderContent()}
      </div>
    )
  }
}

export default MainBoard