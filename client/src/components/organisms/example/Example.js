import React, { Component } from 'react';

import './example.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import { contractQuery, npsQuery } from '../../../modules/queries'
import db from '../../../firebase/db'

class Example extends Component {
  state = {
    contractsData: [],
    npsData: []
  }

  filterEmails = (records) => {
    let emails = []
    for (let record of records) {
      emails.push(record.Email)
    }
    return emails
  }

  handleClickContracts = async () => {
    const records = await contractQuery()
    const emails = await this.filterEmails(records)
    const data = {
      date: Date.now(),
      nr_processed: records.length,
      emails
    }
    db.addContractsData(data)
  }

  handleClickNps = async () => {
    const records = await npsQuery()
    const emails = await this.filterEmails(records)
    const data = {
      date: Date.now(),
      nr_processed: records.length,
      emails
    }
    db.addNpsData(data)
  }

  componentDidMount() {
    this.getContracts()
    this.getNps()
  }

  getContracts = async () => {
    const emails = await db.fetchContractsData()
    this.setState({ contractsData: emails })
  }

  getNps = async () => {
    const emails = await db.fetchNpsData()
    this.setState({ npsData: emails })
  }

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