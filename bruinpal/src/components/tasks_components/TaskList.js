import React, { useEffect, useMemo, useState } from "react";
//TODO dig deeper for useMemo
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
import { Select } from "@mui/material";

//TODO should read from database and map them into a table
//react-table  https://kalacloud.com/blog/best-react-table-component/
//Search bar reference: https://juejin.cn/post/7061863419636351006
//TODO make 'status' entries separate tasks_components
//TODO make 'category' a drop-down menu
//TODO make decent search bar and filters
//TODO style other places in this page

function TaskList() {
  //const data = getData();
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let category = "all";
  let data = [];
  if (window.localStorage.getItem("category") !== null) {
    category = window.localStorage.getItem("category");
  }
  if (window.localStorage.getItem("tasks") !== null) {
    data = JSON.parse(window.localStorage.getItem("tasks"));
  }

  if (category !== "all") {
    console.log("filtered data: ");
    data = JSON.parse(window.localStorage.getItem("tasks")).filter((entry) => {
      return entry.category === category;
    });
    console.log(data);
  }
  const columns = React.useMemo(() => DummyTasks.headers);

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    setIsLoading(true);
    //idea: save counter to session state, every reload get new counter, if it has increased recall get all tasks
    async function getTasks() {
      const requestOptions = {
        method: "get",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      };
      fetch("api/tasks/all", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            console.log("Error getting tasks. Please try again.");
            console.log(result);
          } else {
            window.localStorage.setItem("tasks", JSON.stringify(result.tasks));
            return result.tasks;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getTasks().then(() => {
      data = JSON.parse(window.localStorage.getItem("tasks"));
      //window.location.reload(false);
    });
    setIsLoading(false);
    /*

    async function setKey(key) {
      await window.localStorage.setItem("taskKey", key);
    }



    /*
    async function getCurrentTaskCounter() {
      const requestOptions = {
        method: "get",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      };
      fetch("api/tasks/getTaskCounter", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            console.log("Error getting tasks. Please try again.");
            console.log(result);
          } else {
            //console.log("key", result.key);
            setKey(result.key).then(() => {
              return result;
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (window.localStorage.getItem("taskKey") === null) {
      window.localStorage.setItem("taskKey", 999999);
    }
    let data = [];
    if (window.localStorage.getItem("tasks") !== null) {
      data = JSON.parse(window.localStorage.getItem("tasks"));
    }
    const dataLength = data.length;

    getCurrentTaskCounter().then(() => {
      let currKey = parseInt(window.localStorage.getItem("taskKey"));
      if (window.localStorage.getItem("taskKey") === null) {
        console.log("test");
        window.localStorage.setItem("taskKey", 99999);
      }
      //console.log(currKey, dataLength);
      if (currKey > dataLength + 1) {
        console.log("updating local task list");
        getTasks().then(() => {
          data = JSON.parse(window.localStorage.getItem("tasks"));
          //window.location.reload(false);
        });
      }
    });
    */
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div>
            <select
              name="categories"
              id="cat-select"
              onChange={(e) => {
                window.localStorage.setItem("category", e.target.value);
                console.log(e.target.value);
                window.location.reload(false);
              }}
            >
              <option value="all">
                {category
                  ? "Current Choice: " + category
                  : "Please Choose A Category"}
              </option>
              <option value="all">All</option>
              <option value="Tutoring">Tutoring</option>
              <option value="Swipe Trade">Swipe Trade</option>
              <option value="Ride Share">Ride Share</option>
            </select>
          </div>
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
                                    task_datetime: `${cell.row.original.datetime}`,
                                    task_location: `${cell.row.original.location}`,
                                    task_status: `${cell.row.original.status}`,
                                    task_customeremail: `${cell.row.original.customeremail}`,
                                    task_taskeremail: `${cell.row.original.taskeremail}`,
                                    task_taskername: `${cell.row.original.taskername}`,
                                    task_key: `${cell.row.original.key}`,
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
        </div>
      )}
    </React.Fragment>
  );
}

export default TaskList;
