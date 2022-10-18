// import { tableData } from "../API/Data";
import "./table.css";
import { useTable } from "react-table";
import { React, useMemo } from "react";
// import {useState, useEffect} from "react";

import "./table.css";

// data state to store the TV Maze API data. Its initial value is an empty array

// Using useEffect to call the API once mounted and set the data
// useEffect(() => {
//   (async () => {
//     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
//     setData(result.data);
//   })();
// }, []);
// Custom component to render Genres
// const Genres = ({ values }) => {
//   // Loop through the array and create a badge-like component instead of a comma-separated string
//   return (
//     <>
//       {values.map((genre, index) => {
//         return (
//           <span key={index} className="badge">
//             {genre}
//           </span>
//         );
//       })}
//     </>
//   );
// };
// const Status = ({ values }) => {
//   // Loop through the array and create a badge-like component instead of a comma-separated string
//   return (
//     <>
//       {values.map((genre, index) => {
//         return (
//           <span key={index} className="badge">
//             {genre}
//           </span>
//         );
//       })}
//     </>
//   );
// };

const Table = () => {
  // const [Data, setData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     setData(result.data);
  //   })();
  // }, []);

  const data = useMemo(
    () => [
      {
        quantity: "03",
        productId: "1001",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price: "5000",
      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price: "5000",
      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price: "5000",
        genres: "1",
      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "rejected",
        contact: "9845634281",
        price: "5000",
      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price: "5000",
      },
    ],

    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "ID",

        accessor: "productId", // accessor is the "key" in the data
      },

      {
        Header: "Name",

        accessor: "name",
      },

      {
        Header: "Date(Y/m/d)",

        accessor: "date",
      },
      {
        Header: "ContactNo.",

        accessor: "contact",
      },

      {
        Header: "Price",

        accessor: "price",
      },
      {
        Header: "Quantity",

        accessor: "quantity",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          // here you can use value to render cell
          // with value of dataProperty
          // or you can access all other row data properties
          // from row.original
          // for example:
          return (
            <div className="statuscolumn"
              
            >
             <span className={`cell ${value === "verified" ? "safe" : "danger"} `}>
              {value}</span>
            </div>
          );
        },
      },
      // {
      //   Header: "Genre(s)",
      //   accessor: "genres",
      //   // Cell method will provide the cell value; we pass it to render a custom component
      //   // Cell: ({ cell: { value } }) => <Genres values={value} />,
      // },
    ],

    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  /////////////////////////////////////////////////////
  return (
    <div className="Table">
      <div className="heading">
        <h4>Recent Orders</h4>
      </div>
      <table {...getTableProps()}>
        <thead>
          {/* <input type="checkbox" name="" id="check" /> */}

          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ height: "1.5rem", fontSize: "15px" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                       
                        height: "1.5rem",
                        fontSize: "15px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
