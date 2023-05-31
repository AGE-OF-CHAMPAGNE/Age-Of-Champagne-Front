/* eslint-disable no-console */
import BASE_URL from "./url";

export function getAllVintages() {
  return fetch(`${BASE_URL}/vintages`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then(({ "hydra:member": vintages }) => vintages)
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });
}

export function getVintageByName(name) {
  return fetch(`${BASE_URL}/vintages`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then(({ "hydra:member": vintages }) => {
      let vintage = null;
      vintages.forEach((element) => {
        if (element.name === name) {
          vintage = element;
        }
      });
      return vintage;
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });
}

export function getVintageById(id) {
  return fetch(`${BASE_URL}/vintage/${id}`)
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

export function getVintageCardById(id) {
  return `${BASE_URL}/vintage/${id}/card`;
}

export function getVintagesByDistrictName(name) {
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
    .then(({ "hydra:member": items }) => {
      let vintages = null;
      items.forEach((element) => {
        if (element.name === name) {
          vintages = element.vintages;
        }
      });
      if (vintages !== null) {
        return vintages;
      }
      throw new Error(`vintage ${name} not found`);
    })
    .then((response) => {
      const vintagesIdArr = [];
      response.forEach((vintage) => {
        const arr = vintage.split("/");
        vintagesIdArr.push(arr[arr.length - 1]);
      });
      return vintagesIdArr;
    })
    .then((vintagesIdArr) => {
      const fetchVintages = vintagesIdArr.map((id) =>
        getVintageById(id).then((vintage) => ({
          vintage,
          card: getVintageCardById(id),
        }))
      );
      return Promise.all(fetchVintages);
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });
}
