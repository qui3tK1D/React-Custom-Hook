import React from "react";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

const Tasks = function (props) {
  return (
    <Section>
      <div className={classes.container}>
        {props.items.length > 0 && (
          <ul>
            {props.items.map((cur) => {
              return <TaskItem key={cur.id}>{cur.text}</TaskItem>;
            })}
          </ul>
        )}
        {props.items.length === 0 && !props.loading && (
          <h2>No tasks found. Start adding some!</h2>
        )}

        {props.error && <button onClick={props.onFetch}>Try again</button>}

        {props.loading && <p>Loading tasks...</p>}
      </div>
    </Section>
  );
};

export default Tasks;
