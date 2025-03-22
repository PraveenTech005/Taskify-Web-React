import React, { useState } from "react";
import { exportTasks, newTask, updateTask } from "./data";

const NEVModal = ({ modal, setShowModal }) => {
  const List = exportTasks();
  const isView = modal.type === "View";
  const [task, setTask] = useState(
    modal.type === "Edit" || modal.type === "View"
      ? List[modal.id] || {
          title: "",
          description: "",
          due: "No Due",
          priority: "",
        }
      : { title: "", description: "", due: "No Due", priority: "" }
  );

  const submitData = () => {
    const Data = task;
    if (Data.title !== "" && Data.description !== "") {
      newTask(Data);
      setShowModal(false);
    } else alert("No Data");
  };

  const updateData = () => {
    const Data = task;
    if (Data.title !== "" && Data.description !== "") {
      updateTask(Data, modal.id);
      setShowModal(false);
    } else alert("No Data");
  };

  return (
    <div className="flex flex-col justify-evenly items-center z-20 text-black dark:text-white bg-white dark:bg-neutral-800 p-5 w-11/12 border-2 rounded-3xl space-y-2">
      <h1 className="text-2xl border-b-2 w-full text-center p-3">
        {modal.type} Task
      </h1>
      <div className="w-full space-y-2 p-2">
        <h3 className="font-bold">Title</h3>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.currentTarget.value })}
          placeholder="Title"
          className="bg-neutral-300 dark:bg-black  w-full p-2 rounded-xl"
          disabled={isView}
        />
      </div>
      <div className="w-full space-y-2 p-2">
        <h3 className="font-bold">Description</h3>
        <textarea
          type="text"
          cols={5}
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.currentTarget.value })
          }
          placeholder="Description"
          className="bg-neutral-300 dark:bg-black  w-full p-2 rounded-xl"
          disabled={isView}
        />
      </div>
      <div className="w-full p-2 flex flex-row justify-evenly">
        <h3 className="font-bold">Due Date</h3>
        <input
          type="date"
          value={task.due}
          onChange={(e) => setTask({ ...task, due: e.currentTarget.value })}
          placeholder="Due Date"
          className="bg-neutral-300 dark:bg-black  w-full p-2 rounded-xl"
          disabled={isView}
          min={"18-03-2025"}
        />
      </div>
      <div className="w-full space-y-2 p-2">
        <h3 className="font-bold">Priority</h3>
        <div className="flex flex-row justify-evenly items-center">
          {["Low", "Average", "High"].map((item, index) => (
            <button
              key={index}
              className={`p-2 px-4 rounded-full ${
                task.priority === item
                  ? item === "Low"
                    ? "bg-green-600"
                    : item === "Average"
                    ? "bg-amber-400"
                    : "bg-red-700"
                  : "bg-neutral-300 dark:bg-neutral-700"
              } font-bold`}
              disabled={isView}
              onClick={() => setTask({ ...task, priority: item })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {modal.type !== "View" && (
        <div className="w-full flex flex-row justify-evenly items-center">
          <button
            className="bg-neutral-700 py-2 px-8 rounded-xl font-bold text-white"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-700 py-2 px-8 rounded-xl font-bold text-white"
            onClick={modal.type === "New" ? submitData : updateData}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default NEVModal;
