import React, { useState } from "react";
import "./App.css";
import { AddTodo, Title, Todos } from "./features";

const initTasks = [
  { id: "todo-0", content: "Do Homework", done: false },
  { id: "todo-1", content: "Write a report", done: true },
  { id: "todo-2", content: "Hangout with friends", done: true },
  { id: "todo-3", content: "New Task", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState("all");

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const onDelete = (id) => {
    const updatedTasks = tasks.filter((e) => e.id !== id);
    setTasks(updatedTasks);
  };

  const addTask = (e) => {
    console.log("Add task", e);
    const updatedTasks = [
      ...tasks,
      { id: parseInt(Math.random() * 100), content: e, done: false },
    ];
    setTasks(updatedTasks);
  };

  const toggleDone = (id) => {
    console.log("toggle", id);
    const updatedTasks = tasks.map((e) => {
      if (id === e.id) {
        // use object spread to make a new obkect
        // whose `done` prop has been inverted
        return { ...e, done: !e.done };
      }
      return e;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Title />
      <AddTodo onAdd={addTask} />
      <span>
        <label htmlFor="filter">Filter</label>
        <select name="filter" onChange={onFilterChange} value={filter}>
          <option value="all">...</option>
          <option value="done">Done</option>
          <option value="active">Not Done Yet</option>
        </select>
      </span>
      <Todos
        tasks={tasks}
        onDelete={onDelete}
        toggleDone={toggleDone}
        filter={filter}
      />
    </div>
  );
}
