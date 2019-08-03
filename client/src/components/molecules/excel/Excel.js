import React, { Component } from 'react';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Excel extends Component {

  render() {
    const { records } = this.props
    return (
      <ExcelFile element={<button className='ui button'>Export</button>} filename='Guestlist'>
        <ExcelSheet data={records} name="Guestlist">
          <ExcelColumn label="Date" value="date" />
          <ExcelColumn label="# Processed" value="nr_processed" />
        </ExcelSheet>
      </ExcelFile>
    )
  }
}

export default Excel