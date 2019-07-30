import React, { Component } from 'react';

import './example.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import { contractQuery, npsQuery } from '../../../modules/queries'

class Example extends Component {

  handleClickOne = async () => {
    const records = await contractQuery()
    console.log(records);
  }

  handleClickTwo = async () => {
    const records = await npsQuery()
    console.log(records);
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