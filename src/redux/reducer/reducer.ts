import {ListsAction} from "../types/types";

const initialState = {
}



export default (state = initialState, action: ListsAction) => {
  switch(action.type) {
    default:
      return state;
  }
}