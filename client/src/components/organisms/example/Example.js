import React, { Component } from 'react';

import './example.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import { contractQuery, npsQuery } from '../../../modules/queries'

class Example extends Component {
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

  // componentDidMount() {
  //   this.getContracts()
  //   this.getNps()
  // }

  // getContracts = async () => {
  //   const emails = await db.fetchContractsData()
  //   this.setState({ contractsData: emails })
  // }

  // getNps = async () => {
  //   const emails = await db.fetchNpsData()
  //   this.setState({ npsData: emails })
  // }

  render() {
    return (
      <div className="example">
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

export default Example