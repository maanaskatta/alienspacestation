import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import ASS from "../images/ASS.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Alien from "../images/Alien.jpg";
import { useHistory } from "react-router-dom";

const slideImages = [
  ASS,
  "https://aliensspacestation.files.wordpress.com/2014/11/frzzdw.png",
  "https://d3ajvuw23j7pxv.cloudfront.net/upld_586416352561833147_C09.jpg",
  "https://im.proptiger.com/1/503655/80/space-station-township-others-19466154.jpeg",
];

export default function LoginPage({ setCurrentRole }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const imageSliderProperties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "cubic",
  };

  const handleLogin = () => {
    console.log(userName, password);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentRole("manager");
      history.push("/manager");
    }, 2000);
  };

  return (
    <div className="bg-gray-700 flex">
      <div className="w-2/3">
        <Slide {...imageSliderProperties}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img src={slideImage} alt="" className="h-screen w-full" />
            </div>
          ))}
        </Slide>
      </div>
      <div
        className="w-1/3"
        style={{
          backgroundColor: "ivory",
        }}
      >
        <div className="p-5 flex flex-col justify-between h-screen">
          <div className="flex flex-col gap-10 justify-center">
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/53b5502ce4b0f1c573143ee2/1509891788228-GXKL823DFB68H0XZ1ZXE/SS_Township+Logo.png?format=1500w"
                alt=""
              />
            </div>
            <div className="bg-gray-700 flex flex-col gap-5 rounded-lg p-5">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <AiOutlineUser className="text-white text-xl" />
                  <p className="text-white">Username</p>
                </div>
                <input
                  type="text"
                  className="w-full px-3 py-2 focus:outline-none"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <RiLockPasswordLine className="text-white text-xl" />
                  <p className="text-white">Password</p>
                </div>
                <input
                  type="password"
                  className="w-full px-3 py-2 focus:outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-blue-600 text-lg text-white cursor-pointer px-10 py-2 rounded"
                  onClick={() => {
                    handleLogin();
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <AiOutlineLoading3Quarters className=" animate-spin text-xl" />
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src={Alien}
              alt=""
              style={{
                width: 300,
                height: 300,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
