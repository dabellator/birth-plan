import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableHeaderColumn from './TableHeaderColumn';
import TableBodyColumn from './TableBodyColumn';

export default class Table extends Component {

  render() {
    const { columns, data, textLeft, textCenter, textRight } = this.props;
    return (
      <div className="table-container">
        <table>
          <TableHeader>
            <TableRow>
              {columns.map(column =>
                <TableHeaderColumn
                  value={column.title}
                  tooltip={column.title}
                  left={textLeft}
                  center={textCenter}
                  right={textRight}
                />
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item =>
              <TableRow>
                {columns.map(column =>
                  <TableBodyColumn
                    value={column.value(item) || column.placeholder || ''}
                    tooltip={column.tooltip ? column.tooltip(item) : null}
                    left={textLeft}
                    center={textCenter}
                    right={textRight}
                  />
                )}
              </TableRow>
            )}
          </TableBody>
        </table>
      </div>
    )
  }
}
