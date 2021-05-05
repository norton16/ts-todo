import React from 'react'
import { TaskInterface } from '../../Interfaces'

// Declare props
interface PropsInterface {
    task: TaskInterface;
    completeTask(taskToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: PropsInterface) => {
    return (
        <div>
            {task.taskName} {task.deadline}
            <button onClick={() => {completeTask(task.taskName)}}>x</button>
        </div>
    )
}

export default TodoTask
