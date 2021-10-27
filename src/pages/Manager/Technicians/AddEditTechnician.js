import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import CustomStyledSelect from "../../../components/CustomStyledSelect";

const customStyles = {
  content: {
    maxHeight: "80%",
  },
};

export default function AddEditTechnician({
  isModalOpen,
  setIsModalOpen,
  technician,
}) {
  const [mutationInProgress, setMutationInProgress] = useState(false);

  const technicianFieldKeys = [
    {
      name: "department",
      placeholder: "Enter the department...",
      label: "Department",
      type: "select",
      options: [
        {
          label: "Electrical",
          value: "Electrical",
        },
        {
          label: "Plumbing",
          value: "Plumbing",
        },
        {
          label: "General",
          value: "General",
        },
        {
          label: "Carpenter",
          value: "Carpenter",
        },
        {
          label: "Painter",
          value: "Painter",
        },
      ],
    },
    {
      name: "firstName",
      placeholder: "Enter first name...",
      label: "First Name",
    },
    {
      name: "lastName",
      placeholder: "Enter last name...",
      label: "Last Name",
    },
    {
      name: "phoneNumber",
      placeholder: "Enter the phone number...",
      label: "Phone Number",
    },
    {
      name: "password",
      placeholder: "Enter the password...",
      label: "Password",
    },
  ];

  const schema = Yup.object().shape(
    technicianFieldKeys.reduce((prev, cur) => {
      return {
        ...prev,
        [cur.name]: Yup.string().nullable().required("Required"),
      };
    }, {})
  );

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
            <div className="text-white">
              Add {technician ? "Edit" : "New"} Technician
            </div>
            <button onClick={() => setIsModalOpen(false)}>
              <MdClose className="w-6 h-6 text-white" />
            </button>
          </header>

          <div className="p-3 flex flex-col gap-3">
            <Formik
              initialValues={technicianFieldKeys.reduce((prev, cur) => {
                return {
                  ...prev,
                  [cur.name]:
                    technician && technician[cur.name]
                      ? technician[cur.name]
                      : "",
                };
              }, {})}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
                toast.success("Success!...");
              }}
            >
              {({ values }) => {
                return (
                  <Form className="flex flex-col p-8 gap-5">
                    {technicianFieldKeys.map((technician, index) => {
                      if (technician.type !== "select") {
                        return (
                          <div>
                            <p>
                              {technician.label}
                              <span className="text-red-600">*</span>
                            </p>
                            <Field
                              name={technician.name}
                              placeholder={technician.placeholder}
                              className="bg-gray-100 px-3 py-2 rounded-lg w-full placeholder-black-444"
                            />
                            <ErrorMessage
                              name={technician.name}
                              render={(msg) => (
                                <div className="text-red-600 text-sm">
                                  {msg}
                                </div>
                              )}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <p>
                              {technician.label}
                              <span className="text-red-600">*</span>
                            </p>
                            <Field
                              name={technician.name}
                              options={technician.options}
                              component={(props) => (
                                <CustomStyledSelect
                                  {...props}
                                  isClearable
                                  isSearchable
                                />
                              )}
                            />
                            <ErrorMessage
                              name={technician.name}
                              render={(msg) => (
                                <div className="text-red-600 text-sm">
                                  {msg}
                                </div>
                              )}
                            />
                          </div>
                        );
                      }
                    })}

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
