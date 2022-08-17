import React, { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Task/Tasks";
import useHttp from "./hooks/use-http";

const App = function () {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTask } = useHttp();

  useEffect(() => {
    const transformTasks = function (taskObj) {
      const loadedTasks = [];
      for (const key in taskObj) {
        loadedTasks.push({ id: key, text: taskObj[key].text });
      }
      setTasks(loadedTasks);
    };

    fetchTask(
      {
        url: "https://react-http-fb44f-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTask]);

  const taskAddHandler = function (task) {
    setTasks((prevTask) => [task, ...prevTask]);
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} />
    </React.Fragment>
  );
};

export default App;
