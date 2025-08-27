import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://randomuser.me",
  timeout: 5000,
});
