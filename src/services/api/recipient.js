/* eslint-disable no-console */
import BASE_URL from "./url";

export function getRecipientById(id) {
  return fetch(`${BASE_URL}/recipients/${id}`)
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

export function getRecipientByName(name) {
  return fetch(`${BASE_URL}/recipients`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then(({ "hydra:member": recipients }) => {
      let recipient = null;
      recipients.forEach((element) => {
        if (element.name === name) {
          recipient = element;
        }
      });
      return recipient;
    });
}

export function getAllRecipients() {
  return fetch(`${BASE_URL}/recipients`)
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

export async function searchRecipientsByString(string) {
  const allRecipients = await getAllRecipients();
  return allRecipients.filter((vintage) => vintage.name.includes(string));
}
