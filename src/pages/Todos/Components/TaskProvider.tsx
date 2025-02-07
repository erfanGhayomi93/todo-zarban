import { FC, ReactNode, useReducer } from "react";
import { reducer, TaskContext } from "../../../store/todos";

const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    filter: "all",
    search: "",
  });
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
