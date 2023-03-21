import React from 'react';

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <div>
      <form>
        <h2>¤¤¤</h2>
        <textarea value={newTodo} onChange={onNewTodoChange} />
        <button type="submit" onClick={onFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
