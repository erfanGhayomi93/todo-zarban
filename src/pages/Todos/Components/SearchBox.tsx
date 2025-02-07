import { useTasks } from "../../../common/hooks/useTasks";

const SearchBox = () => {
    const { dispatch } = useTasks();

    return (
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
        className="p-2 border rounded w-full"
      />
    );
  };

  
  export default SearchBox;