import React, { useMemo, useState } from "react";
//TODO dig deeper for useMemo
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useTable } from "react-table";
import DummyTasks from "./dummy_tasks.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyle } from "@mui/material/styles";
import TaskDetails from "../../pages/TaskDetails";

//TODO should read from database and map them into a table
//react-table  https://kalacloud.com/blog/best-react-table-component/
//Search bar reference: https://juejin.cn/post/7061863419636351006
//TODO make 'status' entries separate tasks_components
//TODO make 'category' a drop-down menu
//TODO make decent search bar and filters
//TODO style other places in this page

function TaskList() {
  const data = React.useMemo(() => DummyTasks.tasks, []);
  const columns = React.useMemo(() => DummyTasks.headers);

  const [tasks, setTasks] = useState([]);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <React.Fragment>
      <TableContainer className="tasklist">
        <Table {...getTableProps}>
          <TableHead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <TableRow {...headerGroup.getHeaderGroupProps}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <TableCell {...column.getHeaderProps}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </TableCell>
                    ))
                  }
                </TableRow>
              ))
            }
          </TableHead>
          {/* Apply the table body props */}
          <TableBody {...getTableBodyProps}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props

                  <TableRow {...row.getRowProps} className="tableRow">
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        // console.log("cell : ", cell);
                        // console.log(cell.row.original);
                        return (
                          <TableCell {...cell.getCellProps}>
                            <Link
                              to="/taskDetails"
                              state={{
                                task_customername: `${cell.row.original.customername}`,
                                task_category: `${cell.row.original.category}`,
                                task_price: `${cell.row.original.price}`,
                                task_description: `${cell.row.original.description}`,
                                task_timeLocation: `${cell.row.original.timelocation}`,
                                task_status: `${cell.row.original.status}`,
                              }}
                              className="taskLink"
                            >
                              {
                                // Render the cell contents
                                cell.render("Cell")
                              }
                            </Link>
                          </TableCell>
                        );
                      })
                    }
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default TaskList;
