import { useQuery } from "@tanstack/react-query";
import { useTasks } from "../../../common/hooks/useTasks";
import { useEffect, useMemo } from "react";
import { fetchTasks } from "../../../api";

const TaskList = () => {
  const {
    state: { tasks, filter, search },
    dispatch,
  } = useTasks();

  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  useEffect(() => {
    if (!!data && isSuccess) {
      dispatch({ type: "SET_TASKS", payload: data });
    }
  }, [data, isSuccess, dispatch]);

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) =>
        filter === "all"
          ? true
          : filter === "completed"
          ? task.completed
          : !task.completed
      )
      .filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [tasks, search, filter]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <ul className="space-y-2">
      {filteredTasks.map((task) => (
        <li key={task.id} className="grid grid-cols-2 p-2 border rounded ">
          <span>{task.title}</span>
          <button
            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            className={`px-2 py-1 rounded ${
              task.completed ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
