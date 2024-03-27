import React from "react";
import TagsComponents from "./TagsComponent";

export default function PlannerHeading({setTasks}) {

    const [taskData, setTaskData] = React.useState(
        {
            task : "",
            status : "todo",
            tags : []
        }
    )


    const checkTag = (tag) => {
        return taskData.tags.some((tagName) => tagName === tag)
    }


    const handleChange = (e) => {
        const {name , value} = e.target

        setTaskData(prev => ({
            ...prev, [name] : value
        }))
    }


    const handleTags = (tag) => {
        if(taskData.tags.some((tagname) => tag === tagname)){
            const newTags = taskData.tags.filter((tagname) => tagname !== tag)
            setTaskData(prev => ({
                ...prev, tags : newTags
            }))
        }
        else{
            setTaskData(prev => ({
                ...prev, tags : [...prev.tags, tag]
            }))
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData);

        setTasks(prev => (
            [...prev, taskData]
        ))

        setTaskData({
            task : "",
            status : "todo",
            tags : []
        })
    }

  return (
      <div className="header">
        <form onSubmit={handleSubmit}>
            <div className="input">
                    <input type="text" name="task" onChange={handleChange} value={taskData.task} className="form-control" placeholder="Enter Your Task"/>
            </div>

            <div className="taskList mt-2">
                <div className="btnList">
                    <TagsComponents tagName="HTML" handleTags={handleTags} selected={checkTag("HTML")}/>
                    <TagsComponents tagName="CSS" handleTags={handleTags} selected={checkTag("CSS")}/>
                    <TagsComponents tagName="JavaScript" handleTags={handleTags} selected={checkTag("JavaScript")}/>
                    <TagsComponents tagName="React" handleTags={handleTags} selected={checkTag("React")}/>
                </div>

                <div className="d-flex">
                    <select id="dropdown" name="status" value={taskData.status} onChange={handleChange}>
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    
                    <button type="submit" className="btn btn-primary ms-2">+ Add Task</button>
                </div>
            </div>
        </form>
      </div>
  );
}
