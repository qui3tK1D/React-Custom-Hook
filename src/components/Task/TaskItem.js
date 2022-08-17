import React from "react";
import classes from "./TaskItem.module.css";

const TaskItem = function (props) {
  return <li className={classes.task}>{props.children}</li>;
};

export default TaskItem;
