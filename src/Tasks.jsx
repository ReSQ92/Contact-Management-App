export default function Tasks({allTasks}) {
    return (
        <>
        <div>
            {
                allTasks.map((task)=>{
                    return (
                        <div className="tasks">
                            <h3>TASK: {task.title}</h3>
                            <h4>Sub-Tasks:</h4>
                            <ul>
                                {
                                    task.tasks.map((t)=>{
                                        return (
                                            
                                            <li>{t}</li>
                                           
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
        </>
    )
}