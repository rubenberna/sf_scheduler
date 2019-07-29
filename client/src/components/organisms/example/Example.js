import React, { Component } from 'react';

import './example.scss'
import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'
import { query } from '../../../modules/query'

class Example extends Component {

  handleClick = async () => {
    const records = await query()
    console.log(records);
  }

  render() {
    return (
      <div className="example">
        <HeaderDefault size={'large'}>
          Let's test this app
        </HeaderDefault>
        <ButtonDefault 
          class={'ui margin top'}
          onClick={e => this.handleClick()}>
          Search
        </ButtonDefault>
      </div>
    )
  }
}

export default Example