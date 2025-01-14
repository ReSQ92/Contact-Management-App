import { useState, useEffect } from "react";

export default function Tasks() {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(()=>{
        getAllTasks()
    },[])

    async function getAllTasks() {
        const allT = (await fetch("http://localhost:3001/tasks")).json();
        const t = await allT;
        setAllTasks(t);
    }

    return (
        <div>
            {
                allTasks.map((task, index)=>{
                    return (
                        <div className="tasks" key={task.id}>
                            <h3>TASK: {task.title}</h3>
                            <h4>Sub-Tasks:</h4>
                            <ul>
                                {
                                    task.tasks.map((t, index)=>{
                                        return (
                                            <li key={index}>{t}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
                )

            }
            
        </div>
    )
}