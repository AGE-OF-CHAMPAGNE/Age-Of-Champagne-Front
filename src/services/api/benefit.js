/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import BASE_URL from "./url";

export function getBenefitById(id) {
  return fetch(`${BASE_URL}/benefit/${id}`)
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
