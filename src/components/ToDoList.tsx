import React, { FC, ChangeEvent, useState } from 'react';
import '../styles/toDoList.css';
import { MdDeleteSweep } from 'react-icons/md';
import { IProps } from '../Interfaces/Interfaces';

const ToDoList: FC<IProps> = ({ task, deleteTask, toggleCheck }) => {
  return (
    <>
      <ul className="list-items">
        <li className="items">
          <div className="items-text">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleCheck(task.taskName)}
            />
            <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
          </div>
          <MdDeleteSweep
            className="delete-icon"
            onClick={() => {
              deleteTask(task.taskName);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ToDoList;
