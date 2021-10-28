import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { BsPencil, BsTrash, BsCardList } from "react-icons/bs";
import AddEditApartmentAmenity from "./AddEditApartmentAmenity";

const fakeAmenities = [
  {
    AmenityName: "Ceiling Fan",
  },
  {
    AmenityName: "Vinyl Wood Flooring",
  },
  {
    AmenityName: "Free Cable & Internet w/ HBO",
  },
  {
    AmenityName: "Washer/Dryer in Every Apartment",
  },
  {
    AmenityName: "Granite-like Countertops",
  },
  {
    AmenityName: "Large Closets",
  },
  {
    AmenityName: "Space Saver Microwaves",
  },
  {
    AmenityName: "Stainless Steel Appliances",
  },
  {
    AmenityName: "Outdoor Fireplace",
  },
  {
    AmenityName: "Fireplace",
  },
];

const Amenity = ({ amenity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-3 p-3 border bg-purple-200 rounded shadow-md">
      <div className="flex items-center gap-1">
        <BsCardList className="text-xl" />
        <p className="text-base">{amenity.AmenityName}</p>
      </div>

      <div className="flex justify-end items-center gap-5">
        <BsPencil
          onClick={() => {
            setIsModalOpen(true);
          }}
          className=" text-blue-900 text-xl cursor-pointer"
        />
        <BsTrash className=" text-red-600 text-xl cursor-pointer" />
      </div>

      {isModalOpen ? (
        <AddEditApartmentAmenity
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          amenity={amenity}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default function ApartmentAmenities({ label }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <p>Add new amenity</p>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {fakeAmenities.map((amenity) => (
          <Amenity amenity={amenity} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditApartmentAmenity
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          amenity={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
