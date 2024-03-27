import React from "react";
import Tasks from "./Tasks";

export default function Sections({ title, tasks, status, handleDelete}) {
  const taskElement = tasks.map(
    (job, index) =>
      job.status === status && <Tasks key={index} work={job.task} tags={job.tags} index={index} handleDelete={handleDelete}/>
  );
  return (
    <section className="ToDoSection col-4">
      <h1 className="text-center">{title}</h1>
      {taskElement}
    </section>
  );
}
