import {ADD_TASK, DELETE_TASK, ListsAction} from "../types/types";
import {Task} from "../interface/interface";

export const addTask = (task: Task): ListsAction => {
  return{
    type: ADD_TASK,
    payload: {
      task
    }
  }
}

export const deleteTask = (task: Task) => {
  return {
    type: DELETE_TASK,
    payload: {
      task
    }
  }
}

