import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  noOfBedRooms: Yup.string().nullable().required("Required"),
  noOfBathRooms: Yup.string().nullable().required("Required"),
  area: Yup.string().nullable().required("Required"),
  rent: Yup.string().nullable().required("Required"),
  imageLink: Yup.string().nullable(),
});

const customStyles = {
  content: {
    maxHeight: "80%",
  },
};

export default function AddEditAccessGate({
  isModalOpen,
  setIsModalOpen,
  unit,
}) {
  const [mutationInProgress, setMutationInProgress] = useState(false);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        htmlOpenClassName="overflow-hidden"
        style={customStyles}
        bodyOpenClassName="overflow-hidden"
        className="inset-y-auto inset-x-auto bg-white rounded-md w-1/2 absolute top-0 mt-10 focus:outline-none overflow-auto"
        overlayClassName="transition-all ease-in-out duration-300 flex justify-center items-center bg-opacity-75 bg-black inset-0 fixed p-8"
      >
        <div>
          <header className="rounded-t-md bg-black w-full py-5 px-12 text-white flex items-center justify-between">
            <div className="text-white">Add new College</div>
            <button onClick={() => setIsModalOpen(false)}>
              <MdClose className="w-6 h-6 text-white" />
            </button>
          </header>

          <div className="p-3 flex flex-col gap-3">
            <Formik
              initialValues={{
                noOfBedRooms: unit ? unit.noOfBedRooms : "",
                noOfBathRooms: unit ? unit.noOfBathRooms : "",
                area: unit ? unit.area : "",
                rent: unit ? unit.rent : "",
                imageLink: unit ? unit.imageLink : "",
              }}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
                toast.success("Success!...");
              }}
            >
              {({ values }) => {
                return (
                  <Form className="flex flex-col p-8 gap-5">
                    <div>
                      <p>
                        # of BedRooms <span className="text-red-600">*</span>
                      </p>
                      <Field
                        name="noOfBedRooms"
                        placeholder="Enter the number of bedrooms..."
                        className="bg-gray-100 px-3 py-2 rounded-lg w-full placeholder-black-444"
                      />
                      <ErrorMessage
                        name="noOfBedRooms"
                        render={(msg) => (
                          <div className="text-red-600 text-sm">{msg}</div>
                        )}
                      />
                    </div>

                    <div>
                      <p>
                        # of BathRooms
                        <span className="text-red-600">*</span>
                      </p>
                      <Field
                        name="noOfBathRooms"
                        placeholder="Enter the number of bathrooms..."
                        className="bg-gray-100 px-3 py-2 rounded-lg w-full placeholder-black-444"
                      />
                      <ErrorMessage
                        name="noOfBathRooms"
                        render={(msg) => (
                          <div className="text-red-600 text-sm">{msg}</div>
                        )}
                      />
                    </div>

                    <div>
                      <p>
                        Area (sqft)
                        <span className="text-red-600">*</span>
                      </p>
                      <Field
                        name="area"
                        placeholder="Enter the area in sqft..."
                        className="bg-gray-100 px-3 py-2 rounded-lg w-full placeholder-black-444"
                      />
                      <ErrorMessage
                        name="area"
                        render={(msg) => (
                          <div className="text-red-600 text-sm">{msg}</div>
                        )}
                      />
                    </div>

                    <div>
                      <p>
                        Rent
                        <span className="text-red-600">*</span>
                      </p>
                      <Field
                        name="rent"
                        placeholder="Enter the rent..."
                        className="bg-gray-100 px-3 py-2 rounded-lg w-full placeholder-black-444"
                      />
                      <ErrorMessage
                        name="rent"
                        render={(msg) => (
                          <div className="text-red-600 text-sm">{msg}</div>
                        )}
                      />
                    </div>

                    <div className="flex justify-end gap-5 my-5">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        type="reset"
                        className="px-3 py-2 bg-red-600 text-white rounded-lg focus:outline-none"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg focus:outline-none"
                      >
                        {mutationInProgress ? (
                          <div className="flex gap-3">
                            <div className="spinner-grow w-6 h-6 mr-3"></div>
                            <div>{"Please wait..."}</div>
                          </div>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}
