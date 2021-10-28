import React, { useState } from "react";
import { useTable } from "react-table";
import { MdAddCircleOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import AddEditFines from "./AddEditFines";

const Fines = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fineToBeEdited, setFineToBeEdited] = useState(null);

  const editFine = (resident) => {
    setFineToBeEdited(resident);
    setIsModalOpen(true);
  };

  const data = React.useMemo(
    () => [
      {
        unitNumber: 1053,
        dateAndTime: "24-Oct-2021",
        issueDescription: "Glass breaking in club house.",
        amount: 500,
        edit: (
          <button
            onClick={() => editFine(0)}
            className="flex justify-center items-center w-full cursor-pointer"
          >
            <BsPencil />
          </button>
        ),
      },
      {
        unitNumber: 1024,
        dateAndTime: "05-May-2020",
        issueDescription: "Damaged basket ball floor",
        amount: 800,
        edit: (
          <button
            onClick={() => editFine(0)}
            className="flex justify-center items-center w-full cursor-pointer"
          >
            <BsPencil />
          </button>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Unit Number",
        accessor: "unitNumber",
      },
      {
        Header: "Date and Time",
        accessor: "dateAndTime",
      },
      {
        Header: "Issue Description",
        accessor: "issueDescription",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },

      {
        Header: "Edit",
        accessor: "edit",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  console.log(data);
  return (
    <div className="flex p-8 flex-col gap-10 w-full">
      <div className="flex w-full items-center justify-between">
        <p className="text-2xl font-semibold">{label}</p>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex items-center gap-1 px-3 py-2 bg-purple-900 text-white text-base rounded"
        >
          <MdAddCircleOutline />
          <p>Add new fine</p>
        </button>
      </div>
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
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
                        padding: "10px",
                        border: "solid 1px gray",
                        backgroundColor: "ivory",
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

      {isModalOpen ? (
        <AddEditFines
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          fine={fineToBeEdited}
        />
      ) : null}
    </div>
  );
};

export default Fines;
