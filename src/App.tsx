import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './Interfaces/Interfaces';

import ToDoList from './components/ToDoList';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [toDoList, setListToDo] = useState<ITask[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = { taskName: task, checked: false };
    setListToDo([...toDoList, newTask]);
    setTask('');
  };

  const deleteTask = (deleteTaskName: string) => {
    setListToDo(
      toDoList.filter((task) => {
        return task.taskName != deleteTaskName;
      }),
    );
  };

  const toggleCheck = (taskName: string) => {
    setListToDo((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task,
      ),
    );
  };
  return (
    <div className="container">
      <h1>Task Master</h1>

      <div className="inputField">
        <input
          type="text"
          placeholder="Add Item"
          value={task}
          onChange={handleChange}
        />
        <button onClick={addTask}>+</button>
      </div>

      <div className="toDoList">
        <span>To do</span>
        {toDoList.map((task: ITask, key: number) => {
          return (
            <ToDoList
              key={key}
              task={task}
              deleteTask={deleteTask}
              toggleCheck={toggleCheck}
            />
          );
        })}

        {toDoList.length == 0 ? <p className="notify">You are done</p> : null}
      </div>
    </div>
  );
};

export default App;
