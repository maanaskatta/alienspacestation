import React, { useState } from "react";
import { useTable } from "react-table";
import { MdAddCircleOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import AddEditResidents from "./AddEditResidents";

const Residents = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [residentToBeEdited, setResidentToBeEdited] = useState(null);

  const editResident = (resident) => {
    setResidentToBeEdited(resident);
    setIsModalOpen(true);
  };

  const data = React.useMemo(
    () => [
      {
        firstName: "Maanas",
        lastName: "Katta",
        unitNumber: 1053,
        phoneNumber: 5419304455,
        emailID: "maanaskatta6@gmail.com",
        edit: (
          <button
            onClick={() => editResident(0)}
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
        Header: "First Name",
        accessor: "firstName", // accessor is the "key" in the data
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Unit Number",
        accessor: "unitNumber",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "EmailID",
        accessor: "emailID",
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
          <p>Add new resident</p>
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
        <AddEditResidents
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          resident={residentToBeEdited}
        />
      ) : null}
    </div>
  );
};

export default Residents;
