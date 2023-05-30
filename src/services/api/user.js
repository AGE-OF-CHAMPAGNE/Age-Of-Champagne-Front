/* eslint-disable no-console */
import BASE_URL, { LOGIN_URL } from "./url";

export function getMe() {
  return fetch(`${BASE_URL}/me`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });
}
export function login(data) {
  return fetch(`${LOGIN_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request error");
      }
      return response;
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
export async function registration(data) {
  const r = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response);
  return r;
}
