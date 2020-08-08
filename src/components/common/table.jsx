import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, sortCol, onSort, data }) => {
  return (
    <>
      <TableHeader columns={columns} onSort={onSort} sortCol={sortCol} />
      <TableBody data={data} columns={columns} />
    </>
  );
};

export default Table;
