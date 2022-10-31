import React, {useMemo} from "react";
//TODO dig deeper for useMemo
import { useTable } from "react-table";

//TODO should read from database and map them into a table
//react-table  https://kalacloud.com/blog/best-react-table-component/
//Search bar reference: https://juejin.cn/post/7061863419636351006

function TaskList() {

  const data=React.useMemo(
    ()=>[
      {
        col1:"Jane Cooper",
        col2: "Tutoring",
        col3: "$10/hr",
        col4: "Looking for someone to help me with my MATH111 HW.",
        col5: "10/05/2022 14:00  Boelter 4242",
        col6: "Open"
      },
      {
        col1:"Jane Cooper",
        col2: "Swipe Trade",
        col3: "$8",
        col4: "Selling two dining hall swipes for $8 each.",
        col5: "10/13/2022 13:30  Anywhere on campus",
        col6: "In progress"
      },
      {
        col1:"Marvin Mckinney",
        col2: "Ride Share",
        col3: "N/A",
        col4: "Looking for someone to help me with my MATH111 HW.",
        col5: "10/05/2022 14:00  Boelter 4242",
        col6: "Open"
      }
    ]
    ,[]
  );

  const columns=React.useMemo(
    ()=>[
      {
        Header: "Customer Name",
        accessor: "col1"
      },
      {
        Header: "Category",
        accessor: "col2"
      },
      {
        Header: "Price",
        accessor: "col3"
      },
      {
        Header: "Description",
        accessor: "col4"
      },
      {
        Header: "Time & Location",
        accessor: "col5"
      },
      {
        Header: "Customer Name",
        accessor: "col6"
      }
    ]
  );

  const tableInstance=useTable({columns, data});
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <React.Fragment>
    <p>TaskList component placeholder ===</p>
    <table {...getTableProps()}>
     <thead>
       {// Loop over the header rows
       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     {/* Apply the table body props */}
     <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table>
    <p>=== TaskList component placeholder</p>
    </React.Fragment>
  );
}

export default TaskList;
