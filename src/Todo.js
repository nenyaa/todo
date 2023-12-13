import { ListItem, ListItemText, List, ListItemAvatar } from "@mui/material";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="" />
      </ListItem>
    </List>
  );
}

export default Todo;
