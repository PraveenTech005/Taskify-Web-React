let Tasks = [
  {
    id: 0,
    title: "Cycling",
    description: "Ride a Bicycle",
    due: "20-03-2025",
    priority: "Low",
  },
  {
    id: 1,
    title: "Biking",
    description: "Ride a Bike",
    due: "20-03-2025",
    priority: "Average",
  },
  {
    id: 2,
    title: "Jogging",
    description: "Go For a Jog",
    due: "20-03-2025",
    priority: "High",
  },
];
const exportTasks = () => {
  return Tasks;
};

const newTask = (task) => {
  const newData = { ...task, id: Tasks.length };
  Tasks.push(newData);
};

const updateTask = (task, id) => {
  Tasks[id] = task;
};

const deleteTask = (id) => {
  const data = Tasks.filter((task) => task.id !== id);
  console.log(data);
  Tasks = data;
};

// export default Tasks;
export { exportTasks, newTask, updateTask, deleteTask };
