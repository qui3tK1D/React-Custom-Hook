import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = function (props) {
  const createTask = function (taskText, taskData) {
    const generatedId = taskData.name;
    props.onAddTask({ id: generatedId, text: taskText });
  };

  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = function (taskText) {
    sendRequest(
      {
        url: "https://react-http-fb44f-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: { "Content-Type": "application/json" },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
