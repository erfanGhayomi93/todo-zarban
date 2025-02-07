import Filters from "./Components/Filters";
import SearchBox from "./Components/SearchBox";
import TaskList from "./Components/TaskList";
import TaskProvider from "./Components/TaskProvider";

const Todos = () => {
  return (
    <TaskProvider>
      <div className="max-w-lg mx-auto p-4 space-y-4">
        <h1 className="text-xl font-bold">Task Manager</h1>
        <SearchBox />
        <Filters />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default Todos;
