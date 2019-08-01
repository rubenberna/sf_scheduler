import React, { Component } from 'react';

import './mainBoard.scss'
import TriggerEvents from '../triggerEvents/TriggerEvents'
import { contractQuery, npsQuery, fetchContractsData, fetchNpsData } from '../../../modules/queries'
import schedules from '../../../modules/schedules'

class MainBoard extends Component {
  state = {
    contractsData: [],
    npsData: []
  }

  componentDidMount() {
    this.getContracts()
    this.getNps()
  }

  getContracts = async () => {
    const records = await fetchContractsData()
    this.setState({ contractsData: records})
  }

  getNps = async () => {
    const records = await fetchNpsData()
    this.setState({ npsData: records})
  }

  renderContent = () => {
    const { horizontalMenu, verticalMenu } = this.props.tabs
    if (horizontalMenu === 'Trigger Event' && verticalMenu === 'Contracts') {
      return (
        <>
          <TriggerEvents 
            headerMsg={'Contracts on demand'} 
            btnMsg={'Run process'}
            schedules={schedules.contracts} 
            runQuery={ contractQuery }/>
        </>
      )
    }
    if (horizontalMenu === 'Trigger Event' && verticalMenu === 'NPS') {
      return (
        <>
          <TriggerEvents
            headerMsg={'NPS on demand'}
            btnMsg={'Run process'}
            schedules={schedules.nps} 
            runQuery={ npsQuery } />
        </>
      )
    } 
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