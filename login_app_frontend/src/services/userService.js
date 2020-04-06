import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function saveUser(user) {
  return http.post(`${apiUrl}/register`, user);
}

export function resetPassword(user) {
  return http.put(`${apiUrl}/reset`, user);
}
