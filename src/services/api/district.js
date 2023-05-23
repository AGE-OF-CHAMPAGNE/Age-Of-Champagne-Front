/* eslint-disable no-console */
import BASE_URL from "./url";

export function getDistrictById(id) {
  return fetch(`${BASE_URL}/district/${id}`)
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
      return new Promise({ color_code: "FFFFF" });
    });
}

export function getDistrictByName(name) {
  return fetch(`${BASE_URL}/districts`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then(({ "hydra:member": districts }) => {
      let district = null;
      districts.forEach((element) => {
        if (element.name === name) {
          district = element;
        }
      });
      return district;
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
      return new Promise({ color_code: "FFFFF" });
    });
}
