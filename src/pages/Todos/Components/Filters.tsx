import { filterState } from "../../../common/contanst";
import { useTasks } from "../../../common/hooks/useTasks";

const Filters = () => {
  const { dispatch } = useTasks();

  
  return (
    <div className="flex gap-2">
      {filterState.map((status) => (
        <button
          key={status}
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: status })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default Filters;
