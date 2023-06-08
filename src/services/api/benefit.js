/* eslint-disable no-console */
import getIdFromUrl from "../transformers/getIdFromUrl";
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

export function getBenefitsByVintageId(id) {
  return fetch(`${BASE_URL}/benefits`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then(({ "hydra:member": response }) => {
      const arr = [];
      response.forEach((benefit) => {
        if (benefit.vintages && getIdFromUrl(benefit.vintages) === id) {
          arr.push(benefit);
        }
      });
      return arr;
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });
}
