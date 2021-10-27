import React, { useState } from "react";
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineFeaturedPlayList } from "react-icons/md";
import { GiOpenGate } from "react-icons/gi";
import { BiBuildingHouse, BiCategory } from "react-icons/bi";
import { BsHourglassSplit, BsReceipt, BsCardList } from "react-icons/bs";
import { FaUsers, FaTools, FaCoins } from "react-icons/fa";
import {
  AiOutlineCar,
  AiOutlineHistory,
  AiOutlineReconciliation,
} from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import AccessGates from "./AccessGates";
import Units from "./Units";
import { ToastContainer } from "react-toastify";
import Residents from "./Residents";
import Parking from "./Parking";
import RentHistory from "./RentHistory";
import Technicians from "./Technicians";
import WorkOrders from "./WorkOrders";

const managerTiles = [
  {
    label: "Access Gates",
    path: "/accessGates",
    icon: () => <GiOpenGate />,
  },
  {
    label: "Units",
    path: "/units",
    icon: () => <BiBuildingHouse />,
  },
  {
    label: "Residents",
    path: "/residents",
    icon: () => <FaUsers />,
  },
  {
    label: "Parking",
    path: "/parking",
    icon: () => <AiOutlineCar />,
  },
  {
    label: "Rent History",
    path: "/rentHistory",
    icon: () => <AiOutlineHistory />,
  },
  {
    label: "Technician",
    path: "/technician",
    icon: () => <FaTools />,
  },
  {
    label: "Work Orders",
    path: "/workOrders",
    icon: () => <BsReceipt />,
  },
  {
    label: "Department",
    path: "/department",
    icon: () => <BiCategory />,
  },
  {
    label: "Fines",
    path: "/fines",
    icon: () => <FaCoins />,
  },
  {
    label: "Community Events",
    path: "/communityEvents",
    icon: () => <AiOutlineReconciliation />,
  },
  {
    label: "Community Amenities",
    path: "/communityAmenities",
    icon: () => <MdOutlineFeaturedPlayList />,
  },
  {
    label: "Apartment Amenities",
    path: "/apartmentAmenities",
    icon: () => <BsCardList />,
  },
  {
    label: "Photos",
    path: "/photos",
    icon: () => <IoMdPhotos />,
  },
  {
    label: "Announcements",
    path: "/announcements",
    icon: () => <HiOutlineSpeakerphone />,
  },
];

const managerData = {
  firstName: "Maanas",
  lastName: "Katta",
};

const NavBar = () => {
  const history = useHistory();
  const [currentTileIndex, setCurrentTileIndex] = useState(0);

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-3 justify-center items-center p-3">
        <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-800">
          <p className="text-white text-3xl">
            {managerData.firstName[0] + managerData.lastName[0]}
          </p>
        </div>
        <div className="flex justify-end w-full">
          <button
            onClick={() => {
              history.push("/login");
              localStorage.setItem("role", null);
            }}
            className="bg-purple-100 text-black px-3 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
        <div className="flex justify-center items-center">
          <hr className="w-60"></hr>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {managerTiles.map((tile, index) => {
          return (
            <div
              className={
                index === currentTileIndex
                  ? "bg-white text-purple-900 pl-5 py-2"
                  : "text-white px-5"
              }
            >
              <Link
                to={`/manager` + tile.path}
                className=" font-semibold py-4"
                onClick={() => {
                  setCurrentTileIndex(index);
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`text-2xl ${
                      index === currentTileIndex
                        ? "text-purple-800"
                        : "text-white"
                    }`}
                  >
                    {tile.icon()}
                  </div>
                  {tile.label}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Manager() {
  return (
    <div className="flex w-full ">
      <div className="flex w-1/6 bg-purple-900">
        <NavBar />
      </div>
      <div className="w-full">
        <Switch>
          {managerTiles.map((tile) => (
            <Route
              path={`/manager` + tile.path}
              component={() => <WorkOrders label={tile.label} />}
            />
          ))}
        </Switch>
        <Redirect to={`/manager` + managerTiles[0].path} />
      </div>
    </div>
  );
}
