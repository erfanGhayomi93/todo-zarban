import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const Axios = axios.create({
  baseURL,
});

const path = "/todos";

export const fetchTasks = async (): Promise<ITask[]> => {
  try {
    const { data } = await Axios.get(path);

    return data;
  } catch {
    return [];
  }
};
