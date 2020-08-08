import React, { Component } from "react";

class TableHeader extends Component {
  // columns arr
  // sort col obj
  // on sort
  raiseSort = (path) => {
    const mySortCol = { ...this.props.sortCol };
    if (mySortCol.path === path) {
      // reverse sort order
      mySortCol.order = mySortCol.order === "asc" ? "desc" : "asc";
    } else {
      mySortCol.path = path;
      mySortCol.order = "asc";
    }
    this.props.onSort(mySortCol);
  };
  getSortIcon = (column) => {
    const { sortCol } = this.props;
    if (column.path !== sortCol.path) return null;
    const classes = "fa fa-sort-";
    return <i className={classes + sortCol.order}></i>;
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              className="clickable"
              key={c.path || c.key}
              onClick={() => this.raiseSort(c.path)}
            >
              {c.label} {this.getSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
