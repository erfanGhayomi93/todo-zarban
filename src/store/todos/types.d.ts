type TFilterState = "all" | "completed" | "pending";

type Action =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "SET_FILTER"; payload: TFilterState }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "TOGGLE_TASK"; payload: number };


interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

interface IState {
  tasks: ITask[];
  filter: TFilterState;
  search: string;
}

