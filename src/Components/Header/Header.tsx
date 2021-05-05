import  React, {FC, ChangeEvent, useState} from 'react'
import {TaskInterface} from '../../Interfaces'
import TodoTask from '../TodoTask/TodoTask'

const Header:FC = () => {

    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0)
    // Todo state is array of custom task interfaces
    const [todo, setTodo] = useState<TaskInterface[]>([])

    // Set task or deadline states based on input
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.target.name === "task" ? setTask(event.target.value) : setDeadline(Number(event.target.value))
    }

    // Create new task object from task and deadline states & updated todo state
    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        // Add task to todo list
        setTodo([...todo, newTask])
    }

    const completeTask = (taskToDelete: string): void => {
        setTodo(todo.filter((task) => {
            return task.taskName != taskToDelete
        }))
    }

    return (
        <div>
            <input type="text" placeholder="..." name="task" onChange={handleChange} />
            <input type="number" placeholder="Deadline" name="deadline" onChange={handleChange} />
            <button onClick={addTask}>Add task</button>
            <div>
                {todo.map((task: TaskInterface, key: number) => {
                    return <TodoTask key={key} task={task} completeTask={completeTask} />;
                })}
            </div>
        </div>
    )
}

export default Header
