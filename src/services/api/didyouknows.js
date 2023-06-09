/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import BASE_URL from "./url";

export function getDukById(id) {
  return fetch(`${BASE_URL}/did_you_knows/${id}`)
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

export function getAllDuk() {
  return fetch(`${BASE_URL}/did_you_knows`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then(({ "hydra:member": response }) => response)
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });
}

export function setReviewed(id) {
  const Id = id.toString();
  localStorage.setItem(
    "duk",
    JSON.stringify([...JSON.parse(localStorage.getItem("duk")), Id])
  );
}
export async function getNotReviewed() {
  function createUniqueList(firstList, secondList) {
    return firstList.filter((item) => !secondList.includes(item));
  }
  const allDuk = await getAllDuk();
  const allDukIdArr = allDuk.map((elem) => elem.id.toString());

  const reviewed = localStorage.getItem("duk");
  return createUniqueList(allDukIdArr, reviewed);
}

export function areDukShown() {
  return localStorage.getItem("showduk");
}

export function dontShowDuk() {
  localStorage.removeItem("showduk");
}

export function showDuk() {
  localStorage.setItem("showduk", "true");
}
