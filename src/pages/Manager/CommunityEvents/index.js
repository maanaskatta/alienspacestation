import React, { useState } from "react";
import { useTable } from "react-table";
import { MdAddCircleOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import AddEditCommunityEvents from "./AddEditCommunityEvents";

const CommunityEvents = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [eventToBeEdited, setEventToBeEdited] = useState(null);

  const editEvent = (resident) => {
    setEventToBeEdited(resident);
    setIsModalOpen(true);
  };

  const data = React.useMemo(
    () => [
      {
        eventName: "Halloween Crafts",
        dateAndTime: "24-Oct-2021",
        description:
          "This event has all the crafts and tricks for the Halloween week.",
        venue: "The Club House",
        edit: (
          <button
            onClick={() => editEvent(0)}
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
        Header: "Event Name",
        accessor: "eventName",
      },
      {
        Header: "Date and Time",
        accessor: "dateAndTime",
      },
      {
        Header: "Event Description",
        accessor: "description",
      },
      {
        Header: "Venue",
        accessor: "venue",
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
          <p>Add new event</p>
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
        <AddEditCommunityEvents
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          event={eventToBeEdited}
        />
      ) : null}
    </div>
  );
};

export default CommunityEvents;
