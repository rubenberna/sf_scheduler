import React, { Component } from 'react';
import CountUp from 'react-countup';

import HeaderDefault from '../../atoms/Header'
import Excel from '../../../modules/Excel'

class DatesResults extends Component {

  sumProcessed = () => {
    const { elements } = this.props
    if (elements) {
      let total = elements.reduce( (prev, curr) => {
        return prev + curr.nr_processed
      }, 0)
      return <CountUp end={total}/> 
    } else return 0
  }

  render () {    
    return(
      <>
        <HeaderDefault size={'small'}>
          Processed records: {this.sumProcessed()}
        </HeaderDefault>
        <Excel records={ this.props.elements }/>
      </>
    )
  }  
}

export default DatesResults