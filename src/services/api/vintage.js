/* eslint-disable no-console */
import BASE_URL from "./url";
import { getDistrictById } from "./district";
import getIdFromUrl from "../transformers/getIdFromUrl";

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
    });
}

export function getVintageByUrlFromQrCode(url) {
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
      let vintage;

      function convertToLowercase(str) {
        const words = str.split(/[\s-]+/);
        let result = "";

        for (let i = 0; i < words.length; i += 1) {
          const cleanedWord = words[i].replace(/['"`]+/g, "");
          result += cleanedWord.toLowerCase();

          if (i !== words.length - 1) {
            result += "-";
          }
        }

        return result;
      }

      vintages.forEach((element) => {
        const name = convertToLowercase(element.name);
        if (getIdFromUrl(url) === name) {
          vintage = element;
        }
      });
      return vintage;
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

export async function getVintageNeighboursById(id) {
  const vintages = await getAllVintages();
  const myVintageIndex = vintages.findIndex((elem) => elem.id === id);
  if (myVintageIndex >= 0) {
    let prevDistrict;
    let nextDistrict;
    let prev;
    let next;

    if (myVintageIndex - 1 >= 0) {
      prevDistrict = await getDistrictById(
        getIdFromUrl(vintages[myVintageIndex - 1].district)
      );
      prev = {
        vintage: vintages[myVintageIndex - 1],
        district: prevDistrict,
      };
    } else {
      prevDistrict = null;
      prev = null;
    }
    if (myVintageIndex + 1 < vintages.length) {
      nextDistrict = await getDistrictById(
        getIdFromUrl(vintages[myVintageIndex + 1].district)
      );

      next = { vintage: vintages[myVintageIndex + 1], district: nextDistrict };
    } else {
      nextDistrict = null;
      next = null;
    }

    return {
      prev,
      next,
    };
  }
  return null;
}

export async function searchVintagesByString(string) {
  const allVintages = await getAllVintages();
  return allVintages.filter((vintage) => vintage.name.includes(string));
}

export async function setVintageToAuthorizedUser(user, vintageId) {
  if (user) {
    return fetch(`${BASE_URL}/users/${user.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
      body: JSON.stringify({
        Vintages: [...user.Vintages, `/api/vintage/${vintageId}`],
      }),
    })
      .then((response) => response)
      .catch((error) => {
        // Обработка ошибок
        console.log(`Error: ${error}`);
      });
  }
  throw new Error("Unauthorized user");
}
