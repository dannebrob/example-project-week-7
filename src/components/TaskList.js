/* eslint-disable no-unused-vars */
/* eslint-disable  no-underscore-dangle */
import React from 'react';
import { formatRelative } from 'date-fns';

export const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    <h1>...loading</h1>;
  }

  const onTaskCheckChange = (task) => {
    setTaskList((taskLists) => {
      return taskLists.map((singleTask) => {
        if (singleTask._id === task._id) {
          return {
            ...singleTask,
            isChecked: !singleTask.isChecked
          };
        }
        return singleTask;
      });
    });
  };
  return (
    <section>
      {taskList.reverse().map((task) => (
        <div key={task.id}>
          <h4>{task.description}</h4>
          <input
            onChange={() => {
              onTaskCheckChange(task);
            }}
          />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  );
};
