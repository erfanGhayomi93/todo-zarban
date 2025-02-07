import { createContext, Dispatch } from "react";

// Reducer
export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

// Context
export const TaskContext = createContext<
  { state: IState; dispatch: Dispatch<Action> } | undefined
>(undefined);
