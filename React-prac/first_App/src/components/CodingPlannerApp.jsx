import React from "react";
import "./styles.css";

import PlannerHeading from "./PlannerHeading";
import PlannerBody from "./PlannerBody";

const oldTask = localStorage.getItem("tasks")

export default function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(oldTask) || [])

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTask)
  }


  return (
    <div className="codingPlanner container">
      <PlannerHeading setTasks={setTasks}/>
      <PlannerBody tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}
