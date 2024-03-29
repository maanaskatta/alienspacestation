import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { MdAddCircleOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import AddEditFines from "./AddEditFines";
import getData from "../RouteControllers/getData";
import Loading from "../../../components/Loading";
import NoDataText from "../../../components/NoDataText";

const Fines = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fineToBeEdited, setFineToBeEdited] = useState(null);
  const [fines, setFines] = useState(null);

  const editFine = (resident) => {
    setFineToBeEdited(resident);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setIsLoading(true);
    getData("getFines")
      .then((data) => {
        setFines(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isModalOpen]);

  const data = React.useMemo(
    () =>
      fines
        ? fines.map((fine) => {
            return {
              ...fine,
              edit: (
                <button
                  onClick={() => editFine(fine)}
                  className="flex justify-center items-center w-full cursor-pointer"
                >
                  <BsPencil />
                </button>
              ),
            };
          })
        : [],
    [fines]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Unit Number",
        accessor: "unitNumber",
      },

      {
        Header: "Issue Description",
        accessor: "description",
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

      {isLoading ? (
        <Loading />
      ) : fines && fines.length > 0 ? (
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
                          backgroundColor: "whitesmoke",
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
      ) : (
        <NoDataText message={"No fine records found!..."} />
      )}

      {isModalOpen ? (
        <AddEditFines
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          fine={fineToBeEdited}
          setFineToBeEdited={setFineToBeEdited}
        />
      ) : null}
    </div>
  );
};

export default Fines;
