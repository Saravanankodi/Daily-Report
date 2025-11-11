import React, { useState } from "react";
import EmpoloyeeDetails from "../components/layout/EmpoloyeeDetails";
import AddEmpolyee from "../components/forms/AddEmpolyee";
import Header from "../components/layout/Header";

export default function EmpolyeeInfo() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login & signup

  // const handleToggle = () => setIsLogin((prev) => !prev);


  return (
    <div className="w-full h-full min-h-screen bg-gray-100">
      <Header/>
      <div className="w-full min-w-md rounded-lg  p-8">
        <div className="mb-6 max-w-xl m-auto flex justify-center space-x-2 text-xl bg-[#ECECF0] rounded-full p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 rounded-full transition-colors duration-300 ${
              isLogin ? "bg-white text-black" : ""
            }`}
          >
            Add Empolyees
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 rounded-full transition-colors duration-300 ${
              !isLogin ? "bg-white text-black" : ""
            }`}
          >
            Empolyees Details
          </button>
        </div>
        <main className="w-full h-fit flex items-center justify-center transition duration-300 ">
        {isLogin && (
          <AddEmpolyee/>
          )}
        {!isLogin && (
           <EmpoloyeeDetails/>
          )}
        </main>
      </div>
    </div>
  );
}
