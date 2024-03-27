
import React from "react";
import TagsComponents from "./TagsComponent";

export default function Tasks({work, tags, index , handleDelete}){

    return(
        <div className="card py-5 px-3 mb-3">
            <div className="task">
                <h3>{work}</h3>
                <div className="d-flex justify-content-between">
                    <div>
                        {
                            tags.map(tag => <TagsComponents tagName={tag} selected/>)
                        }
                    </div>
                    <button onClick={()=>handleDelete(index)} className="deleteBtn btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    )
}