import React, { Component } from 'react';
import CountUp from 'react-countup';

import HeaderDefault from '../../atoms/Header'

class DatesResults extends Component {

  add = (a, b) => a + b

  sumProcessed = () => {
    const { elements } = this.props
    let nums = []
    if (elements) {
      this.props.elements.forEach(element => {
        nums.push(element.nr_processed)
      });
      const sum = nums.reduce((a, b) => a + b, 0)
      return <CountUp end={sum}/> 
    } else return 0
  }

  render () {    
    return(
      <>
        <HeaderDefault size={'small'}>
          Processed records: {this.sumProcessed()}
        </HeaderDefault>
      </>
    )
  }  
}

export default DatesResults