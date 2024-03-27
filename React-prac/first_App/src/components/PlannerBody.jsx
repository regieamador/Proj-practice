
import React from "react";
import Sections from "./Sections";

export default function PlannerBody({tasks, handleDelete}){

    return(
        <div className="plannerBody">
            <div className="row g-4">
                <Sections title="To do" tasks={tasks} status="todo" handleDelete={handleDelete}/>
                <Sections title="Doing" tasks={tasks} status="doing" handleDelete={handleDelete}/>
                <Sections title="Done" tasks={tasks} status="done" handleDelete={handleDelete}/>
            </div>          
        </div>
    )
}