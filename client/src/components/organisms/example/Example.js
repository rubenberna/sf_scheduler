import React, { Component } from 'react';

import './example.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import { contractQuery, npsQuery } from '../../../modules/queries'
import firebase from '../../../firebase/firebaseInit'

class Example extends Component {
  state = {
    contractsData: [],
    npsData: []
  }

  handleClickOne = async () => {
    const records = await contractQuery()
    console.log(records);
  }

  handleClickTwo = async () => {
    const records = await npsQuery()
    console.log(records);
  }

  componentDidMount() {
    this.fetchContractsData()
    this.fetchNpsData()
  }

  fetchContractsData = async () => {
    const snapshot = await firebase.contracts.get()
    let emails = []
    await snapshot.docs.map(doc => emails.push(doc.data()))
    this.setState({ contractsData: emails })
  }

  fetchNpsData = async () => {
    const snapshot = await firebase.nps.get()
    let emails = []
    await snapshot.docs.map(doc => emails.push(doc.data()))
    this.setState({ npsData: emails })
  }


  render() {
    return (
      <div className="example">
        <HeaderDefault size={'large'}>
          Let's test this app
        </HeaderDefault>
        <ButtonDefault 
          onClick={e => this.handleClickOne()}>
          Run contracts
        </ButtonDefault>
        <ButtonDefault 
          color={'green'}
          onClick={e => this.handleClickTwo()}>
          Run NPS
        </ButtonDefault>
      </div>
    )
  }
}

export default Example