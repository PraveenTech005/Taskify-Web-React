import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { IoMdAdd } from "react-icons/io";
import { FaFilter, FaRegEdit, FaSort } from "react-icons/fa";
import NEVModal from "./NEVModal";
import List from "./data";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({
    type: "",
    id: null,
  });

  return (
    <>
      <div className="w-full min-h-screen dark:bg-[#0e1118] dark:text-white space-y-5">
        <NavBar />
        <div className="w-full flex flex-row justify-evenly items-center">
          <input
            placeholder="Search..."
            className="w-7/12 dark:bg-black py-2 px-5 rounded-full border-2 "
          />
          <button className="border-2 p-3 rounded-full">
            <FaFilter />
          </button>
          <button className="border-2 p-3 rounded-full">
            <FaSort />
          </button>
        </div>
        <div className="w-full flex flex-col space-y-5 p-3">
          {List.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between items-center py-3 px-5 bg-neutral-300 dark:bg-neutral-800 rounded-2xl"
              onClick={() => {
                setModal({ type: "View", id: index });
                setShowModal(true);
              }}
            >
              <div className="w-10/12 h-full flex flex-col justify-evenly space-y-2">
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-xs italic">{item.description}</p>
                <h3>{item.due}</h3>
              </div>
              <div className=" w-2/12 h-full flex flex-col justify-evenly items-center space-y-5">
                <button
                  className="p-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModal({ type: "Edit", id: index });
                    setShowModal(true);
                  }}
                >
                  <FaRegEdit size={25} />
                </button>
                <p
                  className={`p-2 px-4 rounded-full ${
                    item.priority === "Low"
                      ? "bg-green-500"
                      : item.priority === "Average"
                      ? "bg-amber-500"
                      : item.priority === "High"
                      ? "bg-red-500"
                      : "bg-neutral-300 dark:bg-neutral-700"
                  } text-sm font-bold text-white`}
                >
                  {item.priority}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="fixed bottom-10 right-5 border-2 p-2 rounded-full"
          onClick={() => {
            setShowModal(true);
            setModal({ type: "New", id: null });
          }}
        >
          <IoMdAdd size={35} />
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={() => setShowModal(false)}
          ></div>
          <NEVModal modal={modal} setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
};

export default Home;
