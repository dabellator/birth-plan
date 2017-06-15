import React, { Component } from 'react';

export default class Table extends Component {

  render() {
    return (
      <div className="table-container">
        <table>
          {this.props.children}
        </table>
      </div>
    )
  }
}

  // constructor(props) {
  //   super(props);
  //   this.state = {}
  //   this.renderRow = this.renderRow.bind(this);
  //   this.renderColumn = this.renderColumn.bind(this);
  // }
  //
  // renderColumn(numberOfRows, item, i) {
  //   console.log("ITEM IN COLUMN", item)
  //   return (
  //     <div key={`table-column-${i}`} className="table-column">
  //       {item}
  //     </div>
  //   )
  // }
  //
  // renderRow(item, i) {
  //   console.log("ITEM IN ROW", item)
  //   const { renderColumn } = this;
  //   const columns = Object.keys(item);
  //   const numberOfRows = columns.length;
  //   return (
  //     <div key={`table-row-${i}`} className="table-row">
  //       {columns.map(renderColumn.bind(null, numberOfRows))}
  //     </div>
  //   )
  // }

  // render() {
  //   const { data, tableContainerClass, containerStyle } = this.props;
  //   const { renderRow } = this;
  //   const containerClass = combineClasses('table-container', tableContainerClass)
  //   return (
  //     <div style={{containerStyle}} className={containerClass}>
  //       <Shadow>
  //         {data.map(renderRow)}
  //       </Shadow>
  //     </div>
  //   )
  // }
//
// }
