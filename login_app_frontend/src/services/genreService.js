import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getGenres() {
  return http.get(`${apiUrl}/genres`);
}
