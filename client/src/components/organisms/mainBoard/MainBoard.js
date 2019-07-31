import React, { Component } from 'react';

import './mainBoard.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import { contractQuery, npsQuery, fetchContractsData, fetchNpsData } from '../../../modules/queries'

class MainBoard extends Component {
  state = {
    contractsData: [],
    npsData: []
  }

  handleClickContracts = () => {
    contractQuery()
  }

  handleClickNps = () => {
    npsQuery()
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

  render() {
    return (
      <div className="main-board">
        <HeaderDefault size={'large'}>
          Let's test this app
        </HeaderDefault>
        <ButtonDefault 
          onClick={e => this.handleClickContracts()}>
          Run contracts
        </ButtonDefault>
        <ButtonDefault 
          color={'green'}
          onClick={e => this.handleClickNps()}>
          Run NPS
        </ButtonDefault>
      </div>
    )
  }
}

export default MainBoard