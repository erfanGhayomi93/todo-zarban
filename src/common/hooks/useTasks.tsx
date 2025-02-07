import { useContext } from "react";
import { TaskContext } from "../../store/todos";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};
