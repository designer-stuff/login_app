import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getJwt() {
  return localStorage.getItem("token");
}

http.setJwt(getJwt());

export function login(email, password) {
  return http.post(`${apiUrl}/auth`, { email, password });
}
