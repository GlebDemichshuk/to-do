import {Task} from "../interface/interface";

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    task: Task;
  }
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: {
    task: Task
  }
}

export type ListsAction = AddTaskAction | DeleteTaskAction;